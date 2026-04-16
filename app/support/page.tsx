"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";

export default function SupportPage() {
  const { lang } = useLang();
  const es = lang === "es";
  const [form, setForm] = useState({ name: "", email: "", product: "General", issue: "", description: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("loading");
    try {
      const res = await fetch("/api/support", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, lang }) });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  const inputStyle = { background: "#161625", border: "1px solid #252538", borderRadius: "8px", color: "#EEEEF5", padding: "12px 16px", fontSize: "14px", width: "100%", outline: "none", fontFamily: "'DM Sans', sans-serif" };

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.2 }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-4">{es ? "Soporte" : "Support"}</p>
          <h1 className="font-bold mb-4" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#EEEEF5" }}>{es ? "¿Cómo podemos ayudarte?" : "How can we help?"}</h1>
          <p style={{ color: "#9999B0", fontSize: "17px" }}>{es ? "Envía un ticket y te responderemos dentro de un día hábil." : "Raise a ticket and we'll be back in touch within one business day."}</p>
        </div>
      </section>

      <section className="py-16 border-t" style={{ borderColor: "#1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <p className="section-label mb-2">{es ? "Accesos rápidos" : "Quick links"}</p>
              {[
                { title: es ? "Preguntas frecuentes" : "Check our FAQ", href: "/voice", label: es ? "FAQs Voice →" : "Voice FAQs →" },
                { title: es ? "FAQs de Reach" : "Reach FAQs", href: "/reach", label: es ? "FAQs Reach →" : "Reach FAQs →" },
                { title: es ? "Agendar llamada" : "Book a call", href: "/contact", label: es ? "Contacto →" : "Contact →" },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <p className="font-semibold text-sm mb-2" style={{ color: "#EEEEF5" }}>{item.title}</p>
                  <Link href={item.href} className="text-xs font-medium" style={{ color: "#1560A8", textDecoration: "none" }}>{item.label}</Link>
                </div>
              ))}
              <div className="card p-5">
                <p className="font-semibold text-sm mb-1" style={{ color: "#EEEEF5" }}>{es ? "Correo directo" : "Direct email"}</p>
                <a href="mailto:tech@oltomatic.ai" className="text-xs font-medium" style={{ color: "#1560A8" }}>tech@oltomatic.ai</a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="font-bold mb-6" style={{ fontSize: "20px", color: "#EEEEF5" }}>{es ? "Enviar un ticket" : "Raise a support ticket"}</h2>
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(21,96,168,0.15)" }}>
                      <span style={{ color: "#1560A8", fontSize: "20px" }}>✓</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "#EEEEF5" }}>{es ? "Ticket enviado" : "Ticket submitted"}</h3>
                    <p style={{ color: "#9999B0" }}>{es ? "Te contactaremos dentro de un día hábil." : "We'll be in touch within one business day."}</p>
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
                      <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>{es ? "Producto" : "Product"}</label>
                      <select name="product" value={form.product} onChange={handleChange} style={inputStyle}>
                        {["General", "OLTO Voice", "OLTO Reach", "OLTO Ops", es ? "Proyecto a medida" : "Bespoke project"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>{es ? "Resumen del problema *" : "Issue summary *"}</label>
                      <input name="issue" required value={form.issue} onChange={handleChange} placeholder={es ? "Descripción breve del problema" : "Brief description of the issue"} style={inputStyle} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>{es ? "Detalles completos" : "Full details"}</label>
                      <textarea name="description" value={form.description} onChange={handleChange} rows={4}
                        placeholder={es ? "Cuéntanos exactamente qué está pasando, mensajes de error y cuándo comenzó." : "Tell us exactly what's happening, any error messages, and when it started."}
                        style={{ ...inputStyle, resize: "vertical" as const }} />
                    </div>
                    <button type="submit" disabled={status === "loading"} className="w-full py-3.5 rounded-lg text-sm font-semibold text-white"
                      style={{ background: "#1560A8", cursor: "pointer" }}>
                      {es ? "Enviar ticket →" : "Submit ticket →"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
