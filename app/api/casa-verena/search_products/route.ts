// Vapi tool webhook — search_products
// Called by the Casa Verena demo agent when a caller asks about products,
// prices, or catalogue availability.
// Returns matching products from /lib/casa-verena-data/products.json.

import { NextRequest, NextResponse } from "next/server";
import { products, formatCOP, normalise, stockLabel } from "@/lib/casa-verena-data";

export const runtime = "nodejs";

type VapiToolCall = {
  id: string;
  function: {
    name: string;
    arguments: { query?: string } | string;
  };
};

type VapiRequest = {
  message?: {
    toolCalls?: VapiToolCall[];
  };
};

function parseArgs(args: VapiToolCall["function"]["arguments"]): { query?: string } {
  if (typeof args === "string") {
    try { return JSON.parse(args); } catch { return {}; }
  }
  return args ?? {};
}

const MAX_RESULTS = 5; // cap so the agent doesn't get back 20 products at once

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as VapiRequest;
    const toolCalls = body?.message?.toolCalls ?? [];

    if (toolCalls.length === 0) {
      return NextResponse.json({ error: "No tool calls in request" }, { status: 400 });
    }

    const results = toolCalls.map((call) => {
      const args = parseArgs(call.function.arguments);
      const queryRaw = (args.query || "").trim();

      if (!queryRaw) {
        return {
          toolCallId: call.id,
          result: "No se proporcionó un término de búsqueda. Pídele al cliente que especifique qué producto, categoría o SKU está buscando.",
        };
      }

      const query = normalise(queryRaw);

      // Three pass match: exact SKU, name match, category match — first hit wins.
      // Each subsequent pass is broader, so SKU lookups are precise and free-text queries still work.
      let matches = products.filter((p) => p.sku.toLowerCase() === query);

      if (matches.length === 0) {
        matches = products.filter((p) => normalise(p.name).includes(query));
      }

      if (matches.length === 0) {
        matches = products.filter((p) => normalise(p.category).includes(query));
      }

      if (matches.length === 0) {
        return {
          toolCallId: call.id,
          result: `No encontré productos que coincidan con "${queryRaw}". Sugiere al cliente buscar por una categoría más amplia o pregúntale qué tipo de producto necesita.`,
        };
      }

      const trimmed = matches.slice(0, MAX_RESULTS).map((p) => ({
        sku: p.sku,
        name: p.name,
        category: p.category,
        price: formatCOP(p.price),
        availability: stockLabel(p.stock),
        description: p.description,
      }));

      const summary = matches.length > MAX_RESULTS
        ? `Encontré ${matches.length} productos. Mostrando los primeros ${MAX_RESULTS}. Sugiere al cliente refinar la búsqueda si no encuentra lo que necesita.`
        : `Encontré ${matches.length} ${matches.length === 1 ? "producto" : "productos"}.`;

      return {
        toolCallId: call.id,
        result: {
          summary,
          products: trimmed,
        },
      };
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error("[casa-verena/search_products] route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
