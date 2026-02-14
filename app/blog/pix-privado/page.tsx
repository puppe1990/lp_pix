import type { Metadata } from "next";

import { BlogIndex } from "@/components/BlogIndex";
import { Footer, Header } from "@/components";
import { getPostSummariesByKeywords } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Pix Privado no Consultorio | Blog SegurePix",
  description:
    "Conteudos sobre chave aleatoria, sigilo em comprovantes e praticas para reduzir exposicao de dados no Pix.",
  alternates: { canonical: "/blog/pix-privado" },
  openGraph: {
    title: "Pix Privado no Consultorio | Blog SegurePix",
    description:
      "Guias praticos para receber via Pix com menor exposicao de dados pessoais no consultorio.",
    url: "/blog/pix-privado",
    type: "website",
    locale: "pt_BR",
  },
};

export default function PixPrivadoHubPage() {
  const posts = getPostSummariesByKeywords([
    "pix",
    "chave aleatoria",
    "sigilo",
    "cpf",
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
