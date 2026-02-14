"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Como funciona o 'Pix privado'?",
    answer:
      "O SegurePix prioriza chaves Pix aleatórias (EVP - Endereço Virtual de Pagamento) em vez de CPF como chave principal. Com QR Code ou link, você reduz exposição de dados pessoais e melhora a organização da cobrança no consultório.",
  },
  {
    question: "O dinheiro cai direto na minha conta?",
    answer:
      "Sim! Funcionamos como um facilitador de pagamentos. Após a confirmação do Pix, o valor é automaticamente transferido para sua conta bancária cadastrada. Você recebe uma notificação instantânea (em menos de 5 segundos) e o dinheiro fica disponível em D+0.",
  },
  {
    question: "É realmente seguro e legal?",
    answer:
      "Trabalhamos para operar com parceiros e processos alinhados às normas aplicáveis, incluindo privacidade de dados e boas práticas de segurança. A adequação final depende do fluxo contratado e da implementação no seu contexto operacional e fiscal.",
  },
  {
    question: "Preciso de conhecimento técnico para usar?",
    answer:
      "Não! O SegurePix foi desenhado para profissionais de saúde, não para desenvolvedores. Nosso onboarding guiado leva menos de 10 minutos. Você só precisa criar sua conta, verificar sua identidade profissional e começar a gerar seus QR Codes. Temos suporte em português disponível para qualquer dúvida.",
  },
  {
    question: "Como funcionam os recibos automáticos?",
    answer:
      "Temos integração direta com o sistema Receita Saúde da Receita Federal. A cada pagamento confirmado, um recibo digital é gerado automaticamente com todos os dados necessários (data, valor, descrição do serviço). Você pode configurar modelos personalizados e os recibos ficam disponíveis para download tanto para você quanto para seu paciente.",
  },
  {
    question: "Posso usar em clínicas com múltiplos profissionais?",
    answer:
      "Sim! O plano Enterprise suporta múltiplos usuários com permissões personalizadas. Cada profissional pode ter suas próprias chaves Pix, e o sistema faz o split automático dos pagamentos. O gestor tem acesso a relatórios consolidados e controle total sobre a operação.",
  },
  {
    question: "Qual a taxa por transação?",
    answer:
      "Cobramos 1,5% por transação Pix processada, além da mensalidade do plano escolhido. Essa taxa é competitiva com o mercado e inclui: processamento do Pix, notificações instantâneas, emissão de recibos e proteção antifraude básica. Não há taxas ocultas ou cobranças surpresa.",
  },
  {
    question: "E se eu já tiver um sistema de agenda?",
    answer:
      "Oferecemos integrações com os principais sistemas do mercado (Doctoralia, Nafisio, entre outros) e uma API completa para integrações customizadas. Se você já usa uma agenda, podemos integrar os pagamentos diretamente nela. Entre em contato com nosso time para avaliar seu caso.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container-narrow">
        {/* Section Header */}
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
            Não encontrou sua resposta? Fale com nosso suporte.
          </p>
        </motion.div>

        {/* FAQ Items */}
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
                      <p className="pt-4 text-white/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 mb-4">Ainda tem dúvidas?</p>
          <a href="mailto:contato@segurepix.com.br" className="btn-secondary">
            Falar com Suporte
          </a>
        </motion.div>
      </div>
    </section>
  );
}
