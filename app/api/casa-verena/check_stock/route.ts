// Vapi tool webhook — check_stock
// Called by the Casa Verena demo agent when a caller asks specifically about
// availability of a known SKU.
// Returns stock status from /lib/casa-verena-data/products.json.

import { NextRequest, NextResponse } from "next/server";
import { products, stockLabel } from "@/lib/casa-verena-data";

export const runtime = "nodejs";

type VapiToolCall = {
  id: string;
  function: {
    name: string;
    arguments: { sku?: string } | string;
  };
};

type VapiRequest = {
  message?: {
    toolCalls?: VapiToolCall[];
  };
};

function parseArgs(args: VapiToolCall["function"]["arguments"]): { sku?: string } {
  if (typeof args === "string") {
    try { return JSON.parse(args); } catch { return {}; }
  }
  return args ?? {};
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as VapiRequest;
    const toolCalls = body?.message?.toolCalls ?? [];

    if (toolCalls.length === 0) {
      return NextResponse.json({ error: "No tool calls in request" }, { status: 400 });
    }

    const results = toolCalls.map((call) => {
      const args = parseArgs(call.function.arguments);
      const skuRaw = (args.sku || "").trim().toUpperCase();

      if (!skuRaw) {
        return {
          toolCallId: call.id,
          result: "No se proporcionó un SKU. Usa search_products en su lugar si solo tienes el nombre del producto.",
        };
      }

      const product = products.find((p) => p.sku.toUpperCase() === skuRaw);

      if (!product) {
        return {
          toolCallId: call.id,
          result: `No encontré un producto con SKU ${skuRaw}. Verifica que el código sea correcto.`,
        };
      }

      return {
        toolCallId: call.id,
        result: {
          sku: product.sku,
          name: product.name,
          availability: stockLabel(product.stock),
          // Only return quantity if it's low — otherwise the agent doesn't need to know exact numbers
          units_remaining: product.stock === "low" ? product.stock_quantity : null,
          notify_when_back: product.stock === "out_of_stock",
        },
      };
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error("[casa-verena/check_stock] route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
