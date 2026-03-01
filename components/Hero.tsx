"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  Shield,
  Lock,
  FileCheck,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const floatingIcons = [
  { Icon: Shield, x: "10%", y: "20%", delay: 0, size: 24 },
  { Icon: Lock, x: "85%", y: "30%", delay: 0.5, size: 20 },
  { Icon: FileCheck, x: "15%", y: "70%", delay: 1, size: 22 },
  { Icon: Sparkles, x: "80%", y: "75%", delay: 1.5, size: 18 },
];

const benefits = [
  "Chaves Pix aleatórias",
  "Fluxo em validação com psicólogos",
  "Boas práticas de privacidade",
];

export function Hero() {
  const [ctaVariant, setCtaVariant] = useState<"A" | "B">("A");

  useEffect(() => {
    const savedVariant = window.localStorage.getItem("hero_cta_variant");
    if (savedVariant === "A" || savedVariant === "B") {
      setCtaVariant(savedVariant);
      return;
    }

    const nextVariant = Math.random() < 0.5 ? "A" : "B";
    window.localStorage.setItem("hero_cta_variant", nextVariant);
    setCtaVariant(nextVariant);
  }, []);

  const ctaConfig = useMemo(() => {
    if (ctaVariant === "B") {
      return {
        label: "Quero Participar do Piloto",
        source: "hero_cta_b",
      };
    }

    return {
      label: "Entrar na Lista de Espera",
      source: "hero_cta_a",
    };
  }, [ctaVariant]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-midnight-600/30 rounded-full blur-[100px] animate-pulse-slow animation-delay-500" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-midnight-950/50 to-midnight-950" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: delay }}
          >
            <div className="p-3 glass rounded-xl">
              <Icon className="text-brand-400" style={{ width: size, height: size }} />
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 container-wide pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white/80">
            Validação aberta para profissionais de saúde
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-xl max-w-5xl mx-auto mb-6"
        >
          <span className="text-balance">
            Receba Pix{" "}
            <span className="gradient-text">sem expor</span>
            <br />
            seus dados pessoais
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 text-balance"
        >
          Reduza a exposição de CPF e nome no recebimento via Pix. Chaves
          aleatórias, recibos digitais e fluxo operacional alinhado a boas
          práticas de privacidade.
        </motion.p>

        {/* Benefits pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-400" />
              <span className="text-sm font-medium text-white/80">{benefit}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href={`/interesse?plano=waitlist&source=${ctaConfig.source}&campaign=validacao_14d&content_slug=home&intent=privacidade_pix&cta_variant=${ctaVariant}`}
            onClick={() =>
              trackEvent("cta_click", {
                page: "home",
                section: "hero",
                cta_label: ctaConfig.label,
                target_url: "/interesse",
                source: ctaConfig.source,
                intent: "privacidade_pix",
                cta_variant: ctaVariant,
              })
            }
            className="btn-primary text-lg px-8 py-4 group"
          >
            {ctaConfig.label}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={`/interesse?plano=entrevista&source=hero_interview&campaign=validacao_14d&content_slug=home&intent=entrevista&cta_variant=${ctaVariant}`}
            onClick={() =>
              trackEvent("cta_click", {
                page: "home",
                section: "hero",
                cta_label: "Participar de Entrevista",
                target_url: "/interesse",
                source: "hero_interview",
                intent: "entrevista",
                cta_variant: ctaVariant,
              })
            }
            className="btn-secondary text-lg px-8 py-4"
          >
            Participar de Entrevista
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-sm text-white/40 mb-4">Indicadores de validação (atualização semanal)</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-sm text-white/50 mb-1">Entrevistas na semana</div>
              <div className="text-2xl font-bold text-brand-300">
                {process.env.NEXT_PUBLIC_VALIDATION_INTERVIEWS_WEEK || "Atualizando"}
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-sm text-white/50 mb-1">Entrevistas realizadas</div>
              <div className="text-2xl font-bold text-brand-300">
                {process.env.NEXT_PUBLIC_VALIDATION_INTERVIEWS_TOTAL || "Atualizando"}
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="text-sm text-white/50 mb-1">Submit rate /interesse</div>
              <div className="text-2xl font-bold text-brand-300">
                {process.env.NEXT_PUBLIC_VALIDATION_SUBMIT_RATE || "Atualizando"}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
