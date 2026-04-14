"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

export default function PrivacyPage() {
  const { lang } = useLang();
  const es = lang === "es";

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-bold mb-8" style={{ color: "#EEEEF5" }}>
          {es ? "Política de Privacidad" : "Privacy Policy"}
        </h1>
        <div className="prose" style={{ color: "#AAAABC" }}>
          <p className="mb-4">
            {es
              ? 'Oltomatic Ltd ("nosotros") se compromete a proteger sus datos personales.'
              : 'Oltomatic Ltd ("we", "us") is committed to protecting your personal data.'}
          </p>
          <h2 className="text-xl font-semibold mb-3 mt-8" style={{ color: "#EEEEF5" }}>
            {es ? "Datos que recopilamos" : "Data we collect"}
          </h2>
          <p className="mb-4">
            {es
              ? "Cuando nos contactas a través de nuestro sitio web, recopilamos la información que proporcionas: nombre, correo electrónico, nombre de empresa y tu mensaje."
              : "When you contact us via our website, we collect the information you provide: name, email, company name, and your message."}
          </p>
          <h2 className="text-xl font-semibold mb-3 mt-8" style={{ color: "#EEEEF5" }}>
            {es ? "Cómo lo usamos" : "How we use it"}
          </h2>
          <p className="mb-4">
            {es
              ? "Únicamente para responder a tu consulta y, con tu consentimiento, para enviarte información relevante sobre nuestros servicios."
              : "Solely to respond to your enquiry and, with your consent, to send relevant information about our services."}
          </p>
          <h2 className="text-xl font-semibold mb-3 mt-8" style={{ color: "#EEEEF5" }}>
            {es ? "Contacto" : "Contact"}
          </h2>
          <p>
            {es
              ? "Responsable del tratamiento: Oltomatic Ltd, 128 City Road, Londres EC1V 2NX. Correo: "
              : "Data controller: Oltomatic Ltd, 128 City Road, London EC1V 2NX. Email: "}
            <a href="mailto:hello@oltomatic.co" style={{ color: "#1560A8" }}>hello@oltomatic.co</a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
