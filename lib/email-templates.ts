/**
 * Branded email templates for oltomatic.co — bilingual (es/en).
 * Internal notifications stay English (for the team inbox).
 * Prospect-facing emails honour the language the form was submitted in.
 */
import { escapeHtml } from "./email";

const BRAND_BLUE = "#1560A8";
const TEXT_INK = "#0b0b0c";
const TEXT_MUTED = "#64635f";
const BORDER = "#e6e4dd";
const CANVAS = "#fafaf7";

export type Lang = "es" | "en";

function shell(bodyHtml: string): string {
  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:${CANVAS};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:${TEXT_INK};">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid ${BORDER};border-radius:12px;overflow:hidden;">
    <div style="padding:20px 28px;border-bottom:1px solid ${BORDER};">
      <div style="display:inline-block;width:28px;height:28px;border-radius:6px;background:${BRAND_BLUE};color:white;text-align:center;font-weight:700;font-size:16px;line-height:28px;vertical-align:middle;">O</div>
      <span style="margin-left:10px;font-weight:600;font-size:14px;letter-spacing:0.5px;vertical-align:middle;"><span style="color:${BRAND_BLUE};">OLTO</span>MATIC</span>
    </div>
    <div style="padding:28px;">${bodyHtml}</div>
    <div style="padding:16px 28px;border-top:1px solid ${BORDER};font-size:11px;color:${TEXT_MUTED};">
      Oltomatic Ltd · Company No. 16774271 · Registered in England &amp; Wales<br/>
      <a href="https://oltomatic.co" style="color:${BRAND_BLUE};text-decoration:none;">oltomatic.co</a>
    </div>
  </div>
</body></html>`;
}

function row(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 10px 6px 0;color:${TEXT_MUTED};font-size:12px;vertical-align:top;white-space:nowrap;width:1%;">${escapeHtml(label)}</td>
    <td style="padding:6px 0;color:${TEXT_INK};font-size:14px;">${escapeHtml(value)}</td>
  </tr>`;
}

function block(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `<div style="margin-top:14px;padding:14px 16px;background:${CANVAS};border-radius:8px;">
    <p style="margin:0 0 6px 0;color:${TEXT_MUTED};font-size:11px;text-transform:uppercase;letter-spacing:1px;">${escapeHtml(label)}</p>
    <p style="margin:0;color:${TEXT_INK};font-size:14px;line-height:1.5;white-space:pre-wrap;">${escapeHtml(value)}</p>
  </div>`;
}

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  interest?: string;
  message?: string;
  lang: Lang;
  site: "oltomatic.co";
};

/** Internal notification — always English (team inbox). */
export function contactInternalHtml(p: ContactPayload): string {
  return shell(`
    <h1 style="margin:0 0 4px 0;font-size:20px;font-weight:600;">New contact form submission</h1>
    <p style="margin:0 0 18px 0;color:${TEXT_MUTED};font-size:13px;">From ${p.site} · Language: ${p.lang.toUpperCase()}</p>
    <table style="width:100%;border-collapse:collapse;">
      ${row("Name", p.name)}
      ${row("Email", p.email)}
      ${row("Company", p.company)}
      ${row("Interest", p.interest)}
    </table>
    ${block("Message", p.message)}
    <p style="margin:22px 0 0 0;font-size:12px;color:${TEXT_MUTED};">Reply directly to this email to respond. Remember: prospect expects a reply in ${p.lang === "es" ? "Spanish" : "English"}.</p>
  `);
}

export function contactProspectHtml(p: ContactPayload): string {
  const firstName = p.name.split(" ")[0] || p.name;
  const safe = escapeHtml(firstName);

  if (p.lang === "es") {
    return shell(`
      <p style="margin:0 0 14px 0;font-size:18px;font-weight:600;">Hola ${safe},</p>
      <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;">
        Gracias por escribirnos. Hemos recibido tu mensaje y uno de nosotros te responderá en un día hábil — normalmente antes.
      </p>
      <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;">
        Si es urgente, también puedes reservar una llamada directamente:
        <a href="https://oltomatic.co/contact" style="color:${BRAND_BLUE};">oltomatic.co/contact</a>
      </p>
      <p style="margin:20px 0 4px 0;font-size:15px;line-height:1.6;">Hablamos pronto,</p>
      <p style="margin:0;font-size:15px;line-height:1.6;">El equipo de Oltomatic</p>
    `);
  }

  return shell(`
    <p style="margin:0 0 14px 0;font-size:18px;font-weight:600;">Hi ${safe},</p>
    <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;">
      Thanks for getting in touch. We've got your message and one of us will reply within one business day — usually sooner.
    </p>
    <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;">
      If it's urgent, you can also book a time directly:
      <a href="https://oltomatic.co/contact" style="color:${BRAND_BLUE};">oltomatic.co/contact</a>
    </p>
    <p style="margin:20px 0 4px 0;font-size:15px;line-height:1.6;">Speak soon,</p>
    <p style="margin:0;font-size:15px;line-height:1.6;">The Oltomatic team</p>
  `);
}

export type SupportPayload = {
  name: string;
  email: string;
  product?: string;
  issue: string;
  description?: string;
  lang: Lang;
  site: "oltomatic.co";
};

export function supportInternalHtml(p: SupportPayload): string {
  return shell(`
    <h1 style="margin:0 0 4px 0;font-size:20px;font-weight:600;">🎫 New support ticket</h1>
    <p style="margin:0 0 18px 0;color:${TEXT_MUTED};font-size:13px;">From ${p.site} · Language: ${p.lang.toUpperCase()}</p>
    <table style="width:100%;border-collapse:collapse;">
      ${row("Name", p.name)}
      ${row("Email", p.email)}
      ${row("Product", p.product)}
      ${row("Issue", p.issue)}
    </table>
    ${block("Details", p.description)}
    <p style="margin:22px 0 0 0;font-size:12px;color:${TEXT_MUTED};">Customer expects a reply in ${p.lang === "es" ? "Spanish" : "English"}.</p>
  `);
}

export function supportProspectHtml(p: SupportPayload): string {
  const firstName = p.name.split(" ")[0] || p.name;
  const safe = escapeHtml(firstName);

  if (p.lang === "es") {
    return shell(`
      <p style="margin:0 0 14px 0;font-size:18px;font-weight:600;">Hola ${safe},</p>
      <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;">
        Tu ticket de soporte está registrado. Te responderemos en un día hábil — clientes de planes Growth y Scale en un máximo de 4 horas.
      </p>
      ${block("Problema", p.issue)}
      <p style="margin:20px 0 0 0;font-size:15px;line-height:1.6;">— El equipo de Oltomatic</p>
    `);
  }

  return shell(`
    <p style="margin:0 0 14px 0;font-size:18px;font-weight:600;">Hi ${safe},</p>
    <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;">
      Your support ticket is in. We'll respond within one business day — Growth &amp; Scale customers within 4 hours.
    </p>
    ${block("Issue", p.issue)}
    <p style="margin:20px 0 0 0;font-size:15px;line-height:1.6;">— The Oltomatic team</p>
  `);
}
