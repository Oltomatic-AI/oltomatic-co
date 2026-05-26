import { redirect } from "next/navigation";

// OLTO Reach is temporarily withdrawn while we rebuild the enrichment layer.
// This route redirects to the homepage so old links and bookmarks still resolve.
// To relaunch: restore the full page from git history (the commit before this
// withdrawal) and re-add Reach to Nav, Footer, homepage, pricing, contact/support
// dropdowns, email templates, SEO meta and the i18n reach_* / tick6 keys.
// The /reach backend plumbing is untouched.
export default function ReachPage() {
  redirect("/");
}
