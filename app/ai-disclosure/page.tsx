"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

export default function AIDisclosurePage() {
  const { lang } = useLang();
  const es = lang === "es";
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#EEEEF5" }}>{es ? "Aviso de IA y Grabación de Llamadas" : "AI Disclosure & Call Recording Notice"}</h1>
        <p className="text-sm mb-12" style={{ color: "#55556A" }}>14 de abril de 2026 · v1.0</p>
        <div style={{ color: "#AAAABC", lineHeight: "1.8" }}>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>{es ? "1. Propósito" : "1. Purpose"}</h2>
          <p className="mb-4">{es ? "Oltomatic construye y opera sistemas de IA. Este aviso informa a clientes, prospectos y usuarios finales cuándo y cómo se usa la IA." : "Oltomatic builds and operates AI systems. This notice tells customers, prospects and end users when and how AI is used."}</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>{es ? "2. Dónde usamos IA" : "2. Where We Use AI"}</h2>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>OLTO Reach:</strong> {es ? "IA generativa para redactar mensajes personalizados. Un humano aprueba cada mensaje antes de enviarlo." : "Generative AI to draft personalised messages. A human approves every message before sending."}</p>
          <p className="mb-2"><strong style={{ color: "#EEEEF5" }}>OLTO Voice:</strong> {es ? "IA para atender llamadas telefónicas 24/7. Las llamadas se graban y transcriben." : "AI to handle phone calls 24/7. Calls are recorded and transcribed."}</p>
          <p className="mb-4"><strong style={{ color: "#EEEEF5" }}>OLTO Ops:</strong> {es ? "IA para automatizar tareas operativas definidas por el cliente." : "AI to automate workflow tasks specified by the customer."}</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>{es ? "3. Aviso de grabación de llamadas" : "3. Call Recording Disclosure"}</h2>
          <p className="mb-4">{es ? "Cada llamada de OLTO Voice comienza con un aviso claro: el llamante está hablando con un asistente de IA y la llamada puede ser grabada." : "Every OLTO Voice call begins with a clear notice that the caller is speaking with an AI assistant and the call may be recorded."}</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>{es ? "4. Supervisión humana" : "4. Human Oversight"}</h2>
          <p className="mb-4">{es ? "Los resultados de IA que afectan una relación con el cliente son revisables por humanos. No tomamos decisiones exclusivamente automatizadas con efectos legales significativos sobre personas." : "AI outputs affecting customer relationships are reviewable by humans. We do not make solely automated decisions with significant legal effects on individuals."}</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>{es ? "5. Proveedores de modelos" : "5. Model Providers"}</h2>
          <p className="mb-4">{es ? "Usamos proveedores de IA de terceros como Anthropic (Claude) y OpenAI. No permitimos que estos proveedores entrenen sus modelos con el contenido de nuestros clientes." : "We use third-party AI providers including Anthropic (Claude) and OpenAI. We do not allow these providers to train their models on our customers content."}</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>{es ? "6. Limitaciones" : "6. Limitations"}</h2>
          <p className="mb-4">{es ? "Los sistemas de IA pueden producir resultados inexactos. Los clientes son responsables de revisar el contenido generado por IA. Oltomatic no garantiza la exactitud de ningún resultado de IA." : "AI systems can produce inaccurate outputs. Customers are responsible for reviewing AI-generated content. Oltomatic does not guarantee the accuracy of any AI output."}</p>
          <h2 className="text-xl font-semibold mt-10 mb-3" style={{ color: "#EEEEF5" }}>{es ? "7. Reportar problemas" : "7. Reporting Concerns"}</h2>
          <p className="mb-4">{es ? "Contacta " : "Contact "}<a href="mailto:privacy@oltomatic.ai" style={{ color: "#1560A8" }}>privacy@oltomatic.ai</a>. {es ? "Investigaremos y responderemos en 30 días." : "We will investigate and respond within 30 days."}</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
