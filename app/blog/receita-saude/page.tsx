import type { Metadata } from "next";

import { BlogIndex } from "@/components/BlogIndex";
import { Footer, Header } from "@/components";
import { getPostSummariesByKeywords } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Receita Saude e Recibos Digitais | Blog SegurePix",
  description:
    "Artigos sobre Receita Saude, recibos digitais, conciliacao financeira e rotina fiscal para profissionais de saude.",
  alternates: { canonical: "/blog/receita-saude" },
  openGraph: {
    title: "Receita Saude e Recibos Digitais | Blog SegurePix",
    description:
      "Aprenda a organizar recibos digitais e processos fiscais no consultorio com menos retrabalho.",
    url: "/blog/receita-saude",
    type: "website",
    locale: "pt_BR",
  },
};

export default function ReceitaSaudeHubPage() {
  const posts = getPostSummariesByKeywords([
    "receita saude",
    "recibo",
    "dmed",
    "malha fina",
    "fiscal",
  ]);

  return (
    <>
      <Header />
      <BlogIndex posts={posts} />
      <Footer />
    </>
  );
}
