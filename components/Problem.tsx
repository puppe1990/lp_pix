"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Eye,
  FileWarning,
  ShieldOff,
  TrendingUp,
  Users,
} from "lucide-react";

const problems = [
  {
    icon: Eye,
    title: "Exposição de Dados",
    description:
      "Cada Pix recebido expõe seu CPF completo, nome e dados bancários ao pagador.",
    stat: "100%",
    statLabel: "dos Pix exibem dados pessoais",
  },
  {
    icon: ShieldOff,
    title: "Violação de Sigilo",
    description:
      "Códigos de ética profissional e LGPD proíbem exposição desnecessária de dados em relações terapêuticas.",
    stat: "Art. 9º",
    statLabel: "Código de Ética CFP",
  },
  {
    icon: FileWarning,
    title: "Obrigação Fiscal",
    description:
      "Desde jan/2025, profissionais devem emitir recibos digitais via Receita Saúde — sem integração automática.",
    stat: "Jan/2025",
    statLabel: "Receita Saúde obrigatória",
  },
];

const stats = [
  { value: "11M+", label: "Chaves Pix vazadas em 2025", icon: AlertTriangle },
  { value: "+51%", label: "Crescimento de CNPJs em saúde", icon: TrendingUp },
  { value: "1.2M", label: "Profissionais de saúde liberais", icon: Users },
];

export function Problem() {
  return (
    <section id="problema" className="section-padding relative">
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
          <span className="inline-block px-4 py-1.5 bg-accent-coral/10 text-accent-coral text-sm font-semibold rounded-full mb-4">
            O Problema
          </span>
          <h2 className="heading-lg mb-4">
            <span className="text-balance">
              Pix é prático, mas{" "}
              <span className="text-accent-coral">compromete seu sigilo</span>
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Profissionais de saúde enfrentam um dilema: a praticidade do Pix 
            versus a obrigação ética e legal de proteger a privacidade.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="w-12 h-12 bg-accent-coral/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <problem.icon className="w-6 h-6 text-accent-coral" />
              </div>
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-white/60 mb-4">{problem.description}</p>
              <div className="pt-4 border-t border-white/10">
                <div className="text-2xl font-bold text-accent-coral">
                  {problem.stat}
                </div>
                <div className="text-sm text-white/40">{problem.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 ${
                  index !== stats.length - 1 ? "md:border-r border-white/10" : ""
                }`}
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-6 h-6 text-white/60" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <blockquote className="text-lg md:text-xl text-white/60 italic max-w-3xl mx-auto">
            “Meus pacientes viam meu CPF e nome completo a cada sessão.
            Isso comprometia a neutralidade terapêutica que precisamos manter.”
          </blockquote>
          <cite className="block mt-4 text-white/40 not-italic">
            — Psicóloga clínica, São Paulo
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
