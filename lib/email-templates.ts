/**
 * Branded email templates for oltomatic.co — bilingual (es/en).
 *
 * Design: mirror of oltomatic-ai templates.
 * Difference: prospect-facing copy is language-aware; internal emails
 * stay English (team inbox). All brand colours and layout are identical.
 */
import { escapeHtml } from "./email";

// ── Brand palette (matches site globals.css) ────────────────────────
const BASE = "#080810";
const SURFACE = "#0F0F1A";
const ELEVATED = "#161625";
const BORDER = "#252538";
const BLUE = "#1560A8";
const BLUE_LIGHT = "#5BA3E0";
const INK = "#EEEEF5";
const MUTED = "#9999B0";
const DIM = "#55556A";

// Product accents (exact match to live site)
const VOICE_RED = "#BE3A55";
const REACH_GREEN = "#16A34A";
const OPS_PURPLE = "#7C3AED";

// Light-mode palette (internal emails)
const LINK = "#1560A8";
const L_BG = "#fafaf7";
const L_SURFACE = "#ffffff";
const L_INK = "#0b0b0c";
const L_MUTED = "#64635f";
const L_BORDER = "#e6e4dd";

export type Lang = "es" | "en";

// ── Shell components ────────────────────────────────────────────────

function header(mode: "dark" | "light"): string {
  const bg = mode === "dark" ? SURFACE : L_SURFACE;
  const borderCol = mode === "dark" ? BORDER : L_BORDER;
  const maticColor = mode === "dark" ? INK : L_INK;
  return `<tr><td style="padding:22px 32px;background:${bg};border-bottom:1px solid ${borderCol};">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
      <td style="vertical-align:middle;">
        <div style="width:32px;height:32px;border-radius:7px;background:${BLUE};color:#ffffff;text-align:center;font-weight:800;font-size:18px;line-height:32px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">O</div>
      </td>
      <td style="vertical-align:middle;padding-left:12px;">
        <span style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-weight:700;font-size:15px;letter-spacing:0.5px;"><span style="color:${BLUE};">OLTO</span><span style="color:${maticColor};">MATIC</span></span>
      </td>
    </tr></table>
  </td></tr>`;
}

function footer(mode: "dark" | "light", lang: Lang): string {
  const bg = mode === "dark" ? BASE : L_BG;
  const borderCol = mode === "dark" ? BORDER : L_BORDER;
  const muted = mode === "dark" ? DIM : L_MUTED;
  const link = mode === "dark" ? BLUE_LIGHT : LINK;
  const t = lang === "es"
    ? { reg: "Registrada en Inglaterra y Gales", reply: "Responde a cualquier mensaje nuestro en" }
    : { reg: "Registered in England & Wales",     reply: "Reply to any message we send from" };
  return `<tr><td style="padding:22px 32px;background:${bg};border-top:1px solid ${borderCol};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:11px;line-height:1.6;color:${muted};">
    <strong style="color:${muted};">Oltomatic Ltd</strong> · Company No. 16774271 · ${t.reg}<br/>
    <a href="https://oltomatic.co" style="color:${link};text-decoration:none;">oltomatic.co</a> · ${t.reply} <a href="mailto:hello@oltomatic.co" style="color:${link};text-decoration:none;">hello@oltomatic.co</a>
  </td></tr>`;
}

function darkShell(bodyHtml: string, lang: Lang): string {
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="color-scheme" content="dark"/><meta name="supported-color-schemes" content="dark"/><title>Oltomatic</title></head>
<body style="margin:0;padding:0;background:${BASE};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${BASE};">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:${SURFACE};border:1px solid ${BORDER};border-radius:16px;overflow:hidden;">
        ${header("dark")}
        <tr><td style="padding:36px 32px 12px 32px;color:${INK};">${bodyHtml}</td></tr>
        ${footer("dark", lang)}
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function lightShell(bodyHtml: string, lang: Lang): string {
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"/><title>Oltomatic — Internal</title></head>
<body style="margin:0;padding:0;background:${L_BG};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${L_BG};">
    <tr><td align="center" style="padding:24px 16px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background:${L_SURFACE};border:1px solid ${L_BORDER};border-radius:12px;overflow:hidden;">
        ${header("light")}
        <tr><td style="padding:24px 28px;color:${L_INK};">${bodyHtml}</td></tr>
        ${footer("light", lang)}
      </table>
    </td></tr>
  </table>
</body></html>`;
}

// ── Localised copy ──────────────────────────────────────────────────

const COPY = {
  es: {
    next_steps_label: "Qué pasa a continuación",
    step1_title: "Un humano te responde",
    step1_desc: "Un miembro de nuestro equipo se pondrá en contacto — normalmente en pocas horas, siempre en un día hábil.",
    step2_title: "Una llamada de 30 minutos",
    step2_desc: "Escuchamos primero. Sin presentaciones, sin jerga. Queremos entender tu operación.",
    step3_title: "Una recomendación honesta",
    step3_desc: "Si somos el socio adecuado, recibes una propuesta clara. Si no, te lo decimos — y te señalamos a alguien que sí lo sea.",

    while_label: "Mientras esperas",
    while_intro: "Explora un poco — o habla con OTTO, nuestro agente de voz, disponible en el sitio ahora mismo.",
    bespoke_tag: "A Medida · Nuestro producto estrella",
    bespoke_title: "Sistemas de IA personalizados, construidos desde cero",
    bespoke_desc: "Cuando una herramienta estándar no es suficiente. Estrategia, arquitectura, desarrollo, despliegue — de principio a fin.",
    voice_tag: "IA de Voz",
    voice_desc: "Agentes de voz con IA disponibles 24/7 para llamadas entrantes",
    reach_tag: "Generación de leads",
    reach_desc: "Prospección y alcance automatizados",
    ops_tag: "Operaciones",
    ops_desc: "Automatización del back-office de tu negocio",
    talk_to_otto: "🎙  Habla con OTTO",

    sign_signoff: "Hablamos pronto,",
    sign_cofounders: "Cofundadores, Oltomatic · Operando globalmente",

    hero_tag: "Gracias por escribirnos",
    hero_greeting: (name: string) => `Hola ${name} — lo tenemos.`,
    hero_body: "Tu mensaje está en el lugar correcto. Leemos personalmente todo lo que llega, así que no estará en una cola perdida.",
    ps: "P.D. ¿Más preguntas mientras tanto? Responde a este correo — nos llega directamente.",

    support_tag: "Ticket recibido",
    support_greeting: (name: string) => `Hola ${name} — estamos en ello.`,
    support_body: "Tu ticket de soporte ha sido registrado. Responderemos en un día hábil — clientes Growth y Scale en 4 horas.",
    support_issue_label: "El problema que reportaste",
    support_followup: "Si piensas en algo más que deberíamos saber, responde a este correo.",
  },
  en: {
    next_steps_label: "What happens next",
    step1_title: "A real person replies",
    step1_desc: "A member of our team will be in touch — usually within a few hours, always within one business day.",
    step2_title: "A 30-minute discovery call",
    step2_desc: "We listen first. No pitch deck, no jargon. We want to understand the operation.",
    step3_title: "An honest recommendation",
    step3_desc: "If we're the right fit, you get a clear proposal. If we're not, we'll tell you — and point you somewhere that is.",

    while_label: "While you wait",
    while_intro: "Have a poke around — or talk to OTTO, our voice agent, live on the site right now.",
    bespoke_tag: "Bespoke · Our flagship",
    bespoke_title: "Custom AI systems, built from the ground up",
    bespoke_desc: "When a productised tool won't cut it. Strategy, architecture, build, deployment — end to end.",
    voice_tag: "Voice AI",
    voice_desc: "24/7 AI voice agents for inbound calls",
    reach_tag: "Lead generation",
    reach_desc: "Automated prospecting and outreach",
    ops_tag: "Operations",
    ops_desc: "Back-office workflow automation",
    talk_to_otto: "🎙  Talk to OTTO",

    sign_signoff: "Speak soon,",
    sign_cofounders: "Co-founders, Oltomatic · Operating globally",

    hero_tag: "Thanks for reaching out",
    hero_greeting: (name: string) => `Hi ${name} — we've got it.`,
    hero_body: "Your message is in the right place. We read everything that comes in personally, so it won't be sitting in a queue somewhere.",
    ps: "P.S. Questions in the meantime? Just reply to this email — it reaches us directly.",

    support_tag: "Ticket received",
    support_greeting: (name: string) => `Hi ${name} — we're on it.`,
    support_body: "Your support ticket has been logged. We'll respond within one business day — Growth & Scale customers within 4 hours.",
    support_issue_label: "The issue you flagged",
    support_followup: "If you think of anything else we should know, just reply to this email.",
  },
} as const;

// ── Content modules (bilingual) ─────────────────────────────────────

function nextSteps(lang: Lang): string {
  const c = COPY[lang];
  const steps = [
    { n: "01", title: c.step1_title, desc: c.step1_desc },
    { n: "02", title: c.step2_title, desc: c.step2_desc },
    { n: "03", title: c.step3_title, desc: c.step3_desc },
  ];

  const rows = steps.map((s) => `
    <tr><td style="padding:14px 0;border-top:1px solid ${BORDER};">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
        <td style="vertical-align:top;width:48px;">
          <span style="display:inline-block;color:${BLUE_LIGHT};font-weight:700;font-size:12px;letter-spacing:0.12em;font-family:ui-monospace,'SF Mono',Menlo,Consolas,monospace;">${s.n}</span>
        </td>
        <td style="vertical-align:top;">
          <div style="color:${INK};font-weight:600;font-size:15px;line-height:1.3;">${s.title}</div>
          <div style="color:${MUTED};font-size:14px;line-height:1.55;margin-top:4px;">${s.desc}</div>
        </td>
      </tr></table>
    </td></tr>`).join("");

  return `<div style="margin:28px 0 8px 0;">
    <div style="color:${BLUE_LIGHT};font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:10px;">${c.next_steps_label}</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">${rows}</table>
  </div>`;
}

function whileYouWait(lang: Lang): string {
  const c = COPY[lang];
  const base = "https://oltomatic.co";

  const bespoke = `
    <tr><td style="padding:10px 0 16px 0;">
      <a href="${base}/contact" style="display:block;text-decoration:none;padding:22px 24px;background:linear-gradient(135deg, ${ELEVATED} 0%, #12122a 100%);border:1px solid rgba(21,96,168,0.4);border-radius:12px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
          <td style="vertical-align:middle;">
            <div style="color:${BLUE_LIGHT};font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:8px;">${c.bespoke_tag}</div>
            <div style="color:${INK};font-weight:700;font-size:18px;line-height:1.25;letter-spacing:-0.01em;">${c.bespoke_title}</div>
            <div style="color:${MUTED};font-size:13px;line-height:1.55;margin-top:8px;">${c.bespoke_desc}</div>
          </td>
          <td style="vertical-align:middle;text-align:right;width:28px;padding-left:12px;">
            <span style="color:${BLUE_LIGHT};font-size:20px;font-weight:600;">→</span>
          </td>
        </tr></table>
      </a>
    </td></tr>`;

  const products = [
    { href: `${base}/voice`, name: "OLTO Voice", tag: c.voice_tag, desc: c.voice_desc, accent: VOICE_RED },
    { href: `${base}/reach`, name: "OLTO Reach", tag: c.reach_tag, desc: c.reach_desc, accent: REACH_GREEN },
    { href: `${base}/ops`,   name: "OLTO Ops",   tag: c.ops_tag,   desc: c.ops_desc,   accent: OPS_PURPLE },
  ];

  const cards = products.map((p) => `
    <tr><td style="padding:8px 0;">
      <a href="${p.href}" style="display:block;text-decoration:none;padding:16px 18px;background:${ELEVATED};border:1px solid ${BORDER};border-left:3px solid ${p.accent};border-radius:10px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
          <td style="vertical-align:middle;">
            <div style="color:${p.accent};font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:5px;">${p.tag}</div>
            <div style="color:${INK};font-weight:600;font-size:15px;line-height:1.3;">${p.name}</div>
            <div style="color:${MUTED};font-size:13px;line-height:1.5;margin-top:3px;">${p.desc}</div>
          </td>
          <td style="vertical-align:middle;text-align:right;width:24px;padding-left:8px;">
            <span style="color:${p.accent};font-size:18px;font-weight:600;">→</span>
          </td>
        </tr></table>
      </a>
    </td></tr>`).join("");

  return `<div style="margin:32px 0 8px 0;padding-top:28px;border-top:1px solid ${BORDER};">
    <div style="color:${BLUE_LIGHT};font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:6px;">${c.while_label}</div>
    <div style="color:${MUTED};font-size:14px;line-height:1.6;margin-bottom:14px;">${c.while_intro}</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">${bespoke}${cards}</table>
    <div style="margin-top:18px;">
      <a href="${base}" style="display:inline-block;padding:12px 22px;background:${BLUE};color:#ffffff;text-decoration:none;border-radius:10px;font-weight:600;font-size:14px;">${c.talk_to_otto}</a>
    </div>
  </div>`;
}

function signOff(lang: Lang): string {
  const c = COPY[lang];
  return `<div style="margin:32px 0 4px 0;padding-top:28px;border-top:1px solid ${BORDER};color:${MUTED};font-size:14px;line-height:1.7;">
    ${c.sign_signoff}<br/>
    <span style="color:${INK};font-weight:600;">Oli &amp; Tom</span><br/>
    <span style="font-size:12px;color:${DIM};">${c.sign_cofounders}</span>
  </div>`;
}

// ── Internal-email helpers (light-mode) ─────────────────────────────

function row(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 12px 6px 0;color:${L_MUTED};font-size:12px;vertical-align:top;white-space:nowrap;width:1%;">${escapeHtml(label)}</td>
    <td style="padding:6px 0;color:${L_INK};font-size:14px;">${escapeHtml(value)}</td>
  </tr>`;
}

function block(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `<div style="margin-top:14px;padding:14px 16px;background:${L_BG};border-radius:8px;">
    <p style="margin:0 0 6px 0;color:${L_MUTED};font-size:11px;text-transform:uppercase;letter-spacing:1px;">${escapeHtml(label)}</p>
    <p style="margin:0;color:${L_INK};font-size:14px;line-height:1.55;white-space:pre-wrap;">${escapeHtml(value)}</p>
  </div>`;
}

// ── Public types ────────────────────────────────────────────────────

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  interest?: string;
  message?: string;
  lang: Lang;
  site: "oltomatic.co";
};

export type SupportPayload = {
  name: string;
  email: string;
  product?: string;
  issue: string;
  description?: string;
  lang: Lang;
  site: "oltomatic.co";
};

// ── Internal emails (tech@ — always English) ────────────────────────

export function contactInternalHtml(p: ContactPayload): string {
  const langNote = p.lang === "es" ? "Spanish" : "English";
  const body = `
    <p style="margin:0 0 4px 0;font-size:11px;color:${L_MUTED};text-transform:uppercase;letter-spacing:1.2px;">New enquiry · ${p.site} · ${langNote}</p>
    <h1 style="margin:0 0 18px 0;font-size:20px;font-weight:600;color:${L_INK};">${escapeHtml(p.name)}${p.company ? ` · <span style="color:${L_MUTED};font-weight:500;">${escapeHtml(p.company)}</span>` : ""}</h1>
    <table style="width:100%;border-collapse:collapse;">
      ${row("Email", p.email)}
      ${row("Interest", p.interest)}
    </table>
    ${block("Message", p.message)}
    <p style="margin:22px 0 0 0;font-size:12px;color:${L_MUTED};line-height:1.6;">
      <strong style="color:${L_INK};">For the log.</strong> Prospect has been auto-replied in ${langNote} from <a href="mailto:hello@oltomatic.co" style="color:${LINK};text-decoration:none;">hello@oltomatic.co</a>. Reply in the same language when you follow up.
    </p>`;
  return lightShell(body, "en");
}

export function supportInternalHtml(p: SupportPayload): string {
  const langNote = p.lang === "es" ? "Spanish" : "English";
  const body = `
    <p style="margin:0 0 4px 0;font-size:11px;color:${L_MUTED};text-transform:uppercase;letter-spacing:1.2px;">Support ticket · ${p.site} · ${langNote}</p>
    <h1 style="margin:0 0 18px 0;font-size:20px;font-weight:600;color:${L_INK};">${escapeHtml(p.issue)}</h1>
    <table style="width:100%;border-collapse:collapse;">
      ${row("From", `${p.name} · ${p.email}`)}
      ${row("Product", p.product)}
    </table>
    ${block("Details", p.description)}
    <p style="margin:22px 0 0 0;font-size:12px;color:${L_MUTED};line-height:1.6;">
      <strong style="color:${L_INK};">For the log.</strong> Customer expects a reply in ${langNote}. Conversations should continue on <a href="mailto:hello@oltomatic.co" style="color:${LINK};text-decoration:none;">hello@oltomatic.co</a>.
    </p>`;
  return lightShell(body, "en");
}

// ── Prospect-facing emails (bilingual, dark-mode) ───────────────────

export function contactProspectHtml(p: ContactPayload): string {
  const c = COPY[p.lang];
  const firstName = p.name.split(" ")[0] || p.name;
  const body = `
    <p style="margin:0 0 6px 0;color:${BLUE_LIGHT};font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;">${c.hero_tag}</p>
    <h1 style="margin:0 0 16px 0;font-size:26px;font-weight:700;line-height:1.25;color:${INK};letter-spacing:-0.02em;">${c.hero_greeting(escapeHtml(firstName))}</h1>
    <p style="margin:0 0 14px 0;font-size:15px;line-height:1.7;color:${MUTED};">${c.hero_body}</p>
    ${nextSteps(p.lang)}
    ${whileYouWait(p.lang)}
    ${signOff(p.lang)}
    <p style="margin:20px 0 0 0;font-size:12px;line-height:1.6;color:${DIM};">${c.ps}</p>`;
  return darkShell(body, p.lang);
}

export function supportProspectHtml(p: SupportPayload): string {
  const c = COPY[p.lang];
  const firstName = p.name.split(" ")[0] || p.name;
  const body = `
    <p style="margin:0 0 6px 0;color:${BLUE_LIGHT};font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;">${c.support_tag}</p>
    <h1 style="margin:0 0 16px 0;font-size:26px;font-weight:700;line-height:1.25;color:${INK};letter-spacing:-0.02em;">${c.support_greeting(escapeHtml(firstName))}</h1>
    <p style="margin:0 0 14px 0;font-size:15px;line-height:1.7;color:${MUTED};">${c.support_body}</p>
    <div style="margin:24px 0;padding:16px 18px;background:${ELEVATED};border:1px solid ${BORDER};border-radius:10px;">
      <div style="color:${BLUE_LIGHT};font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:6px;">${c.support_issue_label}</div>
      <div style="color:${INK};font-size:15px;line-height:1.55;">${escapeHtml(p.issue)}</div>
    </div>
    <p style="margin:0 0 14px 0;font-size:14px;line-height:1.7;color:${MUTED};">${c.support_followup}</p>
    ${signOff(p.lang)}`;
  return darkShell(body, p.lang);
}
