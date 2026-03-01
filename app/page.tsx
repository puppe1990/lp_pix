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
    "Validacao de demanda para profissionais de saude receberem via Pix com menor exposicao de CPF e melhores praticas de privacidade.",
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
        text: "Estamos validando um fluxo que prioriza chaves aleatorias (EVP) para reduzir exposicao de dados no recebimento via Pix.",
      },
    },
    {
      "@type": "Question",
      name: "O SegurePix ja esta em producao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ainda nao. O projeto esta em fase de validacao de demanda e piloto.",
      },
    },
    {
      "@type": "Question",
      name: "Tem suporte para Receita Saude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estamos mapeando cenarios e prioridades. Integracoes futuras dependem dos aprendizados da validacao.",
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
