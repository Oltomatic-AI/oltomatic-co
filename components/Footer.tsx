"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#080810", borderTop: "1px solid #1E1E32" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4" style={{ textDecoration: "none" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-lg"
                style={{ background: "#1560A8" }}>O</div>
              <span className="text-base font-semibold">
                <span style={{ color: "#1560A8" }}>OLTO</span>
                <span style={{ color: "#EEEEF5" }}>MATIC</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "#55556A" }}>
              AI built by operators, for operators. We've been on your side of the table.
            </p>
            <a href="mailto:hello@oltomatic.ai" className="text-sm" style={{ color: "#1560A8" }}>
              hello@oltomatic.ai
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#55556A" }}>Products</p>
            <div className="flex flex-col gap-3">
              {[{ href: "/reach", label: "OLTO Reach" }, { href: "/voice", label: "OLTO Voice" }, { href: "/ops", label: "OLTO Ops" }].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm hover:text-white transition-colors" style={{ color: "#55556A", textDecoration: "none" }}>{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#55556A" }}>Company</p>
            <div className="flex flex-col gap-3">
              {[{ href: "/contact", label: "Contact" }, { href: "/support", label: "Support" }, { href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" }].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm hover:text-white transition-colors" style={{ color: "#55556A", textDecoration: "none" }}>{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid #1E1E32" }}>
          <p className="text-xs" style={{ color: "#55556A" }}>
            © 2025 Oltomatic Ltd. Company No. 16774271. Registered in England & Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
