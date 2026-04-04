"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const products = [
  {
    name: "OLTO Reach",
    tag: "Lead Generation",
    description: "AI-powered prospecting that finds, researches, and contacts your ideal clients. Wake up to a pipeline that built itself overnight.",
    href: "/reach",
    features: ["Automated prospect research", "AI lead scoring", "Email enrichment & outreach", "Live pipeline dashboard"],
    number: "01",
  },
  {
    name: "OLTO Voice",
    tag: "Voice AI",
    description: "Your phone rings at 2am. OLTO Voice answers, qualifies the lead, books the job — and you wake up to revenue.",
    href: "/voice",
    features: ["24/7 call handling", "Lead capture & qualification", "Booking & calendar integration", "Human handoff when needed"],
    number: "02",
  },
  {
    name: "OLTO Ops",
    tag: "Operations",
    description: "A suite of operational tools that automate the back-end of your business — from job intake to team coordination.",
    href: "/ops",
    features: ["Workflow automation", "Job management systems", "Multi-channel notifications", "Custom operational tooling"],
    number: "03",
  },
];

export default function Home() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.35 }} />

        {/* Radial glow — left */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(21,96,168,0.18) 0%, transparent 65%)" }} />

        {/* Radial glow — top right */}
        <div className="absolute right-0 top-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(21,96,168,0.08) 0%, transparent 70%)" }} />

        {/* Horizontal rule accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(21,96,168,0.4), transparent)" }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Copy */}
            <div>
              <div className="animate-fade-up mb-8">
                <span className="tag">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: "#5BA3E0" }} />
                  AI built by operators — for operators
                </span>
              </div>

              <h1 className="animate-fade-up-1 font-bold leading-[1.02] tracking-tight mb-6"
                style={{ fontSize: "clamp(44px, 5.5vw, 76px)" }}>
                <span style={{ color: "#EEEEF5" }}>We don't just</span>
                <br />
                <span style={{ color: "#EEEEF5" }}>build AI.</span>
                <br />
                <span className="blue-text">We run it.</span>
              </h1>

              <p className="animate-fade-up-2 mb-10 max-w-lg" style={{ fontSize: "18px", color: "#9999B0", lineHeight: "1.7" }}>
                Most AI agencies are developers selling to business owners. We're operators who built the AI we wished we had — then productised it.
              </p>

              <div className="animate-fade-up-3 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Book a Discovery Call
                </Link>
                <Link href="#products" className="btn-secondary">
                  Explore the products →
                </Link>
              </div>
            </div>

            {/* Right: Stats panel */}
            <div className="animate-fade-up-4 hidden lg:block">
              <div className="card p-8 blue-glow relative overflow-hidden" style={{ borderColor: "rgba(21,96,168,0.3)" }}>
                {/* Inner glow */}
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top right, rgba(21,96,168,0.12), transparent 70%)" }} />

                <p className="section-label mb-8">Why it matters</p>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  {[
                    { value: "62%", label: "of calls missed outside business hours" },
                    { value: "£0", label: "in revenue from a prospect that was never found" },
                    { value: "40hrs", label: "lost weekly to manual operational tasks" },
                    { value: "3–5×", label: "ROI from AI-first operations" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="stat-number blue-text mb-1">{s.value}</div>
                      <p style={{ fontSize: "12px", color: "#55556A", lineHeight: "1.4" }}>{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="divider mb-6" />

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                    style={{ background: "#1560A8" }}>O</div>
                  <p style={{ fontSize: "13px", color: "#9999B0" }}>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TWO SIDES ── */}
      <section className="py-28 relative" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="section-label mb-5">What we actually do</p>
              <h2 className="font-bold mb-6 leading-tight" style={{ fontSize: "clamp(32px, 3.5vw, 48px)", color: "#EEEEF5" }}>
                Two sides.<br />One mission.
              </h2>
              <p className="mb-5" style={{ color: "#9999B0", lineHeight: "1.75", fontSize: "16px" }}>
                <strong style={{ color: "#EEEEF5" }}>Oltomatic</strong> is the bespoke division — custom AI systems designed around your specific operation. No templates. No off-the-shelf workarounds.
              </p>
              <p style={{ color: "#9999B0", lineHeight: "1.75", fontSize: "16px" }}>
                The <strong style={{ color: "#EEEEF5" }}>OLTO product suite</strong> packages our most repeatable solutions into tools ready to deploy. Either way, you're buying from someone who's operated the type of business you're running.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Oltomatic",
                  sub: "Bespoke Division",
                  desc: "Custom AI systems built from scratch. When your problem needs a solution that doesn't exist yet.",
                  color: "#1560A8",
                },
                {
                  label: "OLTO Suite",
                  sub: "Productised Tools",
                  desc: "Reach, Voice, Ops. Our most powerful workflows packaged and ready to plug into your operation.",
                  color: "#2272C3",
                },
              ].map((item) => (
                <div key={item.label} className="card interactive p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-base flex-shrink-0"
                      style={{ background: item.color }}>O</div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#EEEEF5" }}>{item.label}</p>
                      <p className="text-xs" style={{ color: "#55556A" }}>{item.sub}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#9999B0" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="py-28 relative" style={{ borderTop: "1px solid #1E1E32" }}>
        {/* Background accent */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(21,96,168,0.06) 0%, transparent 60%)" }} />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">The OLTO Suite</p>
            <h2 className="font-bold" style={{ fontSize: "clamp(28px, 3vw, 44px)", color: "#EEEEF5" }}>
              Tools that run while you sleep
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link key={p.name} href={p.href}
                className="card interactive group block p-7 relative overflow-hidden"
                style={{ textDecoration: "none" }}>
                {/* Number watermark */}
                <div className="absolute top-4 right-5 font-mono font-bold"
                  style={{ fontSize: "64px", color: "#1E1E32", lineHeight: 1, userSelect: "none" }}>
                  {p.number}
                </div>

                <div className="relative">
                  <span className="tag mb-5 inline-flex">{p.tag}</span>
                  <h3 className="font-bold mb-3" style={{ fontSize: "22px", color: "#EEEEF5" }}>{p.name}</h3>
                  <p className="text-sm leading-relaxed mb-7" style={{ color: "#9999B0" }}>{p.description}</p>

                  <div className="divider mb-5" />

                  <ul className="flex flex-col gap-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "#9999B0" }}>
                        <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-xs"
                          style={{ background: "rgba(21,96,168,0.15)", color: "#5BA3E0" }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-medium" style={{ color: "#1560A8" }}>
                    Learn more <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BESPOKE ── */}
      <section className="py-28 relative" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-5">Oltomatic Bespoke</p>
              <h2 className="font-bold mb-6 leading-tight" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "#EEEEF5" }}>
                Need something that<br />doesn't exist yet?
              </h2>
              <p className="mb-5 leading-relaxed" style={{ color: "#9999B0", fontSize: "16px" }}>
                When a product won't cut it, we build from scratch. Strategy, architecture, build, deployment — we handle the whole thing.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: "#9999B0", fontSize: "16px" }}>
                Our bespoke clients get an operational advantage that competitors can't buy off the shelf.
              </p>
              <ul className="flex flex-col gap-3 mb-10">
                {["Custom AI agent builds", "Multi-system integrations", "Automation strategy & implementation", "Operator-to-operator consultancy"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#9999B0" }}>
                    <span className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 text-xs"
                      style={{ background: "rgba(21,96,168,0.12)", color: "#5BA3E0" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">Talk to us about your build</Link>
            </div>

            {/* Approach steps */}
            <div className="card p-8 blue-glow" style={{ borderColor: "rgba(21,96,168,0.25)" }}>
              <p className="section-label mb-8">Our approach</p>
              <div className="flex flex-col gap-0">
                {[
                  { step: "01", title: "Understand the operation", desc: "We learn your business before we touch a tool." },
                  { step: "02", title: "Design the system", desc: "Architecture built around your workflow, not the other way around." },
                  { step: "03", title: "Build & integrate", desc: "Full deployment across your existing stack." },
                  { step: "04", title: "Hand over & support", desc: "You own it. We're there when you need us." },
                ].map((item, i, arr) => (
                  <div key={item.step}>
                    <div className="flex gap-5 py-6">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0"
                          style={{ background: "rgba(21,96,168,0.15)", color: "#5BA3E0" }}>{item.step}</div>
                        {i < arr.length - 1 && (
                          <div className="w-px flex-1" style={{ background: "#1E1E32", minHeight: "16px" }} />
                        )}
                      </div>
                      <div className="pb-1">
                        <p className="font-semibold mb-1" style={{ fontSize: "14px", color: "#EEEEF5" }}>{item.title}</p>
                        <p style={{ fontSize: "13px", color: "#55556A", lineHeight: "1.5" }}>{item.desc}</p>
                      </div>
                    </div>
                    {i < arr.length - 1 && <div className="divider" style={{ marginLeft: "52px" }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative overflow-hidden" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(21,96,168,0.1) 0%, transparent 65%)" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-5">Let's talk</p>
          <h2 className="font-bold mb-5 leading-tight" style={{ fontSize: "clamp(32px, 4vw, 56px)", color: "#EEEEF5" }}>
            Ready to run leaner?
          </h2>
          <p className="mb-10 leading-relaxed" style={{ color: "#9999B0", fontSize: "18px", maxWidth: "440px", margin: "0 auto 40px" }}>
            30 minutes. No jargon. No fluff. A straight conversation about what AI can actually do for your operation.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "15px", padding: "15px 32px" }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
