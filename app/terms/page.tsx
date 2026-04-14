"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

export default function TermsPage() {
  const { lang } = useLang();
  const es = lang === "es";
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#EEEEF5" }}>{es ? "Términos de Servicio" : "Terms of Service"}</h1>
        <p className="text-sm mb-12" style={{ color: "#55556A" }}>{es ? "Términos completos próximamente." : "Full terms coming soon."}</p>
        <div style={{ color: "#AAAABC", lineHeight: "1.8" }}>
          <p className="mb-4">{es ? "Nuestros Términos de Servicio completos están siendo finalizados. El uso de este sitio está sujeto a nuestra " : "Our full Terms of Service are being finalised. Use of this website is subject to our "}<a href="/privacy" style={{ color: "#1560A8" }}>{es ? "Política de Privacidad" : "Privacy Policy"}</a>{", "}<a href="/cookies" style={{ color: "#1560A8" }}>{es ? "Política de Cookies" : "Cookie Policy"}</a>{es ? " y " : " and "}<a href="/ai-disclosure" style={{ color: "#1560A8" }}>{es ? "Aviso de IA" : "AI Disclosure Notice"}</a>.</p>
          <p>{es ? "Preguntas: " : "Questions: "}<a href="mailto:hello@oltomatic.co" style={{ color: "#1560A8" }}>hello@oltomatic.co</a></p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
