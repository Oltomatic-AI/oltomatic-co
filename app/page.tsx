"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import ActivityTicker from "@/components/ActivityTicker";
import { useLang } from "@/lib/LangContext";

export default function Home() {
  const { t } = useLang();

  const products = [
    { name: "OLTO Reach", tag: t("reach_tag"), description: t("reach_desc"), href: "/reach",
      features: [t("feat_reach1"), t("feat_reach2"), t("feat_reach3"), t("feat_reach4")],
      number: "01", accent: "#16A34A",
      iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { name: "OLTO Voice", tag: t("voice_tag"), description: t("voice_desc"), href: "/voice",
      features: [t("feat_voice1"), t("feat_voice2"), t("feat_voice3"), t("feat_voice4")],
      number: "02", accent: "#BE3A55",
      iconPath: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
    { name: "OLTO Ops", tag: t("ops_tag"), description: t("ops_desc"), href: "/ops",
      features: [t("feat_ops1"), t("feat_ops2"), t("feat_ops3"), t("feat_ops4")],
      number: "03", accent: "#7C3AED",
      iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  ];

  const steps = [
    { step: "01", title: t("step1_title"), desc: t("step1_desc") },
    { step: "02", title: t("step2_title"), desc: t("step2_desc") },
    { step: "03", title: t("step3_title"), desc: t("step3_desc") },
    { step: "04", title: t("step4_title"), desc: t("step4_desc") },
  ];

  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.35 }} />
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(21,96,168,0.18) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(21,96,168,0.4), transparent)" }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-fade-up mb-7">
                <span className="tag">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: "#5BA3E0" }} />
                  {t("hero_tag")}
                </span>
              </div>
              <h1 className="animate-fade-up-1 font-bold leading-[1.02] tracking-tight mb-5"
                style={{ fontSize: "clamp(42px, 5.5vw, 74px)" }}>
                <span style={{ color: "#EEEEF5" }}>{t("hero_h1a")}</span>
                <br /><span style={{ color: "#EEEEF5" }}>{t("hero_h1b")}</span>
                <br /><span className="blue-text">{t("hero_h1c")}</span>
              </h1>
              <p className="animate-fade-up-2 mb-8" style={{ fontSize: "17px", color: "#9999B0", lineHeight: "1.75", maxWidth: "480px" }}>
                {t("hero_sub")}
              </p>
              <div className="animate-fade-up-3 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">{t("hero_cta1")}</Link>
                <Link href="#products" className="btn-secondary">{t("hero_cta2")}</Link>
              </div>
            </div>

            <div className="animate-fade-up-4 hidden lg:block">
              <div className="card p-6 blue-glow relative overflow-hidden" style={{ borderColor: "rgba(21,96,168,0.3)" }}>
                <div className="flex items-center justify-between mb-5">
                  <p className="section-label">{t("hero_why")}</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: "#16A34A", animation: "pulse 2s infinite" }} />
                    <span className="text-xs" style={{ color: "#16A34A" }}>{t("ticker_running")}</span>
                  </div>
                </div>
                <ActivityTicker />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO SIDES */}
      <section className="py-20 relative" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">{t("twosides_label")}</p>
              <h2 className="font-bold mb-5 leading-tight" style={{ fontSize: "clamp(30px, 3.5vw, 46px)", color: "#EEEEF5" }}>
                {t("twosides_h2a")}<br />{t("twosides_h2b")}
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#9999B0", fontSize: "16px" }}>
                <strong style={{ color: "#EEEEF5" }}>Oltomatic</strong> — {t("twosides_p1")}
              </p>
              <p style={{ color: "#9999B0", lineHeight: "1.75", fontSize: "16px" }}>
                <strong style={{ color: "#EEEEF5" }}>OLTO Suite</strong> — {t("twosides_p2")}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Oltomatic", sub: t("bespoke_sub"), desc: t("bespoke_desc"), color: "#1560A8" },
                { label: "OLTO Suite", sub: t("suite_sub"), desc: t("suite_desc"), color: "#2272C3" },
              ].map((item) => (
                <div key={item.label} className="card interactive p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0"
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

      {/* PRODUCTS */}
      <section id="products" className="py-20 relative" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(21,96,168,0.05) 0%, transparent 60%)" }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">{t("products_label")}</p>
            <h2 className="font-bold" style={{ fontSize: "clamp(26px, 3vw, 42px)", color: "#EEEEF5" }}>{t("products_h2")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link key={p.name} href={p.href}
                className="group block p-7 rounded-2xl relative overflow-hidden transition-all duration-300"
                style={{ background: "#0D0D1A", border: "1px solid #1E1E32", textDecoration: "none" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = p.accent + "55"; el.style.transform = "translateY(-3px)"; el.style.boxShadow = `0 12px 40px ${p.accent}18`; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#1E1E32"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
                <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl"
                  style={{ background: `linear-gradient(to bottom, ${p.accent}, transparent)` }} />
                <div className="absolute top-4 right-5 font-mono font-bold select-none"
                  style={{ fontSize: "56px", color: "#1E1E32", lineHeight: 1 }}>{p.number}</div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: p.accent + "18", border: `1px solid ${p.accent}30` }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        {p.iconPath.includes("M15 12") ? (
                          <><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></>
                        ) : (<path d={p.iconPath} />)}
                      </svg>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: p.accent + "15", color: p.accent, border: `1px solid ${p.accent}25` }}>{p.tag}</span>
                  </div>
                  <h3 className="font-bold mb-2.5" style={{ fontSize: "20px", color: "#EEEEF5" }}>{p.name}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#9999B0" }}>{p.description}</p>
                  <div className="divider mb-5" />
                  <ul className="flex flex-col gap-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: "#9999B0" }}>
                        <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-xs"
                          style={{ background: p.accent + "18", color: p.accent }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-medium" style={{ color: p.accent }}>{t("learn_more")}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BESPOKE */}
      <section className="py-20 relative" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-4">{t("bespoke_label")}</p>
              <h2 className="font-bold mb-5 leading-tight" style={{ fontSize: "clamp(26px, 3.5vw, 42px)", color: "#EEEEF5" }}>
                {t("bespoke_h2a")}<br />{t("bespoke_h2b")}
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#9999B0", fontSize: "16px" }}>{t("bespoke_p1")}</p>
              <p className="mb-7 leading-relaxed" style={{ color: "#9999B0", fontSize: "16px" }}>{t("bespoke_p2")}</p>
              <ul className="flex flex-col gap-3 mb-9">
                {[t("bespoke_i1"), t("bespoke_i2"), t("bespoke_i3"), t("bespoke_i4")].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#9999B0" }}>
                    <span className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 text-xs"
                      style={{ background: "rgba(21,96,168,0.12)", color: "#5BA3E0" }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">{t("bespoke_cta")}</Link>
            </div>
            <div className="card p-7 blue-glow" style={{ borderColor: "rgba(21,96,168,0.25)" }}>
              <p className="section-label mb-7">{t("approach_label")}</p>
              {steps.map((item, i) => (
                <div key={item.step}>
                  <div className="flex gap-4 py-5">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0"
                        style={{ background: "rgba(21,96,168,0.15)", color: "#5BA3E0" }}>{item.step}</div>
                      {i < steps.length - 1 && <div className="w-px flex-1" style={{ background: "#1E1E32", minHeight: "14px" }} />}
                    </div>
                    <div className="pb-1">
                      <p className="font-semibold mb-1" style={{ fontSize: "14px", color: "#EEEEF5" }}>{item.title}</p>
                      <p style={{ fontSize: "13px", color: "#55556A", lineHeight: "1.5" }}>{item.desc}</p>
                    </div>
                  </div>
                  {i < steps.length - 1 && <div className="divider" style={{ marginLeft: "48px" }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(21,96,168,0.1) 0%, transparent 65%)" }} />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <p className="section-label mb-4">{t("cta_label")}</p>
          <h2 className="font-bold mb-4 leading-tight" style={{ fontSize: "clamp(30px, 4vw, 52px)", color: "#EEEEF5" }}>{t("cta_h2")}</h2>
          <p className="mb-9 leading-relaxed" style={{ color: "#9999B0", fontSize: "17px", maxWidth: "400px", margin: "0 auto 36px" }}>{t("cta_sub")}</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "15px", padding: "14px 32px" }}>{t("cta_btn")}</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
