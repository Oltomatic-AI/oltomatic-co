import { redirect } from "next/navigation";

// The standalone /pricing page held stale UK pricing (GBP, a "Scale" tier that
// doesn't exist on the Colombian Voice page). Pricing now lives on /voice, which
// carries the correct COP pricing and tier names (Inicial / Crecimiento / Empresa).
// This route redirects there so old links and bookmarks still resolve.
export default function PricingPage() {
  redirect("/voice");
}
