import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/github-dark.css";
import { FloatingContacts } from "@/components";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-cabinet",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SegurePix | Pix Privado para Profissionais de Saúde",
  description:
    "Receba pagamentos via Pix sem expor seus dados pessoais. Chaves aleatórias, recibos automáticos e total conformidade com LGPD e códigos de ética profissional.",
  keywords: [
    "pix privado",
    "pix sigiloso",
    "pix psicólogo",
    "pix dentista",
    "lgpd saúde",
    "receita saúde",
    "recibos digitais",
  ],
  authors: [{ name: "SegurePix" }],
  openGraph: {
    title: "SegurePix | Pix Privado para Profissionais de Saúde",
    description:
      "Receba pagamentos via Pix sem expor seus dados pessoais. Total conformidade com LGPD.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${sora.variable}`}>
      <body className="font-sans">
        {children}
        <FloatingContacts />
      </body>
    </html>
  );
}

