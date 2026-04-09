import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ReachPage() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.3 }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(21,96,168,0.1) 0%, transparent 70%)" }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <span className="tag mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5BA3E0" }} />
            OLTO Reach · Lead Generation
          </span>
          <h1 className="font-bold mb-6 leading-[1.05]" style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "#EEEEF5" }}>
            Leads that come to you.<br />
            <span style={{ background: "linear-gradient(135deg, #16A34A, #4ADE80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Not the other way around.</span>
          </h1>
          <p className="mb-10 max-w-xl" style={{ fontSize: "18px", color: "#9999B0", lineHeight: "1.7" }}>
            OLTO Reach handles the work of finding and engaging your ideal clients — so your time goes on closing, not chasing.
          </p>
          <Link href="/contact" className="btn-primary">Get Early Access</Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 border-t" style={{ borderColor: "#1E1E32", background: "#0D0D1A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4 text-center">How it works</p>
          <h2 className="text-3xl font-bold text-center mb-16" style={{ color: "#EEEEF5" }}>
            From target to conversation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Define your target", desc: "Tell us the type of business you want to reach. We handle everything from there." },
              { step: "02", title: "Research & scoring", desc: "Prospects are researched and scored automatically. The best opportunities rise to the top." },
              { step: "03", title: "Outreach", desc: "Personalised messages are generated and sent at the right time. You control what goes out." },
              { step: "04", title: "You close", desc: "Your dashboard shows every prospect, their status, and any replies. You just show up to the interesting conversations." },
            ].map((item) => (
              <div key={item.step} className="card p-6">
                <span className="text-2xl font-bold font-mono block mb-4" style={{ color: "#16A34A" }}>{item.step}</span>
                <h3 className="font-semibold mb-2" style={{ color: "#EEEEF5" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9999B0" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#EEEEF5" }}>What's inside</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Live prospect research", desc: "Real business data, pulled fresh. Every lead is current — not pulled from a database that was last updated six months ago." },
              { title: "AI lead scoring", desc: "Each prospect gets an automated score based on relevance, ratings, and enrichment. Hot leads jump to the top." },
              { title: "Contact enrichment", desc: "We find and verify contact details automatically. You get a hit rate that would take hours to replicate manually." },
              { title: "Personalised outreach", desc: "Messages are generated and sent by AI — tailored to each prospect. You control the tone and messaging, we handle the volume." },
              { title: "Pipeline dashboard", desc: "See every prospect, their status, score, and outreach history in one clean interface." },
              { title: "Flexible operation", desc: "Run it on a schedule or trigger it manually — configured around how your business actually works." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 card interactive">
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: "rgba(22,163,74,0.15)", color: "#16A34A" }}>✓</div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "#EEEEF5" }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: "#9999B0" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 border-t" style={{ borderColor: "#1E1E32", background: "#0D0D1A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4 text-center">Pricing</p>
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#EEEEF5" }}>Simple, transparent pricing</h2>
          <p className="text-center mb-12 max-w-lg mx-auto" style={{ color: "#9999B0" }}>
            OLTO Reach is currently in controlled rollout. Get in touch to discuss access and the right tier for your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Launch", price: "£399", setup: "£199", desc: "For businesses ready to test AI-powered outreach on a focused target market.", features: ["1 target sector", "200 prospects/month researched", "100 personalised messages sent", "AI lead scoring", "Hot lead alerts", "Dashboard access"] },
              { name: "Growth", price: "£699", setup: "£199", desc: "For businesses scaling outreach across multiple sectors.", features: ["2 target sectors", "500 prospects/month researched", "250 personalised messages sent", "Everything in Launch", "Monthly strategy call", "Reply management"], highlight: true },
              { name: "Pipeline", price: "£999", setup: "£199", desc: "For businesses that want a full outbound pipeline running continuously.", features: ["Unlimited sectors", "1,000 prospects/month researched", "500 personalised messages sent", "Everything in Growth", "Dedicated account management", "Full pipeline reporting"] },
            ].map((tier) => (
              <div key={tier.name} className="relative flex flex-col rounded-2xl p-8"
                style={{ background: tier.highlight ? "#0D1628" : "#0D0D1A", border: `1px solid ${tier.highlight ? "#16A34A" : "#1E1E32"}`, boxShadow: tier.highlight ? "0 0 40px rgba(22,163,74,0.1)" : "none" }}>
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "#16A34A" }}>Most Popular</span>
                  </div>
                )}
                <p className="font-semibold mb-1 text-lg" style={{ color: "#EEEEF5" }}>{tier.name}</p>
                <p className="text-sm mb-4" style={{ color: "#55556A" }}>{tier.desc}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-bold" style={{ fontSize: "38px", color: "#EEEEF5", lineHeight: 1 }}>{tier.price}</span>
                  <span className="mb-1.5" style={{ color: "#55556A", fontSize: "14px" }}>/month</span>
                </div>
                <p className="text-xs mb-6" style={{ color: "#55556A" }}>+ {tier.setup} setup · Cancel anytime</p>
                <div className="divider mb-5" />
                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#9999B0" }}>
                      <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-xs mt-0.5" style={{ background: "rgba(22,163,74,0.12)", color: "#16A34A" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{ background: tier.highlight ? "#16A34A" : "transparent", color: tier.highlight ? "white" : "#9999B0", border: tier.highlight ? "none" : "1px solid #1E1E32", textDecoration: "none" }}>
                  Get Early Access
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-bold mb-8 text-center" style={{ fontSize: "22px", color: "#EEEEF5" }}>Common questions</h3>
            <div className="flex flex-col gap-4">
              {[
                { q: "Is there a contract?", a: "No. All plans are monthly and can be cancelled anytime." },
                { q: "What does the setup fee cover?", a: "Targeting setup, outreach configuration, and getting your pipeline ready to run." },
                { q: "How quickly can I go live?", a: "Typically 5–7 days from payment, including warm-up." },
                { q: "Is it GDPR compliant?", a: "Yes. Outreach is based on legitimate interest and handled in line with UK GDPR." },
                { q: "Can I control what goes out?", a: "Yes. You approve messaging before anything sends, and you can trigger campaigns manually or on a schedule — whatever works for your operation." },
              ].map((item) => (
                <div key={item.q} className="p-6 rounded-xl" style={{ background: "#161625", border: "1px solid #1E1E32" }}>
                  <p className="font-semibold mb-2" style={{ color: "#EEEEF5", fontSize: "14px" }}>{item.q}</p>
                  <p style={{ color: "#9999B0", fontSize: "14px", lineHeight: "1.6" }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t" style={{ borderColor: "#1E1E32" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#EEEEF5" }}>Currently in controlled rollout</h2>
          <p className="mb-8" style={{ color: "#9999B0" }}>Get in touch to discuss access and find the right setup for your business.</p>
          <Link href="/contact" className="btn-primary">Book a call</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
