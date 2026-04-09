import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function VoicePage() {
  return (
    <main style={{ background: "#080810", minHeight: "100vh" }}>
      <Nav />

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" style={{ opacity: 0.3 }} />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(21,96,168,0.1) 0%, transparent 70%)" }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <span className="tag mb-6 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#5BA3E0" }} />
            OLTO Voice · AI Call Handling
          </span>
          <h1 className="font-bold mb-6 leading-[1.05]" style={{ fontSize: "clamp(40px, 5vw, 68px)", color: "#EEEEF5" }}>
            Your phone rings at 2am.<br />
            <span className="blue-text">OLTO answers it.</span>
          </h1>
          <p className="mb-10 max-w-xl" style={{ fontSize: "18px", color: "#9999B0", lineHeight: "1.7" }}>
            OLTO Voice handles inbound calls 24/7 — qualifying leads, booking appointments, answering questions, and handing off to your team when it matters. You wake up to revenue.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Get OLTO Voice</Link>
            <div className="btn-secondary" style={{ cursor: "default" }}>From £199/month</div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 border-t" style={{ borderColor: "#1E1E32", background: "#0D0D1A" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4">The problem it solves</p>
              <h2 className="font-bold mb-6" style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "#EEEEF5" }}>
                Every missed call is lost revenue
              </h2>
              <p className="mb-5 leading-relaxed" style={{ color: "#9999B0" }}>
                The average business misses 62% of calls outside business hours. Each one is a potential booking, sale, or client — gone to whoever picked up.
              </p>
              <p className="leading-relaxed" style={{ color: "#9999B0" }}>
                OLTO Voice doesn't just answer calls. It has real conversations — asking the right questions, capturing lead details, booking into your calendar, and notifying your team instantly.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { title: "24/7 call handling", desc: "Never miss a call again. OLTO answers every time, day or night." },
                { title: "Lead capture & qualification", desc: "Automatically captures name, email, and intent — then scores the lead." },
                { title: "Booking & calendar integration", desc: "Books directly into your calendar. Sends confirmation notifications." },
                { title: "Smart call transfer", desc: "Hands off to a human when the caller requests it or the situation requires." },
                { title: "Instant team notifications", desc: "Email and WhatsApp summaries of every call, every lead, every booking." },
                { title: "GDPR compliant", desc: "Call recording, transcription, and data handling all built to UK GDPR standards." },
              ].map((item) => (
                <div key={item.title} className="card p-5 flex gap-4">
                  <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-xs mt-0.5"
                    style={{ background: "rgba(21,96,168,0.15)", color: "#5BA3E0" }}>✓</div>
                  <div>
                    <p className="text-sm font-semibold mb-0.5" style={{ color: "#EEEEF5" }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "#55556A" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 border-t" style={{ borderColor: "#1E1E32" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4 text-center">Pricing</p>
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#EEEEF5" }}>Simple. Transparent.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Starter", price: "£199", setup: "£299", desc: "For businesses that want to stop missing calls and start capturing every lead.", features: ["1 AI voice agent", "Up to 300 minutes/month", "Lead capture & qualification", "Email notifications on every call", "GDPR compliant", "Standard voice & personality"] },
              { name: "Growth", price: "£349", setup: "£299", desc: "For businesses ready to automate bookings and integrate with their existing systems.", features: ["1 AI voice agent", "Up to 750 minutes/month", "Everything in Starter", "Calendar booking integration", "CRM integration", "Monthly performance report", "Custom FAQs & knowledge base"], highlight: true },
              { name: "Enterprise", price: "Let's talk", setup: null, desc: "For businesses with high call volume, complex requirements, or multiple locations.", features: ["Multiple AI voice agents", "Unlimited minutes", "Everything in Growth", "WhatsApp notifications", "Priority support", "Dedicated account management", "Quarterly optimisation sessions"] },
            ].map((tier) => (
              <div key={tier.name} className="relative flex flex-col rounded-2xl p-8"
                style={{ background: tier.highlight ? "#0D1628" : "#0D0D1A", border: `1px solid ${tier.highlight ? "#1560A8" : "#1E1E32"}`, boxShadow: tier.highlight ? "0 0 40px rgba(21,96,168,0.15)" : "none" }}>
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "#1560A8" }}>Most Popular</span>
                  </div>
                )}
                <p className="font-semibold mb-1 text-lg" style={{ color: "#EEEEF5" }}>{tier.name}</p>
                <p className="text-sm mb-4" style={{ color: "#55556A" }}>{tier.desc}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-bold" style={{ fontSize: tier.price === "Let's talk" ? "28px" : "38px", color: "#EEEEF5", lineHeight: 1 }}>{tier.price}</span>
                  {tier.price !== "Let's talk" && <span className="mb-1.5" style={{ color: "#55556A", fontSize: "14px" }}>/month</span>}
                </div>
                <p className="text-xs mb-6" style={{ color: "#55556A" }}>
                  {tier.setup ? `+ ${tier.setup} setup · Cancel anytime` : "Scoped individually · No long-term lock-in"}
                </p>
                <div className="divider mb-5" />
                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#9999B0" }}>
                      <span className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 text-xs mt-0.5" style={{ background: "rgba(21,96,168,0.15)", color: "#5BA3E0" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{ background: tier.highlight ? "#1560A8" : "transparent", color: tier.highlight ? "white" : "#9999B0", border: tier.highlight ? "none" : "1px solid #1E1E32", textDecoration: "none" }}>
                  {tier.price === "Let's talk" ? "Talk to us" : "Get Started"}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-bold mb-8 text-center" style={{ fontSize: "22px", color: "#EEEEF5" }}>Common questions</h3>
            <div className="flex flex-col gap-4">
              {[
                { q: "Will it sound robotic?", a: "No. OLTO Voice uses premium AI voices that sound natural and human. You can hear it yourself by clicking Talk to OTTO on this page." },
                { q: "What if it doesn't understand something?", a: "It transfers the call to your team. You set the transfer number. Nothing falls through the cracks." },
                { q: "Is there a contract?", a: "No long-term contracts on Starter or Growth. Monthly rolling, cancel anytime. Enterprise is scoped per project." },
                { q: "What does the setup fee cover?", a: "Full build, voice configuration, knowledge base setup, calendar and CRM integration, testing, and onboarding. You're live within 48 hours." },
                { q: "Can it speak other languages?", a: "Yes. Multilingual support is available — additional setup required." },
                { q: "What happens to call recordings?", a: "Stored securely, GDPR compliant, 90-day default retention. You own the data." },
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

      <section className="py-20 border-t" style={{ borderColor: "#1E1E32", background: "#0D0D1A" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#EEEEF5" }}>Ready to stop missing calls?</h2>
          <p className="mb-8" style={{ color: "#9999B0" }}>Live within 48 hours. No long-term contract.</p>
          <Link href="/contact" className="btn-primary">Get Started</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
