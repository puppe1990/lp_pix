"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const benefits = [
  "Sem produto pronto nesta etapa",
  "Piloto em definição",
  "Entrevistas de 15 minutos",
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
              Quer ajudar a construir uma solução para
              <br />
              <span className="gradient-text">privacidade no Pix?</span>
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-8">
            Estamos validando a dor com profissionais de saúde e abrindo
            lista de espera para um possível piloto.
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
              href="/interesse?plano=waitlist&source=cta_section&campaign=validacao_14d&content_slug=home&intent=privacidade_pix"
              onClick={() =>
                trackEvent("cta_click", {
                  page: "home",
                  section: "cta_section",
                  cta_label: "Entrar na Lista de Espera",
                  target_url: "/interesse",
                  source: "cta_section",
                  intent: "privacidade_pix",
                })
              }
              className="btn-primary text-lg px-10 py-4 group"
            >
              Entrar na Lista de Espera
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/interesse?plano=entrevista&source=cta_interview&campaign=validacao_14d&content_slug=home&intent=entrevista" 
              onClick={() =>
                trackEvent("cta_click", {
                  page: "home",
                  section: "cta_section",
                  cta_label: "Conversar sobre a Dor",
                  target_url: "/interesse",
                  source: "cta_interview",
                  intent: "entrevista",
                })
              }
              className="btn-secondary text-lg px-8 py-4"
            >
              Conversar sobre a Dor
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
              Mensagens e escopo em validação · Sem promessas de operação em produção
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
