"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "O SegurePix já é um produto pronto?",
    answer:
      "Ainda não. Estamos em fase de validação de problema e piloto. Nesta etapa, o objetivo é entender dor real, frequência e intenção de teste antes de construir a solução completa.",
  },
  {
    question: "Como funciona o Pix com menor exposição de dados?",
    answer:
      "A hipótese principal é priorizar chaves Pix aleatórias e fluxos de cobrança por contexto, reduzindo a necessidade de expor CPF como chave principal. O desenho final depende do arranjo operacional validado.",
  },
  {
    question: "Vocês já têm integração ativa com Receita Saúde ou PSP?",
    answer:
      "Não prometemos integração ativa nesta fase. Estamos mapeando cenários e prioridades para decidir quais integrações entram no escopo do piloto.",
  },
  {
    question: "Existe preço definido?",
    answer:
      "Ainda não existe preço comercial definitivo. As entrevistas e os formulários desta sprint ajudam a definir formato de piloto e modelo de cobrança futuro.",
  },
  {
    question: "Quem está sendo priorizado na validação?",
    answer:
      "O ICP principal é psicólogos autônomos que recebem Pix com frequência. Também coletamos sinais de dentistas, fisioterapeutas, médicos e nutricionistas para comparação.",
  },
  {
    question: "O que acontece depois do cadastro em /interesse?",
    answer:
      "Seu lead é classificado por profissão, volume, dor e urgência. Quando há aderência, entramos em contato para uma entrevista curta em até 48 horas.",
  },
  {
    question: "Que tipo de promessa vocês evitam nesta fase?",
    answer:
      "Evitamos claims absolutos como conformidade total, SLA garantido ou operação em produção sem evidência. A comunicação é transparente sobre limites do estágio atual.",
  },
  {
    question: "Como posso contribuir melhor com a validação?",
    answer:
      "Responder o formulário com contexto real e participar de entrevista é o que mais acelera decisões de produto. O foco é aprendizado, não venda imediata.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/5 text-white/80 text-sm font-semibold rounded-full mb-4">
            <HelpCircle className="w-4 h-4 inline mr-2" />
            Perguntas Frequentes
          </span>
          <h2 className="heading-lg mb-4">
            Tire suas <span className="gradient-text">dúvidas</span>
          </h2>
          <p className="text-lg text-white/60">
            Escopo atual: validação de demanda e entrevistas com profissionais de saúde.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "w-full text-left p-5 rounded-xl transition-all",
                  openIndex === index
                    ? "bg-white/10 border border-white/20"
                    : "bg-white/5 border border-transparent hover:bg-white/[0.07]"
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-white/60 flex-shrink-0 transition-transform",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-white/60 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 mb-4">Quer contribuir com a validação?</p>
          <a
            href="/interesse?plano=entrevista&source=faq_cta&campaign=validacao_14d&intent=entrevista"
            className="btn-secondary"
          >
            Participar de entrevista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
