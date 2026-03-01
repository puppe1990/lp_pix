"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const interviewInsights = [
  {
    title: "Privacidade no Pix",
    summary:
      "A maior preocupação é reduzir exposição de CPF e nome durante o recebimento, sem piorar a experiência do paciente.",
    tag: "Dor recorrente",
  },
  {
    title: "Tempo administrativo",
    summary:
      "Profissionais relatam retrabalho para organizar comprovantes e conciliar recebimentos em rotina corrida.",
    tag: "Eficiência operacional",
  },
  {
    title: "Segurança de processo",
    summary:
      "A expectativa é ter um fluxo previsível com boas práticas de privacidade e menos risco de erro manual.",
    tag: "Confiabilidade",
  },
  {
    title: "Aderência ao contexto clínico",
    summary:
      "A solução precisa respeitar sigilo profissional e funcionar sem exigir conhecimento técnico avançado.",
    tag: "Usabilidade",
  },
  {
    title: "Intenção de teste",
    summary:
      "Quando a dor é alta e frequente, há abertura para participar de piloto com escopo claro e acompanhamento.",
    tag: "Sinal de compra",
  },
  {
    title: "Objeções comuns",
    summary:
      "As principais objeções são: confiança na operação, clareza sobre limites e impacto real no dia a dia.",
    tag: "Risco percebido",
  },
];

const validationStats = [
  { value: "14 dias", label: "Janela padrão de validação" },
  { value: "15+", label: "Leads válidos (meta mínima)" },
  { value: "5+", label: "Entrevistas realizadas (meta mínima)" },
  { value: "ICP", label: "Foco inicial em psicólogos" },
];

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-midnight-900/50 to-midnight-950" />

      <div className="relative z-10 container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-500/10 text-brand-400 text-sm font-semibold rounded-full mb-4">
            Insights de validação
          </span>
          <h2 className="heading-lg mb-4">
            <span className="text-balance">
              O que estamos ouvindo de <span className="gradient-text">profissionais de saúde</span>
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Estes pontos resumem padrões observados em entrevistas e formulários de interesse.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviewInsights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <Quote className="w-8 h-8 text-brand-500/20 mb-4" />
              <h3 className="text-lg font-semibold mb-3">{insight.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{insight.summary}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="text-xs text-brand-400 font-medium">{insight.tag}</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {validationStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
