"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    slug: "starter",
    description: "Para profissionais iniciando",
    price: "49",
    period: "/mês",
    icon: Zap,
    featured: false,
    features: [
      "5 chaves Pix aleatórias",
      "100 recibos/mês",
      "Painel de recebimentos",
      "Notificações instantâneas",
      "Suporte por email",
      "Relatórios básicos",
    ],
    cta: "Começar Grátis",
    trial: "14 dias grátis",
  },
  {
    name: "Professional",
    slug: "professional",
    description: "Para consultórios estabelecidos",
    price: "99",
    period: "/mês",
    icon: Sparkles,
    featured: true,
    badge: "Mais Popular",
    features: [
      "15 chaves Pix aleatórias",
      "500 recibos/mês",
      "Receita Saúde integrada",
      "Prontuário eletrônico básico",
      "Agenda integrada",
      "Pix recorrente",
      "Antifraude básico",
      "Suporte prioritário",
    ],
    cta: "Começar Grátis",
    trial: "14 dias grátis",
  },
  {
    name: "Enterprise",
    slug: "enterprise",
    description: "Para clínicas e equipes",
    price: "199",
    period: "/mês",
    icon: Building2,
    featured: false,
    features: [
      "Chaves ilimitadas",
      "Recibos ilimitados",
      "Tudo do Professional",
      "Multi-usuários",
      "API completa",
      "Split de pagamentos",
      "Antifraude avançado",
      "SLA dedicado",
      "Suporte 24/7",
      "Integrações customizadas",
    ],
    cta: "Falar com Vendas",
    trial: "Demo personalizada",
  },
];

const addons = [
  { name: "Prontuário Seguro", price: "+R$30/mês" },
  { name: "Agenda Avançada", price: "+R$20/mês" },
  { name: "Seguro Antifraude", price: "0,3% do volume" },
];

export function Pricing() {
  return (
    <section id="precos" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[120px]" />
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
          <span className="inline-block px-4 py-1.5 bg-accent-gold/10 text-accent-gold text-sm font-semibold rounded-full mb-4">
            Preços
          </span>
          <h2 className="heading-lg mb-4">
            <span className="text-balance">
              Planos que cabem no seu{" "}
              <span className="gradient-text-gold">consultório</span>
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Comece grátis por 14 dias. Sem cartão de crédito. 
            Cancele quando quiser.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl p-6 md:p-8",
                plan.featured
                  ? "card-highlight scale-[1.02] lg:scale-105"
                  : "card"
              )}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-brand-400 to-brand-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-brand-500/30">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    plan.featured ? "bg-brand-500/20" : "bg-white/5"
                  )}
                >
                  <plan.icon
                    className={cn(
                      "w-6 h-6",
                      plan.featured ? "text-brand-400" : "text-white/60"
                    )}
                  />
                </div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-white/60 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-white/60">R$</span>
                  <span className="text-5xl font-display font-bold">
                    {plan.price}
                  </span>
                  <span className="text-white/60">{plan.period}</span>
                </div>
                {plan.name !== "Enterprise" && (
                  <p className="text-sm text-white/40 mt-2">
                    + 1,5% por transação Pix
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "w-5 h-5 flex-shrink-0 mt-0.5",
                        plan.featured ? "text-brand-400" : "text-white/40"
                      )}
                    />
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="space-y-3">
                <a
                  href={`/interesse?plano=${plan.slug}&source=pricing_card`}
                  className={cn(
                    "block w-full text-center py-3 rounded-xl font-semibold transition-all",
                    plan.featured
                      ? "btn-primary"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  )}
                >
                  {plan.cta}
                </a>
                <p className="text-center text-xs text-white/40">{plan.trial}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-xl font-bold mb-4 text-center">
            Add-ons Opcionais
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
              >
                <span className="text-white/80">{addon.name}</span>
                <span className="text-brand-400 font-semibold">{addon.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50">
            ✓ Sem taxa de setup · ✓ Cancele quando quiser · ✓ Suporte em português
          </p>
        </motion.div>
      </div>
    </section>
  );
}

