"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

const EFFECTIVE = "1 March 2026";
const EFFECTIVE_ES = "1 de marzo de 2026";

export default function DataRetentionPage() {
  const { lang } = useLang();
  const es = lang === "es";

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "#EEEEF5" }}>
          {es ? "Política de Retención de Datos" : "Data Retention Policy"}
        </h1>
        <p className="mb-10 text-sm" style={{ color: "#55556A" }}>
          {es ? `Oltomatic Ltd · Vigente desde: ${EFFECTIVE_ES}` : `Oltomatic Ltd · Effective: ${EFFECTIVE}`}
        </p>

        <div className="prose" style={{ color: "#AAAABC", lineHeight: "1.75" }}>
          <p className="mb-6">
            {es
              ? "Conservamos los datos solo durante el tiempo que los necesitamos. Esta política indica qué conservamos, por qué, y cuándo se elimina. Aplica a todos los servicios que operamos."
              : "We keep data only as long as we need it. This policy tells you what we keep, why, and when it goes. It applies to all services we operate."}
          </p>

          <Section title={es ? "Períodos de retención por defecto" : "Default retention periods"}>
            <ul className="list-disc pl-5 space-y-2">
              <li>{es ? "Grabaciones de audio de llamadas de voz: 60 días desde la fecha de la llamada (calidad, capacitación, resolución de disputas; configurable a un período mayor para clientes con requisitos regulatorios)." : "Voice call audio recordings: 60 days from the date of the call (QA, training, dispute resolution; configurable longer for clients with regulatory needs)."}</li>
              <li>{es ? "Transcripciones de llamadas: 12 meses (mejora del servicio, ajuste de instrucciones, revisión de escalamientos)." : "Voice call transcripts: 12 months (service improvement, prompt tuning, escalation review)."}</li>
              <li>{es ? "Registros de conversaciones de chat: 12 meses." : "Chat conversation logs: 12 months."}</li>
              <li>{es ? "Registros de prospectos (base de datos propia de Oltomatic): 24 meses desde la última interacción; se eliminan antes a solicitud." : "Lead and prospect records (Oltomatic's own database): 24 months from last interaction; deleted earlier on request."}</li>
              <li>{es ? "Registros de prospectos en cuentas de cliente (OLTO Reach): según defina el cliente; por defecto 24 meses." : "Lead and prospect records in client tenants (OLTO Reach): as set by the client; default 24 months."}</li>
              <li>{es ? "Registros de cuenta y facturación: conforme a las obligaciones legales y tributarias aplicables." : "Account and billing records: in line with applicable legal and tax obligations."}</li>
              <li>{es ? "Correspondencia con clientes y prospectos: relación de trabajo + 24 meses." : "Email correspondence with clients and prospects: working relationship + 24 months."}</li>
              <li>{es ? "Registros de sistema y seguridad: 90 días." : "System and security logs: 90 days."}</li>
              <li>{es ? "Copias de seguridad: ciclo continuo de 35 días." : "Backups: 35-day rolling cycle."}</li>
            </ul>
          </Section>

          <Section title={es ? "Variaciones por cliente" : "Client variations"}>
            <p>
              {es
                ? "Para clientes con requisitos regulados de retención (servicios financieros, salud, etc.) podemos extender la retención de audio hasta 24 meses mediante una modificación del contrato. Para clientes colombianos que operan bajo la Ley 1581 de 2012, los valores por defecto se revisan frente a los requisitos sectoriales colombianos antes de la firma del contrato."
                : "For clients with regulated retention requirements (financial services, healthcare, etc.) we can extend audio retention to up to 24 months under a contract amendment. For Colombian clients operating under Ley 1581 de 2012, defaults are reviewed against sector-specific Colombian requirements before contract signature."}
            </p>
          </Section>

          <Section title={es ? "Eliminación anticipada" : "Triggers for early deletion"}>
            <p>
              {es
                ? "Eliminamos antes de los plazos por defecto cuando: un titular ejerce su derecho de supresión bajo la Ley 1581 (sin excepción legal aplicable); un cliente termina el contrato — todos los datos controlados por el cliente se eliminan en un plazo de 90 días, salvo retención legal; o descubrimos que los datos se recopilaron de forma ilícita o se conservan por error."
                : "We delete earlier than the defaults when: a data subject exercises their right of erasure under Ley 1581 (no lawful exemption applies); a client terminates — all client-controlled data deleted within 90 days, unless legal hold; or we discover the data was collected unlawfully or held in error."}
            </p>
          </Section>

          <Section title={es ? "Cómo funciona la eliminación" : "How deletion works"}>
            <p>
              {es
                ? "Eliminar significa hacer ilegibles los datos en nuestros sistemas de producción y en nuestros proveedores activos. Las copias de seguridad se sobrescriben en el ciclo de 35 días. Después de 35 días, las copias de respaldo de los datos eliminados desaparecen."
                : "Deletion means making the data unreadable in our production systems and active subprocessors. Backups are overwritten on the 35-day cycle. After 35 days, backup copies of deleted data are gone."}
            </p>
          </Section>

          <Section title={es ? "Solicitudes de acceso y supresión" : "Access and erasure requests"}>
            <p>
              {es ? "Escriba a " : "Email "}
              <a href="mailto:datos@oltomatic.co" style={{ color: "#1560A8" }}>datos@oltomatic.co</a>
              {es
                ? " con el asunto 'Solicitud de titular — [Acceso | Supresión | Rectificación]'. Bajo la Ley 1581: respondemos en 10 días hábiles."
                : " with the subject 'Data subject request — [Access | Erasure | Correction]'. Under Ley 1581: we respond within 10 business days."}
            </p>
          </Section>

          <p className="mt-10 text-sm" style={{ color: "#55556A" }}>
            {es
              ? "Los cambios sustanciales a esta política se publican con al menos 30 días de antelación."
              : "Material changes to this policy are published with at least 30 days' notice."}
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
