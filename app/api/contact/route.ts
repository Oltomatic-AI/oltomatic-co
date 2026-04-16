import { NextRequest, NextResponse } from "next/server";
import { notifyTeam, replyToProspect, forwardToWebhook } from "@/lib/email";
import { contactInternalHtml, contactProspectHtml, type ContactPayload, type Lang } from "@/lib/email-templates";

export const runtime = "nodejs";

const SITE: ContactPayload["site"] = "oltomatic.co";

function parseLang(v: unknown): Lang {
  return v === "en" ? "en" : "es"; // default Spanish for .co
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, interest, message, lang } = body ?? {};

    if (typeof name !== "string" || typeof email !== "string" || !name.trim() || !email.trim()) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const payload: ContactPayload = {
      name: name.trim(),
      email: email.trim(),
      company: typeof company === "string" ? company.trim() : undefined,
      interest: typeof interest === "string" ? interest.trim() : undefined,
      message: typeof message === "string" ? message.trim() : undefined,
      lang: parseLang(lang),
      site: SITE,
    };

    const internalPromise = notifyTeam({
      subject: `[CO] New enquiry · ${payload.name}${payload.company ? ` · ${payload.company}` : ""}`,
      html: contactInternalHtml(payload),
      replyTo: payload.email,
    });

    replyToProspect(payload.email, {
      subject: payload.lang === "es" ? "Gracias — pronto te responderemos" : "Thanks — we'll be in touch",
      html: contactProspectHtml(payload),
    }).catch((err) => console.error("[contact] prospect reply failed:", err));

    forwardToWebhook({ type: "contact", ...payload });

    const internal = await internalPromise;
    if (!internal.ok) {
      console.error("[contact] internal notification failed:", internal.error, payload);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
