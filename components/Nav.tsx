"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => (
  <Link href="/" className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
    <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-lg leading-none flex-shrink-0"
      style={{ background: "#1560A8", fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.5px", fontSize: "18px" }}>
      O
    </div>
    <span className="text-sm font-semibold tracking-tight hidden sm:block" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <span style={{ color: "#1560A8" }}>OLTO</span>
      <span style={{ color: "#EEEEF5" }}>MATIC</span>
    </span>
  </Link>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/reach", label: "OLTO Reach" },
  { href: "/voice", label: "OLTO Voice" },
  { href: "/ops", label: "OLTO Ops" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,16,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30,30,50,0.8)" : "1px solid transparent",
      }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: pathname === link.href ? "#EEEEF5" : "#55556A", fontWeight: pathname === link.href ? "500" : "400", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#9999B0"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = pathname === link.href ? "#EEEEF5" : "#55556A"; }}>
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" className="hidden md:inline-flex btn-primary" style={{ padding: "9px 18px", fontSize: "13px" }}>
          Book a Call
        </Link>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-5 h-0.5 transition-all duration-300" style={{ background: "#EEEEF5", transform: menuOpen ? "rotate(45deg) translateY(8px)" : "" }} />
          <span className="block w-5 h-0.5 transition-all duration-300" style={{ background: "#EEEEF5", opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-0.5 transition-all duration-300" style={{ background: "#EEEEF5", transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "" }} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden" style={{ background: "rgba(8,8,16,0.97)", borderTop: "1px solid #1E1E32" }}>
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="text-sm py-1.5"
                style={{ color: pathname === link.href ? "#EEEEF5" : "#9999B0", textDecoration: "none" }}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)}
              className="btn-primary text-center justify-center mt-2" style={{ textDecoration: "none" }}>
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
