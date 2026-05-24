"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

const EFFECTIVE = "1 March 2026";
const EFFECTIVE_ES = "1 de marzo de 2026";

export default function AIDisclosurePage() {
  const { lang } = useLang();
  const es = lang === "es";

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "#EEEEF5" }}>
          {es ? "Aviso de Divulgación de IA" : "AI Disclosure Notice"}
        </h1>
        <p className="mb-10 text-sm" style={{ color: "#55556A" }}>
          {es ? `Oltomatic Ltd · Vigente desde: ${EFFECTIVE_ES}` : `Oltomatic Ltd · Effective: ${EFFECTIVE}`}
        </p>

        <div className="prose" style={{ color: "#AAAABC", lineHeight: "1.75" }}>
          <p className="mb-6">
            {es
              ? "Construimos y operamos sistemas basados en inteligencia artificial. Este aviso le indica, de forma clara, dónde participa la IA cuando interactúa con nosotros, y qué hacemos con los datos que pasan por ella."
              : "We build and run AI-powered systems. This notice tells you, plainly, where AI is involved when you interact with us — and what we do with the data that flows through."}
          </p>

          <Section title={es ? "Cuando habla con una IA" : "When you're talking to an AI"}>
            <p className="mb-3">
              {es
                ? "OLTO Voice (agentes telefónicos). Cuando llama a un número operado por OLTO Voice, el agente abre la llamada informándole que está hablando con un asistente de IA. La llamada se graba con fines de calidad y mejora. Puede solicitar transferencia a un humano en cualquier momento."
                : "OLTO Voice (phone agents). When you call a number running OLTO Voice, the agent opens the call by telling you that you are speaking with an AI assistant. The call is recorded for quality and improvement. You can ask to be transferred to a human at any point."}
            </p>
            <p className="mb-3">
              {es
                ? "OLTO Voice (widget web). El widget 'Habla con Otto' en oltomatic.co es un agente de voz IA. Se identifica al inicio de cada llamada."
                : "OLTO Voice (web widget). The 'Talk to Otto' widget on oltomatic.co is an AI voice agent. It identifies itself at the start of every call."}
            </p>
            <p>
              {es
                ? "OLTO Reach (correo saliente). Los correos enviados por OLTO Reach son redactados por IA y revisados antes del envío. Identifican a la empresa remitente (Oltomatic) e incluyen una opción clara de baja."
                : "OLTO Reach (outbound email). Emails sent by OLTO Reach are drafted by AI and reviewed before sending. They identify the sending company (Oltomatic) and include a clear opt-out."}
            </p>
          </Section>

          <Section title={es ? "Qué procesa la IA" : "What the AI sees"}>
            <p>
              {es
                ? "Lo que usted dice o escribe; metadatos básicos (fecha y hora, número de teléfono, IP, navegador, idioma); y cualquier información que decida compartir. El audio se transcribe automáticamente. Las transcripciones y grabaciones se almacenan de forma segura."
                : "What you say or write; basic metadata (timestamp, phone number, IP, browser, locale); and anything you choose to share. Audio is transcribed automatically. Transcripts and recordings are stored securely."}
            </p>
          </Section>

          <Section title={es ? "Qué hacemos con ello" : "What we do with it"}>
            <p>
              {es
                ? "Usamos el contenido para responder a su solicitud, mejorar el desempeño del agente (revisiones de muestra, ajuste de instrucciones) y cumplir obligaciones legales. No vendemos sus datos. No los usamos para entrenar modelos de terceros."
                : "We use the content to answer your request, improve the agent's performance (sample reviews, prompt tuning) and comply with legal obligations. We do not sell your data. We do not use it to train third-party models."}
            </p>
          </Section>

          <Section title={es ? "Cuánto tiempo lo conservamos" : "How long we keep it"}>
            <p>
              {es
                ? "Audio de llamadas: 60 días desde la fecha de la llamada, salvo que su contrato especifique un período mayor. Transcripciones: 12 meses. Registros de contacto: mientras mantenga conversación activa con nosotros, más 24 meses desde la última interacción. Detalle completo en oltomatic.co/data-retention."
                : "Call audio: 60 days from the date of the call, unless your contract specifies longer. Transcripts: 12 months. Contact records: as long as you remain in active conversation with us, plus 24 months after the last interaction. Full detail at oltomatic.co/data-retention."}
            </p>
          </Section>

          <Section title={es ? "Sus derechos bajo la Ley 1581 de 2012" : "Your rights under Ley 1581 de 2012"}>
            <p>
              {es
                ? "Como titular usted tiene derecho a conocer, actualizar y rectificar sus datos personales; solicitar prueba de la autorización; ser informado sobre el uso dado a sus datos; revocar la autorización; solicitar ser transferido a un humano en cualquier punto de una conversación; y acceder gratuitamente a sus datos. Para ejercerlos: "
                : "As a data subject you have the right to know, update and correct your personal data; request proof of authorisation; be informed about the use of your data; withdraw authorisation; ask to be transferred to a human at any point in a conversation; and access your data free of charge. To exercise these: "}
              <a href="mailto:datos@oltomatic.co" style={{ color: "#1560A8" }}>datos@oltomatic.co</a>.
            </p>
          </Section>

          <Section title={es ? "Responsable" : "Controller"}>
            <p>
              {es
                ? "Oltomatic Ltd, sociedad registrada en Inglaterra y Gales, número 16774271, domicilio social: 128 City Road, Londres EC1V 2NX, Reino Unido."
                : "Oltomatic Ltd, registered in England & Wales, company number 16774271, registered office: 128 City Road, London EC1V 2NX, United Kingdom."}
            </p>
          </Section>
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
