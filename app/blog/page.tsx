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

  return (
    <>
      <Header />
      <BlogIndex posts={posts} />
      <Footer />
    </>
  );
}

