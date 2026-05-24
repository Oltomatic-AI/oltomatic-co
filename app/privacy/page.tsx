"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

const EFFECTIVE = "1 March 2026";
const EFFECTIVE_ES = "1 de marzo de 2026";

export default function PrivacyPage() {
  const { lang } = useLang();
  const es = lang === "es";

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "#EEEEF5" }}>
          {es ? "Política de Privacidad" : "Privacy Policy"}
        </h1>
        <p className="mb-10 text-sm" style={{ color: "#55556A" }}>
          {es ? `Oltomatic Ltd · Vigente desde: ${EFFECTIVE_ES}` : `Oltomatic Ltd · Effective: ${EFFECTIVE}`}
        </p>

        <div className="prose" style={{ color: "#AAAABC", lineHeight: "1.75" }}>
          <p className="mb-6">
            {es
              ? "Esta política explica qué datos personales recopila Oltomatic Ltd, por qué, y cuáles son sus derechos como titular. La hemos mantenido breve. Si algo no está cubierto aquí, escríbanos a hello@oltomatic.co y le responderemos."
              : "This policy explains what personal data Oltomatic Ltd collects, why, and what your rights are. We've kept it short. If something isn't covered here, email hello@oltomatic.co and we'll answer."}
          </p>

          <Section title={es ? "1. Quiénes somos" : "1. Who we are"} es={es}>
            <p className="mb-3">
              {es
                ? "Oltomatic Ltd — sociedad registrada en Inglaterra y Gales, número 16774271. Domicilio social: 128 City Road, Londres EC1V 2NX, Reino Unido."
                : "Oltomatic Ltd — Company No. 16774271, registered in England & Wales. Registered office: 128 City Road, London EC1V 2NX, United Kingdom."}
            </p>
            <p className="mb-3">
              {es
                ? "Contacto de protección de datos para Colombia: datos@oltomatic.co."
                : "Data protection contact for Colombia: datos@oltomatic.co."}
            </p>
            <p>
              {es
                ? "Somos el Responsable del Tratamiento de sus datos personales cuando interactúa con nosotros directamente. Actuamos como Encargado del Tratamiento respecto de los datos que sus usuarios finales entregan a sistemas que operamos en su nombre."
                : "We are the data controller for your personal data when you interact with us directly. We are a data processor for personal data your end-users give to systems we operate on your behalf."}
            </p>
          </Section>

          <Section title={es ? "2. Qué recopilamos, y por qué" : "2. What we collect, and why"} es={es}>
            <p className="mb-3">
              {es
                ? "Recopilamos: datos de contacto (nombre, correo, teléfono, empresa) para responder consultas y prestar servicios; datos de cuenta para operar los servicios contratados; datos de comunicaciones (correos, chat, grabaciones y transcripciones de llamadas de voz) para atenderle y mejorar nuestros agentes; datos de uso (IP, navegador, páginas visitadas) para análisis y seguridad; datos de facturación; y datos de marketing cuando usted lo ha autorizado."
                : "We collect: contact data (name, email, phone, company) to respond to enquiries and deliver services; account data to run the services you signed up for; communications data (emails, chat, voice call recordings and transcripts) to respond to you and improve our agents; usage data (IP, browser, pages visited) for analytics and security; billing data; and marketing data where you have opted in."}
            </p>
            <p>
              {es
                ? "No recopilamos datos sensibles salvo que usted los proporcione dentro de un servicio que operamos para usted, en cuyo caso aplicamos las garantías reforzadas que exige la Ley 1581 de 2012."
                : "We do not collect sensitive data unless you provide it within a service we run for you, in which case we apply the additional safeguards required by Ley 1581 de 2012."}
            </p>
          </Section>

          <Section title={es ? "3. De dónde los obtenemos" : "3. Where we get it from"} es={es}>
            <p>
              {es
                ? "Principalmente de usted, de forma directa. En ocasiones de fuentes públicamente disponibles (su sitio web corporativo, LinkedIn) para prospección, sobre la base de nuestro interés legítimo y conforme a la normativa de Habeas Data."
                : "Mostly from you, directly. Sometimes from publicly available sources (your company website, LinkedIn) for prospecting, on the basis of legitimate interest and in line with Habeas Data rules."}
            </p>
          </Section>

          <Section title={es ? "4. Con quién los compartimos" : "4. Who we share it with"} es={es}>
            <p>
              {es
                ? "Compartimos datos personales únicamente con los proveedores (encargados) necesarios para prestar el servicio. No vendemos sus datos personales. No los compartimos con anunciantes sin su consentimiento. Podemos divulgarlos a autoridades cuando exista obligación legal."
                : "We share personal data only with the subprocessors needed to deliver the service. We do not sell your personal data. We do not share it with advertisers without your consent. We may disclose data to authorities where legally compelled."}
            </p>
          </Section>

          <Section title={es ? "5. Transferencias internacionales" : "5. International transfers"} es={es}>
            <p>
              {es
                ? "Algunos de nuestros proveedores están fuera de Colombia (Reino Unido, Estados Unidos, Unión Europea). Realizamos estas transferencias conforme a la Ley 1581 de 2012 y sus decretos reglamentarios, aplicando las garantías contractuales correspondientes. Hay copias de las garantías disponibles a solicitud."
                : "Some of our subprocessors are outside Colombia (UK, US, EU). We carry out these transfers in accordance with Ley 1581 de 2012 and its implementing decrees, applying the relevant contractual safeguards. Copies available on request."}
            </p>
          </Section>

          <Section title={es ? "6. Cuánto tiempo los conservamos" : "6. How long we keep it"} es={es}>
            <p>
              {es
                ? "Consulte nuestra Política de Retención de Datos en oltomatic.co/data-retention. En resumen: audio de llamadas 60 días, transcripciones 12 meses, registros de prospectos 24 meses desde la última interacción, facturación según obligaciones legales."
                : "See our Data Retention Policy at oltomatic.co/data-retention. Headline: voice call audio 60 days, transcripts 12 months, prospect records 24 months from last interaction, billing per legal obligations."}
            </p>
          </Section>

          <Section title={es ? "7. Sus derechos (Habeas Data)" : "7. Your rights (Habeas Data)"} es={es}>
            <p className="mb-3">
              {es
                ? "Bajo la Ley 1581 de 2012, usted como titular tiene derecho a conocer, actualizar y rectificar sus datos; solicitar prueba de la autorización otorgada; ser informado sobre el uso dado a sus datos; revocar la autorización y/o solicitar la supresión del dato cuando proceda; y acceder de forma gratuita a sus datos personales."
                : "Under Ley 1581 de 2012, as a data subject you have the right to know, update and correct your data; request proof of the authorisation granted; be informed about the use of your data; withdraw authorisation and/or request deletion where applicable; and access your personal data free of charge."}
            </p>
            <p>
              {es
                ? "Para ejercer estos derechos escriba a datos@oltomatic.co. Respondemos en un plazo de 10 días hábiles, conforme a la ley. Si no resolvemos su solicitud, puede presentar queja ante la Superintendencia de Industria y Comercio (SIC) en sic.gov.co."
                : "To exercise these rights, email datos@oltomatic.co. We respond within 10 business days, as required by law. If we do not resolve your request, you may complain to the Superintendencia de Industria y Comercio (SIC) at sic.gov.co."}
            </p>
          </Section>

          <Section title={es ? "8. Cookies" : "8. Cookies"} es={es}>
            <p>{es ? "Detalle en oltomatic.co/cookies." : "Detail at oltomatic.co/cookies."}</p>
          </Section>

          <Section title={es ? "9. Seguridad" : "9. Security"} es={es}>
            <p>
              {es
                ? "Aplicamos medidas estándar de la industria: cifrado en tránsito y en reposo, controles de acceso, registros de auditoría y escaneo de vulnerabilidades."
                : "Industry-standard measures: encryption in transit and at rest, access controls, audit logs and vulnerability scanning."}
            </p>
          </Section>

          <Section title={es ? "10. Menores" : "10. Children"} es={es}>
            <p>
              {es
                ? "Nuestros servicios son para empresas. No recopilamos a sabiendas datos personales de menores de 18 años."
                : "Our services are for businesses. We don't knowingly collect personal data from anyone under 18."}
            </p>
          </Section>

          <Section title={es ? "11. Cambios en esta política" : "11. Changes to this policy"} es={es}>
            <p>
              {es
                ? "Los cambios sustanciales se publican con al menos 30 días de antelación. La fecha de vigencia en la parte superior indica la versión vigente."
                : "Material changes are published with at least 30 days' notice. The effective date at the top tells you the current version."}
            </p>
          </Section>

          <Section title={es ? "12. Contacto y quejas" : "12. Contact and complaints"} es={es}>
            <p>
              {es ? "Responsable del tratamiento: " : "Data controller: "}
              Oltomatic Ltd, 128 City Road, Londres EC1V 2NX.
              {es ? " Correo: " : " Email: "}
              <a href="mailto:datos@oltomatic.co" style={{ color: "#1560A8" }}>datos@oltomatic.co</a>
              {es
                ? ". Si no resolvemos su queja, puede acudir a la Superintendencia de Industria y Comercio (SIC), sic.gov.co."
                : ". If we can't resolve your complaint, you may contact the Superintendencia de Industria y Comercio (SIC), sic.gov.co."}
            </p>
          </Section>

          <p className="mt-10 text-sm" style={{ color: "#55556A" }}>
            {es ? `Última actualización: ${EFFECTIVE_ES}.` : `Last updated: ${EFFECTIVE}.`}
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Section({ title, children, es }: { title: string; children: React.ReactNode; es: boolean }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3" style={{ color: "#EEEEF5" }}>{title}</h2>
      {children}
    </div>
  );
}
