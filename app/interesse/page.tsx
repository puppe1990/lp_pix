"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Bell,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Users,
  Clock,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

const interestLabels: Record<string, { title: string; description: string }> = {
  starter: {
    title: "Plano Starter",
    description: "Ideal para profissionais iniciando sua jornada",
  },
  professional: {
    title: "Plano Professional",
    description: "Para consultórios estabelecidos que buscam mais recursos",
  },
  enterprise: {
    title: "Plano Enterprise",
    description: "Solução completa para clínicas e equipes",
  },
  demo: {
    title: "Demonstração Personalizada",
    description: "Veja o PrivatePix Pro em ação para seu negócio",
  },
  geral: {
    title: "PrivatePix Pro",
    description: "Receba Pix sem expor seus dados pessoais",
  },
};

const benefits = [
  {
    icon: Clock,
    title: "Acesso Antecipado",
    description: "Seja um dos primeiros a usar quando lançarmos",
  },
  {
    icon: Sparkles,
    title: "Condições Especiais",
    description: "Desconto exclusivo para early adopters",
  },
  {
    icon: Users,
    title: "Influencie o Produto",
    description: "Sua opinião vai moldar as funcionalidades",
  },
];

function InteresseContent() {
  const searchParams = useSearchParams();
  const interesse = searchParams.get("interesse") || "geral";
  const plano = searchParams.get("plano") || interesse;
  
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [profissao, setProfissao] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  const interestInfo = interestLabels[plano] || interestLabels.geral;

  // Generate random numbers only on client side to avoid hydration mismatch
  useEffect(() => {
    setWaitlistPosition(Math.floor(Math.random() * 300 + 150));
    setWaitlistCount(Math.floor(Math.random() * 200 + 100));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simula envio - aqui você integraria com seu backend/CRM
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log para analytics (aqui você integraria com Google Analytics, Mixpanel, etc.)
    console.log("Fake Door Interest:", {
      interesse: plano,
      email,
      nome,
      profissao,
      timestamp: new Date().toISOString(),
      source: searchParams.get("source") || "direct",
    });

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
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
            <span className="text-brand-400 font-semibold">
              {interestInfo.title}
            </span>{" "}
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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-900 via-midnight-950 to-midnight-950" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-500" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="relative z-10 container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full mb-6">
                <Rocket className="w-4 h-4 text-accent-gold" />
                <span className="text-sm font-semibold text-accent-gold">
                  Em Breve
                </span>
              </div>

              <h1 className="heading-lg mb-4">
                <span className="text-balance">
                  Estamos construindo algo{" "}
                  <span className="gradient-text">incrível</span> para você
                </span>
              </h1>

              <div className="glass rounded-xl p-4 mb-6 border-l-4 border-brand-500">
                <p className="text-lg font-semibold text-white mb-1">
                  {interestInfo.title}
                </p>
                <p className="text-white/60">{interestInfo.description}</p>
              </div>

              <p className="text-lg text-white/60 mb-8">
                Este recurso ainda está em desenvolvimento, mas seu interesse é{" "}
                <span className="text-brand-400 font-medium">
                  extremamente valioso
                </span>{" "}
                para nós! Entre na lista de espera e seja notificado assim que
                lançarmos.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 bg-brand-500/20 rounded-lg">
                      <benefit.icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-white/50">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand-500/20 rounded-xl">
                    <Bell className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Entre na Lista</h2>
                    <p className="text-sm text-white/50">
                      Sem spam, prometemos!
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Seu nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                      placeholder="Como podemos te chamar?"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Seu melhor e-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="profissao"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Sua área de atuação
                    </label>
                    <select
                      id="profissao"
                      value={profissao}
                      onChange={(e) => setProfissao(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-midnight-900">
                        Selecione sua profissão
                      </option>
                      <option value="psicologia" className="bg-midnight-900">
                        Psicologia
                      </option>
                      <option value="odontologia" className="bg-midnight-900">
                        Odontologia
                      </option>
                      <option value="fisioterapia" className="bg-midnight-900">
                        Fisioterapia
                      </option>
                      <option value="medicina" className="bg-midnight-900">
                        Medicina
                      </option>
                      <option value="nutricao" className="bg-midnight-900">
                        Nutrição
                      </option>
                      <option value="advocacia" className="bg-midnight-900">
                        Advocacia
                      </option>
                      <option value="contabilidade" className="bg-midnight-900">
                        Contabilidade
                      </option>
                      <option value="outro" className="bg-midnight-900">
                        Outro
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Entrando na lista...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Quero ser avisado!
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-white/40 text-center">
                    Ao se cadastrar, você concorda em receber comunicações sobre
                    o PrivatePix Pro. Você pode cancelar a qualquer momento.
                  </p>
                </form>
              </div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-6 text-center"
              >
                <div className="flex items-center justify-center gap-2 text-white/40">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 border-2 border-midnight-950 flex items-center justify-center text-xs font-bold"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm">
                    +{waitlistCount ?? "..."} pessoas na lista
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function InteressePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin h-8 w-8 border-2 border-brand-500 border-t-transparent rounded-full" />
        </div>
      }
    >
      <InteresseContent />
    </Suspense>
  );
}

