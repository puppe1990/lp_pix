import type { Metadata } from "next";

import { BlogIndex } from "@/components/BlogIndex";
import { Footer, Header } from "@/components";
import { getPostSummariesByKeywords } from "@/lib/blog";

export const metadata: Metadata = {
  title: "LGPD para Profissionais de Saude | Blog SegurePix",
  description:
    "Guia de conformidade LGPD para consultorios: consentimento, prontuario, seguranca e boas praticas de privacidade.",
  alternates: { canonical: "/blog/lgpd-saude" },
  openGraph: {
    title: "LGPD para Profissionais de Saude | Blog SegurePix",
    description:
      "Conteudos praticos de LGPD para reduzir risco de exposicao de dados em consultorios.",
    url: "/blog/lgpd-saude",
    type: "website",
    locale: "pt_BR",
  },
};

export default function LgpdSaudeHubPage() {
  const posts = getPostSummariesByKeywords([
    "lgpd",
    "consentimento",
    "prontuario",
    "dados sensiveis",
    "privacidade",
  ]);

  return (
    <>
      <Header />
      <BlogIndex posts={posts} />
      <Footer />
    </>
  );
}
