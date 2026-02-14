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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.segurepix.com.br"
  ),
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
    url: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.segurepix.com.br";
  const parsedBaseUrl = new URL(rawBaseUrl);
  if (parsedBaseUrl.host === "segurepix.com.br") {
    parsedBaseUrl.host = "www.segurepix.com.br";
  }
  const baseUrl = parsedBaseUrl.toString().replace(/\/$/, "");

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SegurePix",
    url: baseUrl,
    email: "contato@segurepix.com.br",
    sameAs: [baseUrl],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SegurePix",
    url: baseUrl,
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="pt-BR" className={`${outfit.variable} ${sora.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <FloatingContacts />
      </body>
    </html>
  );
}
