"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/LangContext";

export default function ContactPage() {
  const { lang } = useLang();
  const es = lang === "es";
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: es ? "Consulta general" : "General enquiry", message: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  const inputStyle = { background: "#161625", border: "1px solid #252538", borderRadius: "8px", color: "#EEEEF5", padding: "12px 16px", fontSize: "14px", width: "100%", outline: "none", fontFamily: "'DM Sans', sans-serif" };

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.2 }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4">{es ? "Ponte en contacto" : "Get in touch"}</p>
              <h1 className="font-bold mb-4 leading-tight" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#EEEEF5" }}>
                {es ? "Hablemos sobre tu operación" : "Let's talk about your operation"}
              </h1>
              <p className="mb-8 leading-relaxed" style={{ color: "#9999B0", fontSize: "17px" }}>
                {es ? "Sin jerga técnica. Sin presión. Solo una conversación directa sobre lo que la IA puede hacer realmente por tu negocio. Te diremos honestamente si no somos el socio adecuado." : "No jargon. No fluff. Just a straight conversation about what AI can actually do for your business. We'll tell you honestly if we're not the right fit."}
              </p>
              <p className="section-label mb-2">EMAIL</p>
              <a href="mailto:hello@oltomatic.co" style={{ color: "#1560A8", fontSize: "15px" }}>hello@oltomatic.co</a>
              <div className="card p-6 mt-8">
                <p className="font-semibold mb-4" style={{ color: "#EEEEF5", fontSize: "14px" }}>{es ? "Qué esperar" : "What to expect"}</p>
                {(es ? ["Llamada de descubrimiento de 30 minutos", "Escuchamos antes de proponer", "Evaluación honesta de qué puede hacer la IA por ti", "Próximos pasos claros — sin presión de venta"] : ["30-minute discovery call", "We listen before we pitch", "Honest assessment of what AI can do for you", "Clear next steps — no hard sell"]).map((item) => (
                  <div key={item} className="flex items-center gap-3 mb-3">
                    <span style={{ color: "#1560A8" }}>→</span>
                    <span style={{ fontSize: "14px", color: "#9999B0" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-8">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(21,96,168,0.15)" }}>
                    <span style={{ color: "#1560A8", fontSize: "20px" }}>✓</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#EEEEF5" }}>{es ? "¡Mensaje enviado!" : "Message sent!"}</h3>
                  <p style={{ color: "#9999B0" }}>{es ? "Te contactaremos pronto." : "We'll be in touch shortly."}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>{es ? "Tu nombre *" : "Your name *"}</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Juan García" style={inputStyle} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>Email *</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="tu@empresa.com" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>{es ? "Empresa" : "Company"}</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder={es ? "Tu empresa" : "Your company"} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>{es ? "Me interesa" : "I'm interested in"}</label>
                    <select name="interest" value={form.interest} onChange={handleChange} style={inputStyle}>
                      {(es ? ["Consulta general", "OLTO Voice", "OLTO Reach", "OLTO Ops", "Proyecto a medida"] : ["General enquiry", "OLTO Voice", "OLTO Reach", "OLTO Ops", "Bespoke project"]).map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>{es ? "Cuéntanos sobre tu operación" : "Tell us about your operation"}</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder={es ? "¿Qué hace tu empresa y qué problema quieres resolver?" : "What does your business do, and what problem are you trying to solve?"}
                      style={{ ...inputStyle, resize: "vertical" as const }} />
                  </div>
                  {status === "error" && <p className="text-sm" style={{ color: "#f87171" }}>{es ? "Algo salió mal. Escríbenos a hello@oltomatic.ai" : "Something went wrong. Email us at hello@oltomatic.ai"}</p>}
                  <button type="submit" disabled={status === "loading"} className="w-full py-3.5 rounded-lg text-sm font-semibold text-white"
                    style={{ background: status === "loading" ? "#252538" : "#1560A8", cursor: status === "loading" ? "not-allowed" : "pointer" }}>
                    {status === "loading" ? (es ? "Enviando..." : "Sending...") : (es ? "Enviar mensaje →" : "Send message →")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
