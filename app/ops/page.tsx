import { redirect } from "next/navigation";

// OLTO Ops was retired and replaced by OLTO Suite.
// This route now permanently redirects to /suite so old links and
// bookmarks still resolve. Safe to delete this folder once external
// references are gone.
export default function OpsRedirect() {
  redirect("/suite");
}
