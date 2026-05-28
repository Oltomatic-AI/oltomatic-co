"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

const EFFECTIVE = "1 March 2026";
const EFFECTIVE_ES = "1 de marzo de 2026";

export default function AcceptableUsePage() {
  const { lang } = useLang();
  const es = lang === "es";

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "#EEEEF5" }}>
          {es ? "Política de Uso Aceptable" : "Acceptable Use Policy"}
        </h1>
        <p className="mb-10 text-sm" style={{ color: "#55556A" }}>
          {es ? `Oltomatic Ltd · Vigente desde: ${EFFECTIVE_ES}` : `Oltomatic Ltd · Effective: ${EFFECTIVE}`}
        </p>

        <div className="prose" style={{ color: "#AAAABC", lineHeight: "1.75" }}>
          <p className="mb-6">
            {es
              ? "Esta política aplica a cualquier persona que use los servicios de Oltomatic — incluyendo el OLTO Suite (Voice y Reach) y cualquier desarrollo a medida entregado bajo el nombre Oltomatic. Aplica a usuarios directos (usted, nuestro cliente) y a sus usuarios finales que interactúan con servicios que operamos en su nombre. La hemos mantenido breve. Use los servicios de buena fe; el resto es detalle."
              : "This policy applies to anyone using Oltomatic services — including the OLTO Suite (Voice and Reach) and any bespoke build delivered under the Oltomatic name. It applies to direct users (you, our client) and to your end-users who interact with services we run for you. We've kept it short. Use the services in good faith; the rest is detail."}
          </p>

          <Section title={es ? "No use nuestros servicios para:" : "Don't use our services to:"}>
            <p className="mb-3">
              {es
                ? "Infringir la ley. Incluye cualquier ley colombiana, del Reino Unido, de la UE, de EE. UU. o cualquier otra aplicable. Si es ilegal donde ocurre la actividad, no está permitido en nuestra infraestructura."
                : "Break the law. This includes any Colombian, UK, EU, US or other applicable law. If it's illegal where the activity happens, it's not allowed on our infrastructure."}
            </p>
            <p className="mb-3">
              {es
                ? "Dañar a personas o sistemas. Sin malware, sin acceso no autorizado, sin ataques de denegación de servicio, sin acoso ni abuso dirigido."
                : "Harm people or systems. No malware, no unauthorised access, no denial-of-service, no harassment or targeted abuse."}
            </p>
            <p className="mb-3">
              {es
                ? "Procesar contenido que no ejecutaremos: material de abuso sexual infantil (tolerancia cero, reportado de inmediato); facilitación directa de autolesión, creación de armas, terrorismo o ataque a infraestructura crítica; imágenes íntimas no consentidas; y contenido diseñado para engañar en contextos protegidos (elecciones, asesoría financiera o médica regulada sin la debida supervisión profesional)."
                : "Process content we will not run: child sexual abuse material (zero tolerance, reported immediately); direct facilitation of self-harm, weapons creation, terrorism, or critical infrastructure attack; non-consensual intimate imagery; and content designed to deceive in protected contexts (elections, regulated financial or medical advice without proper professional oversight)."}
            </p>
            <p className="mb-3">
              {es
                ? "Enviar spam o hacer scraping. Sin mensajería masiva no solicitada sin la autorización debida. Sin scraping que viole los términos del sitio de origen. Sin identidades falsas."
                : "Spam or scrape. No unsolicited bulk messaging without proper authorisation. No web scraping in violation of source-site terms. No fake identity outreach."}
            </p>
            <p>
              {es
                ? "Tergiversar la IA. OLTO Voz y OLTO Reach deben identificarse siempre como IA cuando corresponda (consulte nuestro Aviso de Divulgación de IA). Eliminar esa divulgación es una violación de esta política."
                : "Misrepresent the AI. OLTO Voice and OLTO Reach must always identify themselves as AI when required (see our AI Disclosure Notice). Stripping that disclosure is a breach of this policy."}
            </p>
          </Section>

          <Section title={es ? "Específico para agentes de voz" : "Specific to voice agents"}>
            <p>
              {es
                ? "La divulgación de apertura del agente ('está hablando con un asistente de IA') no es opcional. Las grabaciones requieren base legal — autorización del titular conforme a la Ley 1581 de 2012. Para despliegues en Colombia, el consentimiento de grabación debe cumplir la Ley 1581 de 2012."
                : "The agent's opening disclosure ('you are speaking with an AI assistant') is not optional. Recordings require a lawful basis — data subject authorisation under Ley 1581 de 2012. For Colombian deployments, recording consent must comply with Ley 1581 de 2012."}
            </p>
          </Section>

          <Section title={es ? "Específico para envíos salientes (OLTO Reach)" : "Specific to outbound (OLTO Reach)"}>
            <p>
              {es
                ? "Los contactos objetivo deben tener base legal conforme a la normativa de Habeas Data de Colombia. Cada correo incluye un enlace claro de baja. El volumen y la cadencia respetan la normativa anti-spam aplicable."
                : "Targeted contacts must have a lawful basis under Colombia's Habeas Data rules. Every email includes a clear unsubscribe link. Volume and cadence respect applicable anti-spam law."}
            </p>
          </Section>

          <Section title={es ? "Si incumple esta política" : "If you breach this policy"}>
            <p>
              {es
                ? "Podemos, según la gravedad: advertirle y pedirle que lo corrija; pausar su servicio; terminar el contrato sin reembolso de las tarifas ya incurridas; o reportar el asunto a las autoridades. Procuramos ser proporcionados y siempre se lo comunicamos primero, salvo que la seguridad o una obligación legal lo impida."
                : "We may, depending on severity: warn you and ask you to fix it; pause your service; terminate the contract with no refund of fees already incurred; or report the matter to the authorities. We try to be proportionate and always tell you first unless safety or legal compulsion prevents it."}
            </p>
          </Section>

          <Section title={es ? "Reportar abuso" : "Reporting abuse"}>
            <p>
              {es ? "Si cree que alguien usa indebidamente nuestros servicios, escriba a " : "If you believe someone is misusing our services, email "}
              <a href="mailto:datos@oltomatic.co" style={{ color: "#1560A8" }}>datos@oltomatic.co</a>
              {es ? " con 'Reporte de abuso' en el asunto. Acusamos recibo en 2 días hábiles." : " with 'Abuse report' in the subject. We acknowledge within 2 business days."}
            </p>
          </Section>

          <p className="mt-10 text-sm" style={{ color: "#55556A" }}>
            {es
              ? "Al usar los servicios de Oltomatic usted acepta esta política. Forma parte de nuestros Términos de Servicio."
              : "By using Oltomatic services you agree to this policy. It forms part of our Terms of Service."}
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
