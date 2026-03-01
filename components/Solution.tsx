"use client";

import { motion } from "framer-motion";
import {
  Shield,
  QrCode,
  FileText,
  Lock,
  Zap,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Chaves Pix Aleatórias",
    description:
      "Hipótese principal: priorizar chaves aleatórias e cobrança por contexto para reduzir exposição de dados pessoais.",
    highlights: ["QR Codes por contexto", "Menor exposição de CPF", "Fluxo em validação"],
  },
  {
    icon: FileText,
    title: "Fluxo de Recibos",
    description:
      "Estamos validando como reduzir retrabalho na emissão e organização de recibos sem prometer integração ativa nesta fase.",
    highlights: ["Rotina atual mapeada", "Pontos de atrito", "Cenários prioritários"],
  },
  {
    icon: Lock,
    title: "LGPD & Ética",
    description:
      "Objetivo da validação: entender quais controles de privacidade são essenciais para a rotina de consultório.",
    highlights: ["Boas práticas", "Limites claros", "Sem claims absolutos"],
  },
  {
    icon: Zap,
    title: "Confirmação de Recebimento",
    description:
      "Mapeamos a necessidade de confirmação rápida de pagamento para reduzir interrupções no atendimento.",
    highlights: ["Problema recorrente", "Prioridade por urgência", "Escopo de piloto"],
  },
  {
    icon: RefreshCcw,
    title: "Cobranças Recorrentes",
    description:
      "Entendemos se faz sentido incluir fluxo recorrente já no piloto ou em fase posterior.",
    highlights: ["Sessões frequentes", "Hipótese em teste", "Sem compromisso de entrega"],
  },
  {
    icon: Shield,
    title: "Riscos Operacionais",
    description:
      "Levantamos riscos percebidos no processo atual para priorizar proteções mais críticas no MVP.",
    highlights: ["Risco percebido", "Priorização por impacto", "Roadmap de validação"],
  },
];

export function Solution() {
  return (
    <section id="solucao" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[150px]" />
      </div>

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
            Hipóteses de Solução
          </span>
          <h2 className="heading-lg mb-4">
            <span className="text-balance">
              Tudo que você precisa para{" "}
              <span className="gradient-text">receber com privacidade</span>
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Ainda não há produto pronto. Esta seção resume hipóteses que estamos
            validando com profissionais de saúde antes de construir o MVP.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:border-brand-500/30"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all">
                  <feature.icon className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {feature.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-1.5 text-xs text-white/50"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                    {highlight}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <div className="relative">
            {/* Mock Dashboard */}
            <div className="glass rounded-3xl p-4 md:p-8 overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-accent-coral" />
                <div className="w-3 h-3 rounded-full bg-accent-gold" />
                <div className="w-3 h-3 rounded-full bg-brand-400" />
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Panel - QR Code */}
                <div className="bg-white/5 rounded-2xl p-6 text-center">
                  <h4 className="text-sm font-medium text-white/60 mb-4">
                    Seu QR Code Privado
                  </h4>
                  <div className="w-40 h-40 mx-auto bg-white rounded-xl p-3 mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-midnight-900 to-midnight-800 rounded-lg flex items-center justify-center">
                      <QrCode className="w-20 h-20 text-white/90" />
                    </div>
                  </div>
                  <div className="text-xs text-white/40">
                    Chave: <span className="text-brand-400 font-mono">k7x9...m2n4</span>
                  </div>
                  <div className="mt-2 text-xs text-white/30">
                    Seu CPF e nome não aparecem
                  </div>
                </div>

                {/* Middle Panel - Stats */}
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Recebido hoje</div>
                    <div className="text-3xl font-bold gradient-text">R$ 2.450</div>
                    <div className="text-xs text-brand-400 mt-1">+12% vs ontem</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Transações</div>
                    <div className="text-3xl font-bold">14</div>
                    <div className="text-xs text-white/40 mt-1">Todas confirmadas</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-sm text-white/60 mb-1">Recibos emitidos</div>
                    <div className="text-3xl font-bold">14</div>
                    <div className="text-xs text-brand-400 mt-1">100% automáticos</div>
                  </div>
                </div>

                {/* Right Panel - Recent */}
                <div className="bg-white/5 rounded-2xl p-6">
                  <h4 className="text-sm font-medium text-white/60 mb-4">
                    Últimos recebimentos
                  </h4>
                  <div className="space-y-3">
                    {[
                      { time: "Agora", value: "R$ 200", status: "Confirmado" },
                      { time: "14:32", value: "R$ 150", status: "Confirmado" },
                      { time: "11:15", value: "R$ 200", status: "Confirmado" },
                      { time: "09:45", value: "R$ 300", status: "Confirmado" },
                    ].map((tx, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                      >
                        <div>
                          <div className="text-sm font-medium">{tx.value}</div>
                          <div className="text-xs text-white/40">{tx.time}</div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-brand-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {tx.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 via-transparent to-brand-500/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
