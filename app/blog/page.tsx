import type { Metadata } from "next";

import { BlogIndex } from "@/components/BlogIndex";
import { Footer, Header } from "@/components";
import { getAllPostSummaries } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog SegurePix | Privacidade no Pix e LGPD",
  description:
    "Guias e artigos práticos sobre Pix, privacidade, LGPD e boas práticas para profissionais de saúde. Aprenda a receber com segurança. Veja agora.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog SegurePix | Privacidade no Pix e LGPD",
    description:
      "Guias e artigos práticos sobre Pix, privacidade, LGPD e boas práticas para profissionais de saúde.",
    url: "/blog",
    type: "website",
    locale: "pt_BR",
  },
};

export default function BlogPage() {
  const posts = getAllPostSummaries();
  const hubLinks = [
    {
      href: "/blog/pix-privado",
      title: "Pix Privado",
      description: "Guias para reduzir exposicao de dados no recebimento via Pix.",
    },
    {
      href: "/blog/receita-saude",
      title: "Receita Saude",
      description: "Conteudos praticos para recibos digitais e rotina fiscal.",
    },
    {
      href: "/blog/lgpd-saude",
      title: "LGPD na Saude",
      description: "Boas praticas de privacidade e conformidade para consultorio.",
    },
  ];

  return (
    <>
      <Header />
      <BlogIndex posts={posts} hubLinks={hubLinks} />
      <Footer />
    </>
  );
}
