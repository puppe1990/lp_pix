"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";

const interestLabels: Record<string, string> = {
  starter: "Plano Starter",
  professional: "Plano Professional",
  enterprise: "Plano Enterprise",
  demo: "Demonstração Personalizada",
  geral: "PrivatePix Pro",
};

function SucessoContent() {
  const searchParams = useSearchParams();
  const plano = searchParams.get("plano") || "geral";
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);

  const interestTitle = interestLabels[plano] || interestLabels.geral;

  useEffect(() => {
    setWaitlistPosition(Math.floor(Math.random() * 300 + 150));
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-midnight-950 to-midnight-950" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent-purple/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center px-4 max-w-lg mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center"
        >
          <CheckCircle2 className="w-12 h-12 text-white" />
        </motion.div>

        <h1 className="heading-lg mb-4">
          <span className="gradient-text">Obrigado!</span>
        </h1>

        <p className="text-xl text-white/70 mb-6">
          Você está na lista de espera! 🎉
        </p>

        <p className="text-white/50 mb-8">
          Vamos te avisar assim que o{" "}
          <span className="text-brand-400 font-semibold">{interestTitle}</span>{" "}
          estiver disponível. Fique de olho no seu e-mail!
        </p>

        <div className="glass rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center gap-3 text-brand-400">
            <Heart className="w-5 h-5" />
            <span className="font-medium">
              Você é o #{waitlistPosition ?? "..."} da lista
            </span>
          </div>
        </div>

        {/* Benefits reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="glass rounded-xl p-6 mb-8 text-left"
        >
          <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent-gold" />
            O que você ganha como early adopter:
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
              Acesso antecipado antes do lançamento público
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
              Desconto exclusivo de até 30%
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
              Canal direto para sugestões e feedback
            </li>
          </ul>
        </motion.div>

        <Link
          href="/"
          className="btn-secondary inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>
      </motion.div>
    </section>
  );
}

export default function SucessoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-2 border-brand-500 border-t-transparent rounded-full" />
        </div>
      }
    >
      <SucessoContent />
    </Suspense>
  );
}

