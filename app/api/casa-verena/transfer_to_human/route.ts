// Vapi tool webhook — transfer_to_human
// Called by the Casa Verena demo agent when escalation is needed.
// In the demo, this is logged and acknowledged — no actual transfer happens.
// In a production deployment this would trigger a real handoff to a human queue.

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type VapiToolCall = {
  id: string;
  function: {
    name: string;
    arguments: { reason?: string } | string;
  };
};

type VapiRequest = {
  message?: {
    toolCalls?: VapiToolCall[];
    call?: {
      id?: string;
    };
  };
};

function parseArgs(args: VapiToolCall["function"]["arguments"]): { reason?: string } {
  if (typeof args === "string") {
    try { return JSON.parse(args); } catch { return {}; }
  }
  return args ?? {};
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as VapiRequest;
    const toolCalls = body?.message?.toolCalls ?? [];
    const callId = body?.message?.call?.id ?? "unknown";

    if (toolCalls.length === 0) {
      return NextResponse.json({ error: "No tool calls in request" }, { status: 400 });
    }

    const results = toolCalls.map((call) => {
      const args = parseArgs(call.function.arguments);
      const reason = (args.reason || "Sin motivo especificado").trim();

      // Demo behaviour: log the escalation for review. In production this would
      // queue a real handoff. The agent's response message acknowledges the
      // transfer to keep the caller on the line conceptually.
      console.log(`[casa-verena/transfer] callId=${callId} reason="${reason}"`);

      return {
        toolCallId: call.id,
        result: {
          status: "acknowledged",
          message: "Transferencia registrada. En esta demostración no hay un asesor humano disponible, pero en producción la llamada se enrutaría a un equipo de servicio al cliente.",
          reason_logged: reason,
        },
      };
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error("[casa-verena/transfer_to_human] route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
