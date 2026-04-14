"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";

export default function OpsPage() {
  const { lang } = useLang();
  const es = lang === "es";

  const tools = es ? [
    { title: "Sistemas de Recepción de Trabajos", desc: "Recepción estructurada que activa flujos de trabajo automáticamente. La información correcta, capturada siempre, sin tener que perseguir a nadie." },
    { title: "Flujos de Aprobación", desc: "Aprobaciones en múltiples etapas con notificaciones a las personas correctas. Sin más perseguir decisiones por hilos de WhatsApp." },
    { title: "Notificaciones al Equipo", desc: "Tu equipo recibe las actualizaciones correctas — por WhatsApp, correo o Slack — sin que nadie las envíe manualmente." },
    { title: "Programación y Despacho", desc: "Asignación automatizada de trabajos y gestión de calendario. La persona correcta, en el momento correcto, sin el ir y venir." },
    { title: "Comunicación con Clientes", desc: "Actualizaciones automáticas, confirmaciones y seguimientos mantienen a los clientes informados sin añadir carga a tu equipo." },
    { title: "Reportes Operativos", desc: "Datos capturados y presentados automáticamente. Sabe exactamente qué está pasando en tu negocio sin construir reportes manualmente." },
  ] : [
    { title: "Job Intake Systems", desc: "Structured intake that triggers workflows automatically. The right information, captured every time, without chasing." },
    { title: "Approval & Sign-off Flows", desc: "Multi-stage approvals with notifications to the right people. No more chasing decisions across WhatsApp threads." },
    { title: "Team Notifications", desc: "Your team gets the right updates — via WhatsApp, email, or Slack — without anyone manually sending them." },
    { title: "Scheduling & Dispatch", desc: "Automated job assignment and calendar management. The right person, at the right time, without the back-and-forth." },
    { title: "Client Communication", desc: "Automated updates, confirmations, and follow-ups keep clients informed without adding to your team's workload." },
    { title: "Operational Reporting", desc: "Data captured and surfaced automatically. Know exactly what's happening in your business without building reports manually." },
  ];

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.3 }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(21,96,168,0.08) 0%, transparent 70%)" }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <span className="tag mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#7C3AED" }} />
            {es ? "OLTO Ops · Herramientas Operativas" : "OLTO Ops · Operational Tooling"}
          </span>
          <h1 className="font-bold mb-6 leading-[1.05]" style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "#EEEEF5" }}>
            {es ? "Herramientas operativas." : "Operational tools."}<br />
            <span style={{ background: "linear-gradient(135deg, #7C3AED, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {es ? "Construidas para el mundo real." : "Built for the real world."}
            </span>
          </h1>
          <p className="mb-10 max-w-xl" style={{ fontSize: "18px", color: "#9999B0", lineHeight: "1.7" }}>
            {es
              ? "OLTO Ops es una suite de herramientas operativas — cada una construida para resolver un problema real en cómo los negocios realmente funcionan. Recepción de trabajos, aprobaciones, notificaciones, programación. Configurado alrededor de tu operación, no al revés."
              : "OLTO Ops is a suite of operational tools — each one built to solve a real problem in how businesses actually run. Job intake, approvals, notifications, scheduling. Configured around your operation, not the other way around."}
          </p>
          <Link href="/contact" className="btn-primary">
            {es ? "Habla con nosotros sobre Ops" : "Talk to us about Ops"}
          </Link>
        </div>
      </section>

      <section className="py-24" style={{ borderTop: "1px solid #1E1E32", background: "#0D0D1A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4 text-center">
            {es ? "Qué cubre OLTO Ops" : "What OLTO Ops covers"}
          </p>
          <h2 className="font-bold mb-12 text-center" style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "#EEEEF5" }}>
            {es ? "Cada herramienta es un problema resuelto" : "Every tool is a solved problem"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tools.map((item) => (
              <div key={item.title} className="card interactive p-6">
                <h3 className="font-semibold mb-2" style={{ fontSize: "15px", color: "#EEEEF5" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9999B0" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "#EEEEF5" }}>
            {es ? "No somos una plataforma genérica" : "Not a generic platform"}
          </h2>
          <p className="mb-8 max-w-xl mx-auto leading-relaxed" style={{ color: "#9999B0" }}>
            {es
              ? "Las herramientas de OLTO Ops se configuran alrededor de cómo tu negocio realmente funciona. No te entregamos software y un manual — construimos el sistema, lo integramos con tu stack, y te lo entregamos funcionando."
              : "OLTO Ops tools are configured around how your business actually runs. We don't hand you software and a manual — we build the system, integrate it with your stack, and hand it over working."}
          </p>
          <Link href="/contact" className="btn-primary">
            {es ? "Empezar la conversación" : "Start the conversation"}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
