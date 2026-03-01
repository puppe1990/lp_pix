"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const tracks = [
  {
    name: "Psicólogos",
    slug: "psicologia",
    description: "ICP prioritário desta sprint",
    focus: "Maior prioridade para entrevistas",
    icon: Zap,
    featured: false,
    signals: [
      "Recebem Pix com frequência",
      "Sensibilidade alta a sigilo",
      "Atendimentos recorrentes",
      "Abertura para entrevista de 15 min",
    ],
    cta: "Quero participar",
    note: "Sem cobrança nesta fase",
  },
  {
    name: "Consultórios multidisciplinares",
    slug: "multidisciplinar",
    description: "Segmento secundário para comparação",
    focus: "Convites limitados durante a validação",
    icon: Sparkles,
    featured: true,
    badge: "Em validação",
    signals: [
      "Cobranças de múltiplos profissionais",
      "Necessidade de fluxo padronizado",
      "Busca por menor exposição de dados",
      "Interesse em piloto assistido",
    ],
    cta: "Entrar na lista",
    note: "Sem plano comercial definido",
  },
  {
    name: "Clínicas em expansão",
    slug: "clinicas",
    description: "Mapeamento de dores operacionais",
    focus: "Usado para testar hipóteses futuras",
    icon: Building2,
    featured: false,
    signals: [
      "Volume maior de Pix por mês",
      "Equipes com perfis diferentes",
      "Necessidade de organização financeira",
      "Disponibilidade para validação",
    ],
    cta: "Conversar com time",
    note: "Sem oferta ativa em produção",
  },
];

const scoringSignals = [
  { name: "Dor de exposição de CPF/nome", value: "Obrigatório" },
  { name: "Volume de Pix por mês", value: "Obrigatório" },
  { name: "Urgência e entrevista", value: "Obrigatório" },
];

export function Pricing() {
  return (
    <section id="precos" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent-gold/10 text-accent-gold text-sm font-semibold rounded-full mb-4">
            Piloto / Early Access
          </span>
          <h2 className="heading-lg mb-4">
            <span className="text-balance">
              Faixas de participação em <span className="gradient-text-gold">validação</span>
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Ainda não existe plano comercial definitivo. Nesta etapa, medimos dor, urgência
            e contexto para definir um piloto viável.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {tracks.map((track, index) => (
            <motion.div
              key={track.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl p-6 md:p-8",
                track.featured ? "card-highlight scale-[1.02] lg:scale-105" : "card"
              )}
            >
              {track.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-brand-400 to-brand-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-brand-500/30">
                    {track.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    track.featured ? "bg-brand-500/20" : "bg-white/5"
                  )}
                >
                  <track.icon
                    className={cn(
                      "w-6 h-6",
                      track.featured ? "text-brand-400" : "text-white/60"
                    )}
                  />
                </div>
                <h3 className="text-2xl font-bold">{track.name}</h3>
                <p className="text-white/60 text-sm">{track.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="text-sm text-white/60 mb-1">Foco desta trilha</div>
                <div className="text-xl font-semibold text-white/90">{track.focus}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {track.signals.map((signal) => (
                  <li key={signal} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "w-5 h-5 flex-shrink-0 mt-0.5",
                        track.featured ? "text-brand-400" : "text-white/40"
                      )}
                    />
                    <span className="text-sm text-white/70">{signal}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <a
                  href={`/interesse?plano=${track.slug}&source=pilot_card&campaign=validacao_14d&content_slug=home&intent=privacidade_pix`}
                  onClick={() =>
                    trackEvent("cta_click", {
                      page: "home",
                      section: "pilot_cards",
                      cta_label: track.cta,
                      target_url: "/interesse",
                      source: "pilot_card",
                      intent: "privacidade_pix",
                    })
                  }
                  className={cn(
                    "block w-full text-center py-3 rounded-xl font-semibold transition-all",
                    track.featured ? "btn-primary" : "bg-white/10 hover:bg-white/20 text-white"
                  )}
                >
                  {track.cta}
                </a>
                <p className="text-center text-xs text-white/40">{track.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Sinais usados para priorizar entrevistas</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {scoringSignals.map((signal) => (
              <div
                key={signal.name}
                className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
              >
                <span className="text-white/80">{signal.name}</span>
                <span className="text-brand-400 font-semibold">{signal.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50">
            ✓ Sem preço final nesta fase · ✓ Piloto em definição · ✓ Transparência de escopo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
