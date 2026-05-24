"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

const EFFECTIVE = "1 March 2026";
const EFFECTIVE_ES = "1 de marzo de 2026";

export default function CookiesPage() {
  const { lang } = useLang();
  const es = lang === "es";

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "#EEEEF5" }}>
          {es ? "Política de Cookies" : "Cookie Policy"}
        </h1>
        <p className="mb-10 text-sm" style={{ color: "#55556A" }}>
          {es ? `Oltomatic Ltd · Vigente desde: ${EFFECTIVE_ES}` : `Oltomatic Ltd · Effective: ${EFFECTIVE}`}
        </p>

        <div className="prose" style={{ color: "#AAAABC", lineHeight: "1.75" }}>
          <p className="mb-6">
            {es
              ? "Nuestro sitio web usa cookies. Esta página explica cuáles, qué hacen y cómo desactivarlas."
              : "Our website uses cookies. This page explains which, what they do, and how to turn them off."}
          </p>

          <Section title={es ? "Qué son las cookies" : "What cookies are"}>
            <p>
              {es
                ? "Pequeños archivos de texto que los sitios web colocan en su dispositivo. Algunas son esenciales para que el sitio funcione. Otras nos ayudan a entender cómo se usa el sitio y a mejorarlo."
                : "Small text files placed on your device by the websites you visit. Some are essential for the site to work. Others help us understand how the site is used and improve it."}
            </p>
          </Section>

          <Section title={es ? "Estrictamente necesarias (siempre activas)" : "Strictly necessary (always on)"}>
            <p>
              {es
                ? "oltomatic_session (continuidad de sesión, primera parte) y __vapi_session (mantiene el estado del widget de voz OLTO durante una llamada, proveedor Vapi). No pueden desactivarse."
                : "oltomatic_session (session continuity, first-party) and __vapi_session (persists the OLTO voice widget state during a call, provider Vapi). These cannot be disabled."}
            </p>
          </Section>

          <Section title={es ? "Analíticas (opcionales — desactivadas por defecto)" : "Analytics (optional — off by default)"}>
            <p>
              {es
                ? "Cookies de análisis de visitas anónimas y de monitoreo de rendimiento de página. Solo se activan si usted las acepta."
                : "Anonymous visit analytics and page performance monitoring cookies. These fire only if you accept them."}
            </p>
          </Section>

          <Section title={es ? "Marketing (desactivadas por defecto)" : "Marketing (off by default)"}>
            <p>
              {es
                ? "Cookies de retargeting (por ejemplo, redes sociales). Solo se activan con su consentimiento."
                : "Retargeting cookies (e.g. social media). These fire only with your consent."}
            </p>
          </Section>

          <Section title={es ? "Sus opciones" : "Your choices"}>
            <p>
              {es
                ? "En su primera visita, un aviso le pregunta qué permite. Las estrictamente necesarias están siempre activas; el resto se activa solo si acepta. Puede cambiar de opinión en cualquier momento desde 'Preferencias de cookies' en el pie de página. Todos los navegadores principales permiten eliminar o bloquear cookies."
                : "On your first visit, a banner asks what you'll allow. Strictly necessary cookies are always on; everything else fires only if you accept. You can change your mind any time via 'Cookie preferences' in the footer. All major browsers let you delete or block cookies."}
            </p>
          </Section>

          <Section title={es ? "Preguntas" : "Questions"}>
            <p>
              {es ? "Escríbanos a " : "Email us at "}
              <a href="mailto:datos@oltomatic.co" style={{ color: "#1560A8" }}>datos@oltomatic.co</a>.
            </p>
          </Section>

          <p className="mt-10 text-sm" style={{ color: "#55556A" }}>
            {es
              ? "Esta política funciona junto con nuestra Política de Privacidad y Términos de Servicio."
              : "This policy works alongside our Privacy Policy and Terms of Service."}
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3" style={{ color: "#EEEEF5" }}>{title}</h2>
      {children}
    </div>
  );
}
