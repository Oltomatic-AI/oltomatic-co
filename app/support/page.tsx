"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

export default function SupportPage() {
  const [form, setForm] = useState({ name: "", email: "", product: "General", issue: "", description: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  };

  const inputStyle = {
    background: "#161625", border: "1px solid #252538", borderRadius: "8px",
    color: "#EEEEF5", padding: "12px 16px", fontSize: "14px", width: "100%",
    outline: "none", fontFamily: "'DM Sans', sans-serif",
  };

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />

      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.2 }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Support</p>
          <h1 className="font-bold mb-4" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#EEEEF5" }}>
            How can we help?
          </h1>
          <p style={{ color: "#9999B0", fontSize: "17px" }}>
            Raise a ticket and we'll be back in touch within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 border-t" style={{ borderColor: "#1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Quick links */}
            <div className="flex flex-col gap-4">
              <p className="section-label mb-2">Quick links</p>
              {[
                { title: "Check our FAQ", desc: "Answers to the most common questions", href: "/voice#faq", label: "Voice FAQs →" },
                { title: "Reach FAQs", desc: "Questions about OLTO Reach", href: "/reach#faq", label: "Reach FAQs →" },
                { title: "Book a call", desc: "Speak directly with the team", href: "/contact", label: "Contact →" },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <p className="font-semibold text-sm mb-1" style={{ color: "#EEEEF5" }}>{item.title}</p>
                  <p className="text-xs mb-3" style={{ color: "#55556A" }}>{item.desc}</p>
                  <Link href={item.href} className="text-xs font-medium" style={{ color: "#1560A8", textDecoration: "none" }}>{item.label}</Link>
                </div>
              ))}

              <div className="card p-5 mt-2">
                <p className="font-semibold text-sm mb-1" style={{ color: "#EEEEF5" }}>Direct email</p>
                <p className="text-xs mb-2" style={{ color: "#55556A" }}>For urgent technical issues</p>
                <a href="mailto:tech@oltomatic.ai" className="text-xs font-medium" style={{ color: "#1560A8" }}>tech@oltomatic.ai</a>
              </div>

              <div className="card p-5">
                <p className="font-semibold text-sm mb-2" style={{ color: "#EEEEF5" }}>Response times</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    { tier: "All plans", time: "Within 1 business day" },
                    { tier: "Growth & above", time: "Within 4 hours" },
                    { tier: "Enterprise", time: "Priority response" },
                  ].map((r) => (
                    <div key={r.tier} className="flex justify-between">
                      <span className="text-xs" style={{ color: "#55556A" }}>{r.tier}</span>
                      <span className="text-xs" style={{ color: "#9999B0" }}>{r.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ticket form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="font-bold mb-6" style={{ fontSize: "20px", color: "#EEEEF5" }}>Raise a support ticket</h2>

                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "rgba(21,96,168,0.15)" }}>
                      <span style={{ color: "#1560A8", fontSize: "20px" }}>✓</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "#EEEEF5" }}>Ticket submitted</h3>
                    <p style={{ color: "#9999B0" }}>We'll be in touch within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>Your name *</label>
                        <input name="name" required value={form.name} onChange={handleChange} placeholder="Oliver Benson"
                          style={inputStyle} onFocus={(e) => { e.target.style.borderColor = "#1560A8"; }} onBlur={(e) => { e.target.style.borderColor = "#252538"; }} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>Email *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com"
                          style={inputStyle} onFocus={(e) => { e.target.style.borderColor = "#1560A8"; }} onBlur={(e) => { e.target.style.borderColor = "#252538"; }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>Product</label>
                      <select name="product" value={form.product} onChange={handleChange} style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = "#1560A8"; }} onBlur={(e) => { e.target.style.borderColor = "#252538"; }}>
                        <option>General</option>
                        <option>OLTO Voice</option>
                        <option>OLTO Reach</option>
                        <option>OLTO Ops</option>
                        <option>Bespoke project</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>Issue summary *</label>
                      <input name="issue" required value={form.issue} onChange={handleChange} placeholder="Brief description of the issue"
                        style={inputStyle} onFocus={(e) => { e.target.style.borderColor = "#1560A8"; }} onBlur={(e) => { e.target.style.borderColor = "#252538"; }} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "#888896" }}>Full details</label>
                      <textarea name="description" value={form.description} onChange={handleChange} rows={5}
                        placeholder="Tell us exactly what's happening, any error messages, and when it started."
                        style={{ ...inputStyle, resize: "vertical" as const }}
                        onFocus={(e) => { e.target.style.borderColor = "#1560A8"; }} onBlur={(e) => { e.target.style.borderColor = "#252538"; }} />
                    </div>
                    {status === "error" && (
                      <p className="text-sm" style={{ color: "#f87171" }}>Something went wrong. Email us directly at tech@oltomatic.ai</p>
                    )}
                    <button type="submit" disabled={status === "loading"}
                      className="w-full py-3.5 rounded-lg text-sm font-semibold text-white"
                      style={{ background: status === "loading" ? "#252538" : "#1560A8", cursor: status === "loading" ? "not-allowed" : "pointer" }}
                      onMouseEnter={(e) => { if (status !== "loading") e.currentTarget.style.background = "#2272C3"; }}
                      onMouseLeave={(e) => { if (status !== "loading") e.currentTarget.style.background = "#1560A8"; }}>
                      {status === "loading" ? "Submitting..." : "Submit ticket →"}
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
