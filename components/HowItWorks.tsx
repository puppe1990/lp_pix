"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  QrCode,
  Wallet,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crie sua conta",
    description:
      "Cadastro rápido em menos de 3 minutos. Apenas dados básicos e verificação de identidade profissional.",
    details: ["Verificação do CRP/CRO/CREFITO", "Sem burocracia", "Aprovação em 24h"],
  },
  {
    number: "02",
    icon: QrCode,
    title: "Gere suas chaves",
    description:
      "Crie chaves Pix aleatórias e QR Codes para diferentes contextos: consultório, telemedicina, grupos.",
    details: ["Chaves por contexto", "QR Codes dinâmicos", "Sem exposição de dados"],
  },
  {
    number: "03",
    icon: Wallet,
    title: "Receba pagamentos",
    description:
      "Compartilhe seu QR Code ou link de pagamento. Receba notificação instantânea a cada transação.",
    details: ["Notificação em <5s", "Confirmação automática", "Sem consultar banco"],
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Recibos automáticos",
    description:
      "Cada pagamento gera automaticamente um recibo digital via Receita Saúde. Tudo em conformidade.",
    details: ["Receita Saúde integrada", "Relatórios prontos", "Sem trabalho manual"],
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-midnight-900/30 to-midnight-950" />

      <div className="relative z-10 container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-purple/10 text-accent-purple text-sm font-semibold rounded-full mb-4">
            Como Funciona
          </span>
          <h2 className="heading-lg mb-4">
            <span className="text-balance">
              Comece a receber em{" "}
              <span className="text-accent-purple">4 passos simples</span>
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Onboarding guiado em menos de 10 minutos. Sem complexidade técnica, 
            sem integrações complicadas.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 mx-auto lg:mx-0 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 relative">
                    <span className="text-3xl font-display font-bold text-white/20">
                      {step.number}
                    </span>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-sm text-white/50 justify-center lg:justify-start"
                      >
                        <ArrowRight className="w-3 h-3 text-brand-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow to next - Desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute top-24 -right-4 hidden lg:block">
                    <ArrowRight className="w-8 h-8 text-white/10" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a href="#precos" className="btn-primary text-lg px-8 py-4">
            Começar Agora
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

