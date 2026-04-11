"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";

export default function VoicePage() {
  const { t, lang } = useLang();

  const tiers = [
    {
      name: "Starter", price: lang === "es" ? "$600.000" : "COP 600,000",
      setup: lang === "es" ? "$600.000" : "COP 600,000",
      desc: lang === "es" ? "Para empresas que quieren dejar de perder llamadas y capturar cada lead." : "For businesses that want to stop missing calls and start capturing every lead.",
      features: lang === "es"
        ? ["1 agente de voz IA", "Hasta 300 min/mes", "Captura y calificación de leads", "Notificaciones por correo", "Cumplimiento GDPR", "Voz y personalidad estándar"]
        : ["1 AI voice agent", "Up to 300 mins/month", "Lead capture & qualification", "Email notifications", "GDPR compliant", "Standard voice & personality"],
    },
    {
      name: "Growth", price: lang === "es" ? "$1.050.000" : "COP 1,050,000",
      setup: lang === "es" ? "$1.200.000" : "COP 1,200,000",
      desc: lang === "es" ? "Para empresas listas para automatizar reservas e integrarse con sus sistemas." : "For businesses ready to automate bookings and integrate with their existing systems.",
      features: lang === "es"
        ? ["1 agente de voz IA", "Hasta 750 min/mes", "Todo en Starter", "Integración de calendario", "Integración CRM", "Informe mensual de rendimiento", "Base de conocimiento personalizada"]
        : ["1 AI voice agent", "Up to 750 mins/month", "Everything in Starter", "Calendar booking integration", "CRM integration", "Monthly performance report", "Custom knowledge base"],
      highlight: true,
    },
    {
      name: "Enterprise", price: lang === "es" ? "Conversemos" : "Let's talk",
      setup: null,
      desc: lang === "es" ? "Para empresas con alto volumen de llamadas, requisitos complejos o múltiples sedes." : "For businesses with high call volume, complex requirements, or multiple locations.",
      features: lang === "es"
        ? ["Múltiples agentes de voz", "Minutos ilimitados", "Todo en Growth", "Alertas por WhatsApp", "Soporte prioritario", "Gestor de cuenta dedicado", "Sesiones de optimización trimestrales"]
        : ["Multiple AI voice agents", "Unlimited minutes", "Everything in Growth", "WhatsApp notifications", "Priority support", "Dedicated account manager", "Quarterly optimisation sessions"],
    },
  ];

  const faqs = lang === "es" ? [
    { q: "¿Sonará robótico?", a: "No. OLTO Voice usa voces de IA premium que suenan naturales y humanas. Puedes escucharlo ahora mismo hablando con OTTO en esta página." },
    { q: "¿Qué pasa si no entiende algo?", a: "Transfiere la llamada a tu equipo. Tú defines el número de transferencia. Nada se pierde." },
    { q: "¿Hay contrato?", a: "Sin contratos a largo plazo en Starter o Growth. Mensual, cancela cuando quieras. Enterprise se cotiza por proyecto." },
    { q: "¿Qué cubre la tarifa de configuración?", a: "Construcción completa, configuración de voz, base de conocimiento, integración de calendario y CRM, pruebas y onboarding. Activo en 48 horas." },
    { q: "¿Puede hablar otros idiomas?", a: "Sí. Soporte multilingüe disponible — requiere configuración adicional." },
    { q: "¿Qué pasa con las grabaciones de llamadas?", a: "Almacenadas de forma segura, cumplimiento GDPR, retención predeterminada de 90 días. Tú eres dueño de los datos." },
  ] : [
    { q: "Will it sound robotic?", a: "No. OLTO Voice uses premium AI voices that sound natural and human. Hear it now by talking to OTTO on this page." },
    { q: "What if it doesn't understand something?", a: "It transfers the call to your team. You set the transfer number. Nothing falls through the cracks." },
    { q: "Is there a contract?", a: "No long-term contracts on Starter or Growth. Monthly rolling, cancel anytime. Enterprise is scoped per project." },
    { q: "What does the setup fee cover?", a: "Full build, voice configuration, knowledge base, calendar and CRM integration, testing and onboarding. Live within 48 hours." },
    { q: "Can it speak other languages?", a: "Yes. Multilingual support available — additional setup required." },
    { q: "What happens to call recordings?", a: "Stored securely, GDPR compliant, 90-day default retention. You own the data." },
  ];

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.3 }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <span className="tag mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#BE3A55" }} />
            OLTO Voice · {t("voice_tag")}
          </span>
          <h1 className="font-bold mb-6 leading-[1.05]" style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "#EEEEF5" }}>
            {lang === "es" ? <>Tu teléfono suena a las 2am.<br /><span style={{ background: "linear-gradient(135deg, #BE3A55, #E05C7A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>OLTO responde.</span></> : <>Your phone rings at 2am.<br /><span style={{ background: "linear-gradient(135deg, #BE3A55, #E05C7A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>OLTO answers it.</span></>}
          </h1>
          <p className="mb-10 max-w-xl" style={{ fontSize: "18px", color: "#9999B0", lineHeight: "1.7" }}>
            {lang === "es" ? "OLTO Voice atiende llamadas entrantes 24/7 — califica leads, agenda citas, responde preguntas y transfiere a tu equipo cuando importa." : "OLTO Voice handles inbound calls 24/7 — qualifying leads, booking appointments, answering questions, and handing off to your team when it matters."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary" style={{ background: "#BE3A55" }}>{lang === "es" ? "Obtener OLTO Voice" : "Get OLTO Voice"}</Link>
            <div className="btn-secondary" style={{ cursor: "default" }}>{lang === "es" ? "Desde $600.000/mes" : "From COP 600,000/month"}</div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t" style={{ borderColor: "#1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4 text-center" style={{ color: "#BE3A55" }}>{lang === "es" ? "Precios" : "Pricing"}</p>
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#EEEEF5" }}>{lang === "es" ? "Simple. Transparente." : "Simple. Transparent."}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tiers.map((tier) => (
              <div key={tier.name} className="relative flex flex-col rounded-2xl p-8"
                style={{ background: tier.highlight ? "#0D1628" : "#0D0D1A", border: `1px solid ${tier.highlight ? "#BE3A55" : "#1E1E32"}`, boxShadow: tier.highlight ? "0 0 40px rgba(190,58,85,0.12)" : "none" }}>
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "#BE3A55" }}>{lang === "es" ? "Más Popular" : "Most Popular"}</span>
                  </div>
                )}
                <p className="font-semibold mb-1 text-lg" style={{ color: "#EEEEF5" }}>{tier.name}</p>
                <p className="text-sm mb-4" style={{ color: "#55556A" }}>{tier.desc}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-bold" style={{ fontSize: tier.price.includes("talk") || tier.price.includes("Converse") ? "26px" : "34px", color: "#EEEEF5", lineHeight: 1 }}>{tier.price}</span>
                  {tier.setup && <span className="mb-1.5" style={{ color: "#55556A", fontSize: "13px" }}>{lang === "es" ? "/mes" : "/month"}</span>}
                </div>
                <p className="text-xs mb-6" style={{ color: "#55556A" }}>
                  {tier.setup ? `+ ${tier.setup} ${lang === "es" ? "configuración única · Cancela cuando quieras" : "one-off setup · Cancel anytime"}` : (lang === "es" ? "Cotizado individualmente · Sin ataduras" : "Scoped individually · No long-term lock-in")}
                </p>
                <div className="divider mb-5" />
                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#9999B0" }}>
                      <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-xs mt-0.5" style={{ background: "rgba(190,58,85,0.15)", color: "#BE3A55" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{ background: tier.highlight ? "#BE3A55" : "transparent", color: tier.highlight ? "white" : "#9999B0", border: tier.highlight ? "none" : "1px solid #1E1E32", textDecoration: "none" }}>
                  {tier.price.includes("talk") || tier.price.includes("Converse") ? (lang === "es" ? "Hablemos" : "Talk to us") : (lang === "es" ? "Empezar" : "Get Started")}
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="font-bold mb-8 text-center" style={{ fontSize: "22px", color: "#EEEEF5" }}>{lang === "es" ? "Preguntas frecuentes" : "Common questions"}</h3>
            <div className="flex flex-col gap-4">
              {faqs.map((item) => (
                <div key={item.q} className="p-6 rounded-xl" style={{ background: "#161625", border: "1px solid #1E1E32" }}>
                  <p className="font-semibold mb-2" style={{ color: "#EEEEF5", fontSize: "14px" }}>{item.q}</p>
                  <p style={{ color: "#9999B0", fontSize: "14px", lineHeight: "1.6" }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t" style={{ borderColor: "#1E1E32", background: "#0D0D1A" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#EEEEF5" }}>{lang === "es" ? "¿Listo para no perder más llamadas?" : "Ready to stop missing calls?"}</h2>
          <p className="mb-8" style={{ color: "#9999B0" }}>{lang === "es" ? "Activo en 48 horas. Sin contrato a largo plazo." : "Live within 48 hours. No long-term contract."}</p>
          <Link href="/contact" className="btn-primary" style={{ background: "#BE3A55" }}>{lang === "es" ? "Empezar" : "Get Started"}</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
