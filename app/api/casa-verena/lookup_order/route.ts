// Vapi tool webhook — lookup_order
// Called by the Casa Verena demo agent when a caller asks about an order status.
// Returns mocked order data from /lib/casa-verena-data/orders.json.

import { NextRequest, NextResponse } from "next/server";
import { orders, formatCOP, products } from "@/lib/casa-verena-data";

export const runtime = "nodejs";

// Vapi sends tool calls in a specific shape — we extract the parameters from message.toolCalls[].function.arguments.
// We respond with results keyed by toolCallId so Vapi maps the response to the right call.

type VapiToolCall = {
  id: string;
  function: {
    name: string;
    arguments: { order_number?: string } | string;
  };
};

type VapiRequest = {
  message?: {
    toolCalls?: VapiToolCall[];
  };
};

function parseArgs(args: VapiToolCall["function"]["arguments"]): { order_number?: string } {
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
      const orderNumberRaw = (args.order_number || "").trim().toUpperCase();

      if (!orderNumberRaw) {
        return {
          toolCallId: call.id,
          result: "No se proporcionó número de pedido. Pídele al cliente el número de pedido completo, que empieza con CV seguido de cinco dígitos.",
        };
      }

      // Normalise: handle "CV-78421", "CV 78421", or just "78421"
      const numericPart = orderNumberRaw.replace(/[^0-9]/g, "");
      const order = orders.find((o) => o.order_number.replace(/[^0-9]/g, "") === numericPart);

      if (!order) {
        return {
          toolCallId: call.id,
          result: `No encontré un pedido con el número ${orderNumberRaw}. Verifica con el cliente que el número sea correcto. Los pedidos de Casa Verena empiezan con CV seguido de cinco dígitos.`,
        };
      }

      const itemSummary = order.items
        .map((i) => {
          const product = products.find((p) => p.sku === i.sku);
          const productName = product ? product.name : i.sku;
          return i.quantity === 1 ? productName : `${i.quantity} x ${productName}`;
        })
        .join(", ");

      const response = {
        order_number: order.order_number,
        customer_type: order.customer_type === "promotora" ? "Promotora" : "Cliente consumidor",
        customer_name: order.customer_name,
        items_summary: itemSummary,
        total: formatCOP(order.total),
        status: order.status_es,
        eta: order.eta_es,
        carrier: order.carrier ?? "Aún no asignado",
        tracking_number: order.tracking_number ?? "Aún no generado",
        shipping_city: order.shipping_city,
        ordered_date: order.ordered_date,
        notes: order.notes ?? null,
      };

      return {
        toolCallId: call.id,
        result: response,
      };
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error("[casa-verena/lookup_order] route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
