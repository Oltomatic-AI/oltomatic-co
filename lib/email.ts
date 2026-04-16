/**
 * Email helper — wraps Resend so API routes stay tidy.
 *
 * Required env vars (set in Vercel project settings):
 *   RESEND_API_KEY          — from https://resend.com/api-keys
 *   INTAKE_NOTIFY_EMAIL     — where internal alerts go (defaults to tech@oltomatic.ai)
 *   RESEND_FROM_ADDRESS     — verified sender (defaults to "Oltomatic <hello@oltomatic.ai>")
 *
 * Optional:
 *   CONTACT_WEBHOOK_URL     — if set, also forwards submissions to n8n
 *
 * Fails soft: if RESEND_API_KEY is missing, the helper logs a warning and
 * returns ok:false rather than throwing. We never want a misconfigured env
 * to return a 500 to a prospect mid-submission.
 */
import { Resend } from "resend";

type SendArgs = {
  subject: string;
  html: string;
  replyTo?: string;
};

const DEFAULT_FROM = "Oltomatic <hello@oltomatic.ai>";
const DEFAULT_NOTIFY = "tech@oltomatic.ai";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[email] RESEND_API_KEY not set — email sending disabled");
    return null;
  }
  return new Resend(key);
}

/** Send an internal notification to the team inbox. */
export async function notifyTeam({ subject, html, replyTo }: SendArgs): Promise<{ ok: boolean; id?: string; error?: string }> {
  const resend = getResend();
  if (!resend) return { ok: false, error: "resend_not_configured" };

  const to = process.env.INTAKE_NOTIFY_EMAIL || DEFAULT_NOTIFY;
  const from = process.env.RESEND_FROM_ADDRESS || DEFAULT_FROM;

  try {
    const { data, error } = await resend.emails.send({ from, to, replyTo, subject, html });
    if (error) {
      console.error("[email] notifyTeam failed:", error);
      return { ok: false, error: error.message };
    }
    return { ok: true, id: data?.id };
  } catch (err) {
    console.error("[email] notifyTeam threw:", err);
    return { ok: false, error: err instanceof Error ? err.message : "unknown" };
  }
}

/** Send a confirmation to the person who submitted. */
export async function replyToProspect(to: string, { subject, html }: SendArgs): Promise<{ ok: boolean; id?: string; error?: string }> {
  const resend = getResend();
  if (!resend) return { ok: false, error: "resend_not_configured" };

  const from = process.env.RESEND_FROM_ADDRESS || DEFAULT_FROM;

  try {
    const { data, error } = await resend.emails.send({ from, to, subject, html });
    if (error) {
      console.error("[email] replyToProspect failed:", error);
      return { ok: false, error: error.message };
    }
    return { ok: true, id: data?.id };
  } catch (err) {
    console.error("[email] replyToProspect threw:", err);
    return { ok: false, error: err instanceof Error ? err.message : "unknown" };
  }
}

/**
 * Fire-and-forget POST to n8n if CONTACT_WEBHOOK_URL is set.
 * Logs errors but never throws — we don't want n8n downtime to break the form.
 */
export function forwardToWebhook(payload: Record<string, unknown>): void {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return;

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, timestamp: new Date().toISOString() }),
  }).catch((err) => console.error("[email] webhook forward failed:", err));
}

/** Minimal HTML escape for embedding user input into email templates. */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
