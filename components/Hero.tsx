"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  FileCheck,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const floatingIcons = [
  { Icon: Shield, x: "10%", y: "20%", delay: 0, size: 24 },
  { Icon: Lock, x: "85%", y: "30%", delay: 0.5, size: 20 },
  { Icon: FileCheck, x: "15%", y: "70%", delay: 1, size: 22 },
  { Icon: Sparkles, x: "80%", y: "75%", delay: 1.5, size: 18 },
];

const benefits = [
  "Chaves Pix aleatórias",
  "Recibos automáticos",
  "100% LGPD",
];

export function Hero() {
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
            +1.2M profissionais de saúde no Brasil
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
          Proteja seu CPF e nome em cada transação. Chaves aleatórias, recibos 
          digitais automáticos e total conformidade com LGPD e códigos de ética.
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
            href="/interesse?plano=geral&source=hero_cta" 
            className="btn-primary text-lg px-8 py-4 group"
          >
            Começar Gratuitamente
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#como-funciona" className="btn-secondary text-lg px-8 py-4">
            Ver Como Funciona
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-sm text-white/40 mb-4">Ideal para profissionais de</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["Psicologia", "Odontologia", "Fisioterapia", "Medicina", "Nutrição"].map(
              (profession) => (
                <span
                  key={profession}
                  className="text-white/50 font-medium hover:text-white/70 transition-colors"
                >
                  {profession}
                </span>
              )
            )}
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
