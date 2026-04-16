import { NextRequest, NextResponse } from "next/server";
import { notifyTeam, replyToProspect, forwardToWebhook } from "@/lib/email";
import { supportInternalHtml, supportProspectHtml, type SupportPayload, type Lang } from "@/lib/email-templates";

export const runtime = "nodejs";

const SITE: SupportPayload["site"] = "oltomatic.co";

function parseLang(v: unknown): Lang {
  return v === "en" ? "en" : "es";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, product, issue, description, lang } = body ?? {};

    if (typeof name !== "string" || typeof email !== "string" || typeof issue !== "string"
        || !name.trim() || !email.trim() || !issue.trim()) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const payload: SupportPayload = {
      name: name.trim(),
      email: email.trim(),
      product: typeof product === "string" ? product.trim() : undefined,
      issue: issue.trim(),
      description: typeof description === "string" ? description.trim() : undefined,
      lang: parseLang(lang),
      site: SITE,
    };

    const internalPromise = notifyTeam({
      subject: `[CO] Support · ${payload.product || "General"} · ${payload.issue.slice(0, 60)}`,
      html: supportInternalHtml(payload),
      replyTo: payload.email,
    });

    replyToProspect(payload.email, {
      subject: payload.lang === "es" ? "Tu ticket de soporte está registrado" : "Your support ticket is in",
      html: supportProspectHtml(payload),
    }).catch((err) => console.error("[support] prospect reply failed:", err));

    forwardToWebhook({ type: "support", ...payload });

    const internal = await internalPromise;
    if (!internal.ok) {
      console.error("[support] internal notification failed:", internal.error, payload);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[support] route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
