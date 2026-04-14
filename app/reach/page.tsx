"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";

export default function ReachPage() {
  const { t, lang } = useLang();
  const es = lang === "es";

  const tiers = [
    {
      name: es ? "Lanzamiento" : "Launch", price: es ? "$1.200.000" : "COP 1,200,000", setup: es ? "$300.000" : "COP 300,000",
      desc: es ? "Para empresas listas para probar el alcance automatizado en un mercado objetivo." : "For businesses ready to test AI-powered outreach on a focused target market.",
      features: es
        ? ["1 sector objetivo", "200 prospectos/mes investigados", "100 mensajes personalizados enviados", "Puntuación de leads con IA", "Alertas de leads calientes", "Acceso al panel"]
        : ["1 target sector", "200 prospects/month researched", "100 personalised messages sent", "AI lead scoring", "Hot lead alerts", "Dashboard access"],
    },
    {
      name: "Growth", price: es ? "$2.100.000" : "COP 2,100,000", setup: es ? "$900.000" : "COP 900,000",
      desc: es ? "Para empresas que escalan el alcance en múltiples sectores." : "For businesses scaling outreach across multiple sectors.",
      features: es
        ? ["2 sectores objetivo", "500 prospectos/mes investigados", "250 mensajes personalizados enviados", "Todo en Lanzamiento", "Llamada mensual de estrategia", "Gestión de respuestas"]
        : ["2 target sectors", "500 prospects/month researched", "250 personalised messages sent", "Everything in Launch", "Monthly strategy call", "Reply management"],
      highlight: true,
    },
    {
      name: es ? "Pipeline" : "Pipeline", price: es ? "$3.000.000" : "COP 3,000,000", setup: "scoped",
      desc: es ? "Para empresas que quieren un pipeline de salida completo funcionando continuamente." : "For businesses that want a full outbound pipeline running continuously.",
      features: es
        ? ["Sectores ilimitados", "1.000 prospectos/mes investigados", "500 mensajes personalizados enviados", "Todo en Growth", "Gestor de cuenta dedicado", "Reportes completos de pipeline"]
        : ["Unlimited sectors", "1,000 prospects/month researched", "500 personalised messages sent", "Everything in Growth", "Dedicated account manager", "Full pipeline reporting"],
    },
  ];

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.3 }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <span className="tag mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#16A34A" }} />
            OLTO Reach · {t("reach_tag")}
          </span>
          <h1 className="font-bold mb-6 leading-[1.05]" style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "#EEEEF5" }}>
            {es ? <>Leads que vienen a ti.<br /><span style={{ background: "linear-gradient(135deg, #16A34A, #4ADE80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>No al revés.</span></> : <>Leads that come to you.<br /><span style={{ background: "linear-gradient(135deg, #16A34A, #4ADE80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Not the other way around.</span></>}
          </h1>
          <p className="mb-10 max-w-xl" style={{ fontSize: "18px", color: "#9999B0", lineHeight: "1.7" }}>
            {es ? "OLTO Reach se encarga del trabajo de encontrar y contactar a tus clientes ideales — para que tu tiempo se dedique a cerrar, no a buscar." : "OLTO Reach handles the work of finding and engaging your ideal clients — so your time goes on closing, not chasing."}
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: "#16A34A" }}>{es ? "Solicitar acceso anticipado" : "Get Early Access"}</Link>
        </div>
      </section>

      <section className="py-24 border-t" style={{ borderColor: "#1E1E32", background: "#0D0D1A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4 text-center" style={{ color: "#16A34A" }}>{es ? "Precios" : "Pricing"}</p>
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#EEEEF5" }}>{es ? "Simple. Transparente." : "Simple. Transparent."}</h2>
          <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: "#9999B0" }}>
            {es ? "OLTO Reach está en lanzamiento controlado. Contáctanos para hablar sobre el acceso y el plan adecuado para tu negocio." : "OLTO Reach is currently in controlled rollout. Get in touch to discuss access and the right tier."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tiers.map((tier) => (
              <div key={tier.name} className="relative flex flex-col rounded-2xl p-8"
                style={{ background: tier.highlight ? "#0D1628" : "#0D0D1A", border: `1px solid ${tier.highlight ? "#16A34A" : "#1E1E32"}`, boxShadow: tier.highlight ? "0 0 40px rgba(22,163,74,0.1)" : "none" }}>
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "#16A34A" }}>{es ? "Más Popular" : "Most Popular"}</span>
                  </div>
                )}
                <p className="font-semibold mb-1 text-lg" style={{ color: "#EEEEF5" }}>{tier.name}</p>
                <p className="text-sm mb-4" style={{ color: "#55556A" }}>{tier.desc}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-bold" style={{ fontSize: "30px", color: "#EEEEF5", lineHeight: 1 }}>{tier.price}</span>
                </div>
                <p className="text-xs mb-6" style={{ color: "#55556A" }}>
                  {tier.setup === "scoped" ? (es ? "Configuración cotizada individualmente · Cancela cuando quieras" : "Setup scoped individually · Cancel anytime") : `+ ${tier.setup} ${es ? "configuración única · Cancela cuando quieras" : "one-off setup · Cancel anytime"}`}
                </p>
                <div className="divider mb-5" />
                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#9999B0" }}>
                      <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-xs mt-0.5" style={{ background: "rgba(22,163,74,0.12)", color: "#16A34A" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="block text-center py-3 rounded-xl text-sm font-semibold"
                  style={{ background: tier.highlight ? "#16A34A" : "transparent", color: tier.highlight ? "white" : "#9999B0", border: tier.highlight ? "none" : "1px solid #1E1E32", textDecoration: "none" }}>
                  {es ? "Solicitar acceso" : "Get Early Access"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t" style={{ borderColor: "#1E1E32" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#EEEEF5" }}>{es ? "Actualmente en lanzamiento controlado" : "Currently in controlled rollout"}</h2>
          <p className="mb-8" style={{ color: "#9999B0" }}>{es ? "Contáctanos para hablar sobre acceso y encontrar la configuración adecuada para tu negocio." : "Get in touch to discuss access and find the right setup for your business."}</p>
          <Link href="/contact" className="btn-primary" style={{ background: "#16A34A" }}>{es ? "Agendar una llamada" : "Book a call"}</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
