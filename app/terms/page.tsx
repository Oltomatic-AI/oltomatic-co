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
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#EEEEF5" }}>
          {es ? "Términos de Servicio" : "Terms of Service"}
        </h1>
        <p style={{ color: "#AAAABC" }}>
          {es
            ? "Términos de servicio completos próximamente. Para cualquier pregunta, contacta "
            : "Full terms of service coming soon. For any questions, contact "}
          <a href="mailto:hello@oltomatic.co" style={{ color: "#1560A8" }}>hello@oltomatic.co</a>
        </p>
      </section>
      <Footer />
    </main>
  );
}
