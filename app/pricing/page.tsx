import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

const voiceTiers = [
  {
    name: "Starter",
    price: "£199",
    period: "/month",
    setup: "£299 setup",
    description: "For businesses that want to stop missing calls and start capturing every lead.",
    features: [
      "1 AI voice agent",
      "Up to 300 minutes/month",
      "Lead capture & qualification",
      "Email notifications on every call",
      "GDPR compliant",
      "Standard voice & personality setup",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "£349",
    period: "/month",
    setup: "£299 setup",
    description: "For businesses ready to automate bookings and integrate with their existing systems.",
    features: [
      "1 AI voice agent",
      "Up to 750 minutes/month",
      "Everything in Starter",
      "Calendar booking integration",
      "CRM integration",
      "Monthly performance report",
      "Custom FAQs & knowledge base",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "£599",
    period: "/month",
    setup: "£299 setup",
    description: "For businesses with high call volume that need maximum coverage and support.",
    features: [
      "2 AI voice agents",
      "Unlimited minutes",
      "Everything in Growth",
      "WhatsApp notifications",
      "Priority support",
      "Dedicated account management",
      "Quarterly optimisation sessions",
    ],
    cta: "Get Started",
    highlighted: false,
  },
];

const reachTiers = [
  {
    name: "Launch",
    price: "£399",
    period: "/month",
    setup: "£199 setup",
    description: "For businesses ready to test AI-powered outreach on a focused target market.",
    features: [
      "1 target sector",
      "200 prospects researched/month",
      "100 personalised emails sent",
      "AI lead scoring",
      "Hot lead alerts",
      "Dashboard access",
    ],
    cta: "Get Early Access",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "£699",
    period: "/month",
    setup: "£199 setup",
    description: "For businesses scaling outreach across multiple sectors with strategic support.",
    features: [
      "2 target sectors",
      "500 prospects researched/month",
      "250 personalised emails sent",
      "Everything in Launch",
      "Monthly strategy call",
      "A/B email testing",
      "Reply management",
    ],
    cta: "Get Early Access",
    highlighted: true,
  },
  {
    name: "Pipeline",
    price: "£999",
    period: "/month",
    setup: "£199 setup",
    description: "For businesses that want a full outbound pipeline running on autopilot.",
    features: [
      "Unlimited sectors",
      "1,000 prospects researched/month",
      "500 personalised emails sent",
      "Everything in Growth",
      "Dedicated account management",
      "CRM sync",
      "Full pipeline reporting",
    ],
    cta: "Get Early Access",
    highlighted: false,
  },
];

function PricingCard({ tier, product }: { tier: typeof voiceTiers[0], product: string }) {
  return (
    <div className="relative flex flex-col rounded-2xl p-8"
      style={{
        background: tier.highlighted ? "#0D1628" : "#0D0D1A",
        border: `1px solid ${tier.highlighted ? "#1560A8" : "#1E1E32"}`,
        boxShadow: tier.highlighted ? "0 0 40px rgba(21,96,168,0.15)" : "none",
      }}>
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: "#1560A8" }}>Most Popular</span>
        </div>
      )}
      <div className="mb-6">
        <p className="font-semibold mb-1" style={{ color: "#EEEEF5", fontSize: "18px" }}>{tier.name}</p>
        <p className="text-sm mb-4" style={{ color: "#55556A", lineHeight: "1.5" }}>{tier.description}</p>
        <div className="flex items-end gap-1 mb-1">
          <span className="font-bold" style={{ fontSize: "42px", color: "#EEEEF5", lineHeight: 1 }}>{tier.price}</span>
          <span className="mb-1.5" style={{ color: "#55556A", fontSize: "14px" }}>{tier.period}</span>
        </div>
        <p style={{ color: "#55556A", fontSize: "12px" }}>+ {tier.setup} · Cancel anytime</p>
      </div>

      <div className="divider mb-6" />

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm" style={{ color: "#9999B0" }}>
            <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-xs mt-0.5"
              style={{ background: "rgba(21,96,168,0.15)", color: "#5BA3E0" }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <Link href="/contact"
        className="block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
        style={{
          background: tier.highlighted ? "#1560A8" : "transparent",
          color: tier.highlighted ? "white" : "#9999B0",
          border: tier.highlighted ? "none" : "1px solid #1E1E32",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          if (tier.highlighted) {
            (e.currentTarget as HTMLElement).style.background = "#2272C3";
          } else {
            (e.currentTarget as HTMLElement).style.borderColor = "#1560A8";
            (e.currentTarget as HTMLElement).style.color = "#EEEEF5";
          }
        }}
        onMouseLeave={(e) => {
          if (tier.highlighted) {
            (e.currentTarget as HTMLElement).style.background = "#1560A8";
          } else {
            (e.currentTarget as HTMLElement).style.borderColor = "#1E1E32";
            (e.currentTarget as HTMLElement).style.color = "#9999B0";
          }
        }}>
        {tier.cta}
      </Link>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(21,96,168,0.1) 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Pricing</p>
          <h1 className="font-bold mb-5" style={{ fontSize: "clamp(36px, 4vw, 56px)", color: "#EEEEF5" }}>
            Simple, transparent pricing
          </h1>
          <p style={{ color: "#9999B0", fontSize: "18px", maxWidth: "520px", margin: "0 auto" }}>
            No hidden fees. No surprise invoices. Know exactly what you're paying and what you're getting.
          </p>
        </div>
      </section>

      {/* OLTO Voice */}
      <section className="py-20" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
              style={{ background: "#1560A8" }}>O</div>
            <p className="section-label">OLTO Voice</p>
          </div>
          <h2 className="font-bold mb-3" style={{ fontSize: "clamp(24px, 2.5vw, 36px)", color: "#EEEEF5" }}>
            AI call handling
          </h2>
          <p className="mb-12 max-w-xl" style={{ color: "#9999B0" }}>
            Every plan includes full setup, configuration, and onboarding. You're live within 48 hours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {voiceTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} product="voice" />
            ))}
          </div>
          <p className="mt-6 text-sm text-center" style={{ color: "#55556A" }}>
            Need more than 2 agents or enterprise volume? <Link href="/contact" style={{ color: "#1560A8" }}>Talk to us.</Link>
          </p>
        </div>
      </section>

      {/* OLTO Reach */}
      <section className="py-20" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
              style={{ background: "#2272C3" }}>O</div>
            <p className="section-label">OLTO Reach</p>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-bold mb-3" style={{ fontSize: "clamp(24px, 2.5vw, 36px)", color: "#EEEEF5" }}>
                AI lead generation
              </h2>
              <p className="max-w-xl" style={{ color: "#9999B0" }}>
                Currently in controlled rollout. Plans below reflect our standard tiers — get in touch to discuss access and availability.
              </p>
            </div>
            <span className="tag">Early access</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reachTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} product="reach" />
            ))}
          </div>
        </div>
      </section>

      {/* Oltomatic Bespoke */}
      <section className="py-20" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                  style={{ background: "#1560A8" }}>O</div>
                <p className="section-label">Oltomatic Bespoke</p>
              </div>
              <h2 className="font-bold mb-5" style={{ fontSize: "clamp(24px, 2.5vw, 36px)", color: "#EEEEF5" }}>
                Custom builds are quoted individually
              </h2>
              <p className="mb-5 leading-relaxed" style={{ color: "#9999B0" }}>
                Every bespoke project is different. Scope, complexity, integrations, timeline — these all shape the investment. We don't publish a number because a number without context is meaningless.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: "#9999B0" }}>
                What we can tell you: we work with businesses that have a real problem and want a real solution. If that's you, let's talk.
              </p>
              <Link href="/contact" className="btn-primary">Talk to the team</Link>
            </div>
            <div className="card p-8" style={{ borderColor: "#1E1E32" }}>
              <p className="section-label mb-6">What a bespoke conversation looks like</p>
              {[
                { step: "01", title: "Discovery call", desc: "30 minutes. We understand your operation and the problem you're trying to solve." },
                { step: "02", title: "We scope it", desc: "Within a few days we'll come back with an honest assessment and a clear proposal." },
                { step: "03", title: "You decide", desc: "No pressure. If it's not the right fit, we'll tell you." },
                { step: "04", title: "We build", desc: "Fixed scope, fixed timeline, fixed price. No surprises." },
              ].map((item, i, arr) => (
                <div key={item.step}>
                  <div className="flex gap-4 py-5">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0"
                        style={{ background: "rgba(21,96,168,0.15)", color: "#5BA3E0" }}>{item.step}</div>
                      {i < arr.length - 1 && <div className="w-px flex-1" style={{ background: "#1E1E32", minHeight: "12px" }} />}
                    </div>
                    <div>
                      <p className="font-semibold mb-0.5" style={{ fontSize: "13px", color: "#EEEEF5" }}>{item.title}</p>
                      <p style={{ fontSize: "12px", color: "#55556A", lineHeight: "1.5" }}>{item.desc}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && <div className="divider" style={{ marginLeft: "44px" }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-bold mb-12 text-center" style={{ fontSize: "clamp(24px, 2.5vw, 36px)", color: "#EEEEF5" }}>
            Common questions
          </h2>
          <div className="flex flex-col gap-6">
            {[
              { q: "Is there a contract?", a: "No long-term contracts. All plans are monthly and can be cancelled anytime. We'd rather earn your business every month than lock you in." },
              { q: "What does the setup fee cover?", a: "Full build, configuration, testing, and onboarding. For Voice, this includes the agent personality, call flows, integrations, and going live. For Reach, it covers targeting setup, email warm-up, and campaign configuration." },
              { q: "How quickly can I go live?", a: "OLTO Voice: typically 48 hours from payment. OLTO Reach: 5–7 days including email warm-up. Bespoke projects are scoped individually." },
              { q: "What if I exceed my minute or prospect allowance?", a: "We'll let you know before you hit your limit. Overage is charged at a fair rate — we don't penalise growth." },
              { q: "Can I upgrade or downgrade my plan?", a: "Yes. Upgrade anytime, downgrade at the end of your billing cycle." },
            ].map((item) => (
              <div key={item.q} className="p-6 rounded-xl" style={{ background: "#0D0D1A", border: "1px solid #1E1E32" }}>
                <p className="font-semibold mb-2" style={{ color: "#EEEEF5", fontSize: "14px" }}>{item.q}</p>
                <p style={{ color: "#9999B0", fontSize: "14px", lineHeight: "1.6" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ borderTop: "1px solid #1E1E32" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(21,96,168,0.08) 0%, transparent 65%)" }} />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(28px, 3vw, 42px)", color: "#EEEEF5" }}>
            Not sure which plan is right?
          </h2>
          <p className="mb-8" style={{ color: "#9999B0", fontSize: "16px" }}>
            Book a 30-minute call. We'll ask the right questions and tell you honestly what makes sense for your operation.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "15px", padding: "14px 28px" }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
