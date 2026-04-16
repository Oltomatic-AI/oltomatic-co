"use client";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";

export default function Footer() {
  const { t, lang } = useLang();

  // Each link either uses a translation key OR a language-conditional string.
  // Normalise both to a resolved label so we never call t(undefined).
  const companyLinks: { href: string; label: string }[] = [
    { href: "/contact", label: t("footer_contact") },
    { href: "/support", label: t("footer_support") },
    { href: "/privacy", label: t("footer_privacy") },
    { href: "/cookies", label: lang === "es" ? "Cookies" : "Cookies" },
    { href: "/ai-disclosure", label: lang === "es" ? "Aviso de IA" : "AI Disclosure" },
    { href: "/terms", label: t("footer_terms") },
  ];

  return (
    <footer style={{ background: "#080810", borderTop: "1px solid #1E1E32" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4" style={{ textDecoration: "none" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-lg" style={{ background: "#1560A8" }}>O</div>
              <span className="text-base font-semibold">
                <span style={{ color: "#1560A8" }}>OLTO</span>
                <span style={{ color: "#EEEEF5" }}>MATIC</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "#55556A" }}>{t("footer_tagline")}</p>
            <a href="mailto:hello@oltomatic.co" className="text-sm" style={{ color: "#1560A8" }}>hello@oltomatic.co</a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#55556A" }}>{t("footer_products")}</p>
            <div className="flex flex-col gap-3">
              {[{ href: "/reach", label: "OLTO Reach" }, { href: "/voice", label: "OLTO Voice" }, { href: "/ops", label: "OLTO Ops" }].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm hover:text-white transition-colors" style={{ color: "#55556A", textDecoration: "none" }}>{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#55556A" }}>{t("footer_company")}</p>
            <div className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm hover:text-white transition-colors" style={{ color: "#55556A", textDecoration: "none" }}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid #1E1E32" }}>
          <p className="text-xs" style={{ color: "#55556A" }}>{t("footer_copy")}</p>
        </div>
      </div>
    </footer>
  );
}
