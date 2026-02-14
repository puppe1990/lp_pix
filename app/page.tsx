import type { Metadata } from "next";
import {
  Header,
  Hero,
  Problem,
  Solution,
  HowItWorks,
  Pricing,
  Testimonials,
  FAQ,
  CTA,
  Footer,
} from "@/components";

export const metadata: Metadata = {
  title: "SegurePix | Pix com Menor Exposicao de Dados para Saude",
  description:
    "Guia e plataforma para profissionais de saude receberem via Pix com menor exposicao de CPF, organizacao de recibos e boas praticas de privacidade.",
  alternates: {
    canonical: "/",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como funciona o Pix privado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O SegurePix prioriza chaves aleatorias (EVP) e fluxo de cobranca para reduzir exposicao de dados pessoais no recebimento.",
      },
    },
    {
      "@type": "Question",
      name: "O dinheiro cai direto na conta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A liquidacao depende do arranjo contratado. No fluxo padrao, o valor e conciliado e repassado para a conta cadastrada conforme as regras do plano.",
      },
    },
    {
      "@type": "Question",
      name: "Tem suporte para Receita Saude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A plataforma apoia organizacao de dados e fluxo de recibos para reduzir retrabalho no processo fiscal do consultorio.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
