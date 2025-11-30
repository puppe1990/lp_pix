"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dra. Mariana Silva",
    role: "Psicóloga Clínica",
    location: "São Paulo, SP",
    avatar: "MS",
    content:
      "Finalmente posso receber Pix sem que meus pacientes vejam meu CPF. A neutralidade terapêutica era constantemente comprometida. Agora tenho paz de espírito.",
    rating: 5,
    metric: "320 transações/mês",
  },
  {
    name: "Dr. Ricardo Mendes",
    role: "Dentista",
    location: "Rio de Janeiro, RJ",
    avatar: "RM",
    content:
      "Os recibos automáticos via Receita Saúde me economizam 4 horas por semana. Antes eu fazia tudo manualmente. SegurePix mudou minha rotina administrativa.",
    rating: 5,
    metric: "R$ 45k/mês em Pix",
  },
  {
    name: "Dra. Camila Rocha",
    role: "Fisioterapeuta",
    location: "Belo Horizonte, MG",
    avatar: "CR",
    content:
      "Uso chaves diferentes para atendimento presencial e domiciliar. A organização é perfeita e meus dados pessoais ficam protegidos em todas as situações.",
    rating: 5,
    metric: "15 chaves ativas",
  },
  {
    name: "Dr. Fernando Costa",
    role: "Médico Particular",
    location: "Porto Alegre, RS",
    avatar: "FC",
    content:
      "A notificação instantânea é game changer. Não preciso mais ficar abrindo o app do banco durante as consultas. Recebo o aviso em segundos.",
    rating: 5,
    metric: "SLA <3 segundos",
  },
  {
    name: "Dra. Juliana Alves",
    role: "Nutricionista",
    location: "Curitiba, PR",
    avatar: "JA",
    content:
      "Minha clínica tem 5 profissionais. O split de pagamentos e controle multi-usuário facilitou muito nossa gestão financeira. Tudo em um lugar só.",
    rating: 5,
    metric: "5 profissionais",
  },
  {
    name: "Dr. Lucas Ferreira",
    role: "Psicólogo",
    location: "Brasília, DF",
    avatar: "LF",
    content:
      "O suporte é excepcional. Tive uma dúvida sobre LGPD e me responderam em menos de 2 horas com documentação completa. Sensação de segurança total.",
    rating: 5,
    metric: "NPS 10/10",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-midnight-900/50 to-midnight-950" />

      <div className="relative z-10 container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-500/10 text-brand-400 text-sm font-semibold rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="heading-lg mb-4">
            <span className="text-balance">
              Profissionais que já{" "}
              <span className="gradient-text">confiam em nós</span>
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Mais de 1.500 profissionais de saúde já protegem seus dados 
            com o SegurePix.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-brand-500/20 mb-4" />

              {/* Content */}
              <p className="text-white/70 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent-gold text-accent-gold"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-white/50">
                      {testimonial.role} · {testimonial.location}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-brand-400 font-medium">
                  {testimonial.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "1.500+", label: "Profissionais ativos" },
            { value: "R$ 8M+", label: "Transacionados/mês" },
            { value: "99,5%", label: "Uptime garantido" },
            { value: "4.9/5", label: "Avaliação média" },
          ].map((stat, index) => (
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

