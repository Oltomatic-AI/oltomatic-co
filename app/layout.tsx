import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300","400","500","600","700","800"] });

export const metadata: Metadata = {
  title: "Oltomatic — IA construida por operadores, para operadores",
  description: "Automatización con IA para empresas. OLTO Voice, OLTO Reach, OLTO Ops y proyectos a medida.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={dmSans.className} style={{ background: "#080810", margin: 0 }}>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
