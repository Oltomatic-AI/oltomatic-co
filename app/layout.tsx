import type { Metadata } from "next";
import "./globals.css";
import OttoWidget from "@/components/OttoWidget";

export const metadata: Metadata = {
  title: "Oltomatic | AI Built by Operators, for Operators",
  description: "We build bespoke AI systems and automation tools for businesses that want results. OLTO Voice, OLTO Reach, OLTO Ops — or custom built from the ground up.",
  openGraph: {
    title: "Oltomatic | AI Built by Operators, for Operators",
    description: "We build bespoke AI systems and automation tools for businesses that want results.",
    url: "https://oltomatic.ai",
    siteName: "Oltomatic",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <OttoWidget />
      </body>
    </html>
  );
}
