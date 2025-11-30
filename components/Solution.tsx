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
      "Gere chaves e QR Codes dinâmicos para cada transação. Seu CPF e nome nunca são expostos ao pagador.",
    highlights: ["QR Codes dinâmicos", "Chaves por contexto", "Múltiplas chaves"],
  },
  {
    icon: FileText,
    title: "Recibos Automáticos",
    description:
      "Integração direta com Receita Saúde. Recibos digitais emitidos automaticamente a cada pagamento confirmado.",
    highlights: ["Receita Saúde integrada", "Emissão automática", "Relatórios fiscais"],
  },
  {
    icon: Lock,
    title: "LGPD & Ética",
    description:
      "Criptografia ponta a ponta, auditoria completa e conformidade com LGPD, CFP, CFO e COFFITO.",
    highlights: ["Criptografia end-to-end", "Auditoria completa", "Conformidade total"],
  },
  {
    icon: Zap,
    title: "Notificação Instantânea",
    description:
      "Confirmação de pagamento em menos de 5 segundos. Sem precisar abrir o app do banco.",
    highlights: ["SLA <5 segundos", "Webhooks em tempo real", "Painel centralizado"],
  },
  {
    icon: RefreshCcw,
    title: "Pix Recorrente",
    description:
      "Configure cobranças automáticas para sessões contínuas. Ideal para terapias semanais.",
    highlights: ["Cobranças programadas", "Lembretes automáticos", "Gestão de pacotes"],
  },
  {
    icon: Shield,
    title: "Antifraude Integrado",
    description:
      "Sistema de detecção de fraudes em tempo real. Proteção contra chargebacks e estornos.",
    highlights: ["Detecção em tempo real", "Score de risco", "Seguro opcional"],
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
            A Solução
          </span>
          <h2 className="heading-lg mb-4">
            <span className="text-balance">
              Tudo que você precisa para{" "}
              <span className="gradient-text">receber com privacidade</span>
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            PrivatePix Pro é a plataforma completa de pagamentos para profissionais 
            de saúde que valorizam sigilo e eficiência.
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

