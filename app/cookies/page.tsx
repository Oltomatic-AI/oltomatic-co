"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

export default function CookiesPage() {
  const { lang } = useLang();
  const es = lang === "es";
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#EEEEF5" }}>{es ? "Política de Cookies" : "Cookie Policy"}</h1>
        <p className="text-sm mb-12" style={{ color: "#55556A" }}>14 de abril de 2026 · v1.0</p>
        <div style={{ color: "#AAAABC", lineHeight: "1.8" }}>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>{es ? "1. Qué son las cookies" : "1. What Cookies Are"}</h2>
          <p className="mb-4">{es ? "Las cookies son pequeños archivos de texto que se colocan en tu dispositivo cuando visitas un sitio web. Esta política debe leerse junto con nuestra " : "Cookies are small text files placed on your device when you visit a website. Read alongside our "}<a href="/privacy" style={{ color: "#1560A8" }}>{es ? "Política de Privacidad" : "Privacy Policy"}</a>.</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>{es ? "2. Tipos de cookies" : "2. Categories of Cookies"}</h2>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>{es ? "Estrictamente necesarias:" : "Strictly necessary:"}</strong> {es ? "Necesarias para el funcionamiento del sitio. No se pueden desactivar." : "Required for the website to function. Cannot be switched off."}</p>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>{es ? "Rendimiento y analítica:" : "Performance and analytics:"}</strong> {es ? "Solo con tu consentimiento." : "Set only with your consent."}</p>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>{es ? "Funcionales:" : "Functional:"}</strong> {es ? "Recuerdan tus preferencias. Solo con tu consentimiento." : "Remember your preferences. Set only with your consent."}</p>
          <p className="mb-4"><strong style={{ color: "#EEEEF5" }}>{es ? "Marketing:" : "Marketing:"}</strong> {es ? "Solo con tu consentimiento." : "Set only with your consent."}</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>{es ? "3. Gestionar preferencias" : "3. Managing Preferences"}</h2>
          <p className="mb-4">{es ? "Puedes gestionar tus preferencias de cookies en el banner de cookies o a través de la configuración de tu navegador." : "Manage your preferences using the cookie banner or your browser settings."}</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>{es ? "4. Contacto" : "4. Contact"}</h2>
          <p className="mb-4"><a href="mailto:privacy@oltomatic.ai" style={{ color: "#1560A8" }}>privacy@oltomatic.ai</a></p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
