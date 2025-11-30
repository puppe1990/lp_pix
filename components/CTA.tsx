"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Check } from "lucide-react";

const benefits = [
  "14 dias grátis",
  "Sem cartão de crédito",
  "Cancele quando quiser",
];

export function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-midnight-950 to-midnight-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/20 rounded-full blur-[200px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="relative z-10 container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="inline-flex p-4 bg-brand-500/20 rounded-2xl mb-8">
            <Shield className="w-12 h-12 text-brand-400" />
          </div>

          {/* Headline */}
          <h2 className="heading-lg mb-6">
            <span className="text-balance">
              Pronto para proteger seus
              <br />
              <span className="gradient-text">dados e sua reputação?</span>
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-8">
            Junte-se a mais de 1.500 profissionais de saúde que já recebem 
            pagamentos com privacidade e conformidade total.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full"
              >
                <Check className="w-4 h-4 text-brand-400" />
                <span className="text-sm text-white/80">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#precos"
              className="btn-primary text-lg px-10 py-4 group"
            >
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="btn-secondary text-lg px-8 py-4">
              Agendar Demo
            </a>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-white/40">
              Regulamentado pelo Banco Central · Conformidade LGPD · Criptografia ponta a ponta
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

