"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Bell,
  ArrowLeft,
  Sparkles,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { trackEvent } from "@/lib/analytics";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkqzdqn";

const planLabels: Record<string, { title: string; description: string }> = {
  waitlist: {
    title: "Lista de espera do piloto",
    description: "Cadastro para receber convite de acesso antecipado",
  },
  entrevista: {
    title: "Entrevista de validação",
    description: "Conversa de 15 minutos focada na dor real",
  },
  psicologia: {
    title: "Trilha Psicologia",
    description: "ICP prioritário desta sprint",
  },
  multidisciplinar: {
    title: "Trilha Consultórios Multidisciplinares",
    description: "Segmento secundário para comparação",
  },
  clinicas: {
    title: "Trilha Clínicas em Expansão",
    description: "Mapeamento de dores operacionais",
  },
  geral: {
    title: "Interesse geral na validação",
    description: "Entrar na fila de atualização e convite para piloto",
  },
};

const benefits = [
  {
    icon: Clock,
    title: "Processo objetivo",
    description: "Formulário curto e resposta clara sobre próximos passos",
  },
  {
    icon: Sparkles,
    title: "Sem promessa inflada",
    description: "Fase pré-produto com escopo de piloto em definição",
  },
  {
    icon: Users,
    title: "Aprendizado real",
    description: "As entrevistas orientam o que entra (ou não) no MVP",
  },
];

type Profissao =
  | "psicologia"
  | "odontologia"
  | "fisioterapia"
  | "medicina"
  | "nutricao"
  | "outro";

type VolumePix = "0-10" | "11-30" | "31-80" | "81-200" | "200+";
type DorPrincipal = "exposicao_cpf" | "recibos" | "consolidacao" | "lgpd" | "outro";
type ComoRecebeHoje = "pix_cpf" | "pix_evp" | "conta_pj" | "link_pagamento" | "outro";

function calculateLeadScore(data: {
  profissao: string;
  volume_pix_mensal: string;
  dor_principal: string;
  urgencia: string;
  aceita_entrevista: boolean;
}): number {
  let score = 0;

  if (data.profissao === "psicologia") score += 2;
  if (["31-80", "81-200", "200+"].includes(data.volume_pix_mensal)) score += 2;
  if (["exposicao_cpf", "lgpd"].includes(data.dor_principal)) score += 2;
  if (Number(data.urgencia) >= 4) score += 2;
  if (data.aceita_entrevista) score += 2;

  return score;
}

function InteresseContent() {
  const searchParams = useSearchParams();
  const planoParam = searchParams.get("plano") || searchParams.get("interesse") || "geral";
  const source = searchParams.get("source") || "direct";
  const campaign = searchParams.get("campaign") || "";
  const contentSlug = searchParams.get("content_slug") || "";
  const intent = searchParams.get("intent") || "";
  const ctaVariant = searchParams.get("cta_variant") || "";

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [profissao, setProfissao] = useState<Profissao | "">("");
  const [volumePixMensal, setVolumePixMensal] = useState<VolumePix | "">("");
  const [dorPrincipal, setDorPrincipal] = useState<DorPrincipal | "">("");
  const [urgencia, setUrgencia] = useState<"1" | "2" | "3" | "4" | "5">("3");
  const [comoRecebeHoje, setComoRecebeHoje] = useState<ComoRecebeHoje | "">("");
  const [aceitaEntrevista, setAceitaEntrevista] = useState<"sim" | "nao" | "">("");
  const [whatsapp, setWhatsapp] = useState("");
  const [dorTextoLivre, setDorTextoLivre] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formStarted, setFormStarted] = useState(false);

  const planInfo = planLabels[planoParam] || planLabels.geral;

  useEffect(() => {
    trackEvent("interesse_page_view", {
      source,
      campaign,
      content_slug: contentSlug,
      intent,
      plano_param: planoParam,
      cta_variant: ctaVariant,
    });
  }, [source, campaign, contentSlug, intent, planoParam, ctaVariant]);

  const handleFormStart = () => {
    if (formStarted) return;
    setFormStarted(true);
    trackEvent("interesse_form_start", {
      source,
      campaign,
      content_slug: contentSlug,
      intent,
      plano_param: planoParam,
      cta_variant: ctaVariant,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const wantsInterview = aceitaEntrevista === "sim";

    if (wantsInterview && !whatsapp.trim()) {
      setError("Se você aceitou entrevista, informe seu WhatsApp para contato.");
      setLoading(false);
      trackEvent("interesse_form_error", {
        source,
        error_type: "missing_whatsapp_for_interview",
        cta_variant: ctaVariant,
      });
      return;
    }

    const payload = {
      nome,
      email,
      profissao,
      volume_pix_mensal: volumePixMensal,
      dor_principal: dorPrincipal,
      urgencia,
      como_recebe_hoje: comoRecebeHoje,
      aceita_entrevista: wantsInterview,
      whatsapp: wantsInterview ? whatsapp : "",
      dor_texto_livre: dorTextoLivre,
      source,
      campaign,
      content_slug: contentSlug,
      intent,
      plano_param: planoParam,
      cta_variant: ctaVariant,
    };

    const leadScore = calculateLeadScore(payload);

    const formData = {
      ...payload,
      lead_score: leadScore,
      trilha: planInfo.title,
      _subject: `Novo interesse na validação - ${planInfo.title}`,
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        trackEvent("interesse_form_error", {
          source,
          error_type: "submit_failed",
          cta_variant: ctaVariant,
        });
        throw new Error("Erro ao enviar formulário");
      }

      trackEvent("interesse_form_submit", {
        source,
        campaign,
        content_slug: contentSlug,
        intent,
        profissao,
        dor_principal: dorPrincipal,
        volume_pix_mensal: volumePixMensal,
        aceita_entrevista: wantsInterview,
        cta_variant: ctaVariant,
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Ocorreu um erro ao enviar. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-midnight-950 to-midnight-950" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 text-center max-w-xl"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>

          <h1 className="heading-lg mb-4">
            <span className="gradient-text">Cadastro recebido</span>
          </h1>

          <p className="text-white/60 mb-6">
            Obrigado por participar da validação. Nossa equipe revisa os cadastros diariamente.
          </p>

          <div className="glass rounded-xl p-5 text-left mb-8">
            <p className="text-sm text-white/80 mb-2">Próximos passos</p>
            <ul className="space-y-2 text-sm text-white/60">
              <li>1. Classificamos seu cadastro por dor, volume e urgência.</li>
              <li>2. Se houver aderência, entramos em contato em até 48h.</li>
              <li>3. Entrevistas duram 15 minutos e focam no problema atual.</li>
            </ul>
          </div>

          <Link href="/" className="btn-secondary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-900 via-midnight-950 to-midnight-950" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-500" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="relative z-10 container-wide">
        <div className="max-w-5xl mx-auto">
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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full mb-6">
                <Rocket className="w-4 h-4 text-accent-gold" />
                <span className="text-sm font-semibold text-accent-gold">Piloto em validação</span>
              </div>

              <h1 className="heading-lg mb-4">
                <span className="text-balance">
                  Ajude a validar uma solução para <span className="gradient-text">privacidade no Pix</span>
                </span>
              </h1>

              <div className="glass rounded-xl p-4 mb-6 border-l-4 border-brand-500">
                <p className="text-lg font-semibold text-white mb-1">{planInfo.title}</p>
                <p className="text-white/60">{planInfo.description}</p>
              </div>

              <p className="text-lg text-white/60 mb-8">
                Não há produto utilizável em produção nesta fase. O objetivo é validar dor,
                frequência e intenção de teste antes de construir o MVP.
              </p>

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
                      <h3 className="font-semibold text-white">{benefit.title}</h3>
                      <p className="text-sm text-white/50">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

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
                    <h2 className="text-xl font-bold">Formulário de Interesse</h2>
                    <p className="text-sm text-white/50">Leva menos de 3 minutos</p>
                  </div>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} onFocusCapture={handleFormStart} className="space-y-5">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-white/70 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="profissao" className="block text-sm font-medium text-white/70 mb-2">
                      Profissão
                    </label>
                    <select
                      id="profissao"
                      name="profissao"
                      value={profissao}
                      onChange={(e) => setProfissao(e.target.value as Profissao)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-midnight-900">Selecione</option>
                      <option value="psicologia" className="bg-midnight-900">Psicologia</option>
                      <option value="odontologia" className="bg-midnight-900">Odontologia</option>
                      <option value="fisioterapia" className="bg-midnight-900">Fisioterapia</option>
                      <option value="medicina" className="bg-midnight-900">Medicina</option>
                      <option value="nutricao" className="bg-midnight-900">Nutrição</option>
                      <option value="outro" className="bg-midnight-900">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="volume_pix_mensal" className="block text-sm font-medium text-white/70 mb-2">
                      Volume aproximado de Pix por mês
                    </label>
                    <select
                      id="volume_pix_mensal"
                      name="volume_pix_mensal"
                      value={volumePixMensal}
                      onChange={(e) => setVolumePixMensal(e.target.value as VolumePix)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-midnight-900">Selecione</option>
                      <option value="0-10" className="bg-midnight-900">0 a 10</option>
                      <option value="11-30" className="bg-midnight-900">11 a 30</option>
                      <option value="31-80" className="bg-midnight-900">31 a 80</option>
                      <option value="81-200" className="bg-midnight-900">81 a 200</option>
                      <option value="200+" className="bg-midnight-900">200+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dor_principal" className="block text-sm font-medium text-white/70 mb-2">
                      Principal dor hoje
                    </label>
                    <select
                      id="dor_principal"
                      name="dor_principal"
                      value={dorPrincipal}
                      onChange={(e) => setDorPrincipal(e.target.value as DorPrincipal)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-midnight-900">Selecione</option>
                      <option value="exposicao_cpf" className="bg-midnight-900">Exposição de CPF/nome</option>
                      <option value="recibos" className="bg-midnight-900">Recibos e comprovação</option>
                      <option value="consolidacao" className="bg-midnight-900">Conciliação / organização</option>
                      <option value="lgpd" className="bg-midnight-900">Privacidade / LGPD</option>
                      <option value="outro" className="bg-midnight-900">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="urgencia" className="block text-sm font-medium text-white/70 mb-2">
                      Urgência (1 a 5)
                    </label>
                    <select
                      id="urgencia"
                      name="urgencia"
                      value={urgencia}
                      onChange={(e) => setUrgencia(e.target.value as "1" | "2" | "3" | "4" | "5")}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="1" className="bg-midnight-900">1 - Baixa</option>
                      <option value="2" className="bg-midnight-900">2</option>
                      <option value="3" className="bg-midnight-900">3 - Média</option>
                      <option value="4" className="bg-midnight-900">4</option>
                      <option value="5" className="bg-midnight-900">5 - Alta</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="como_recebe_hoje" className="block text-sm font-medium text-white/70 mb-2">
                      Como recebe hoje
                    </label>
                    <select
                      id="como_recebe_hoje"
                      name="como_recebe_hoje"
                      value={comoRecebeHoje}
                      onChange={(e) => setComoRecebeHoje(e.target.value as ComoRecebeHoje)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-midnight-900">Selecione</option>
                      <option value="pix_cpf" className="bg-midnight-900">Pix com CPF</option>
                      <option value="pix_evp" className="bg-midnight-900">Pix com chave aleatória (EVP)</option>
                      <option value="conta_pj" className="bg-midnight-900">Conta PJ</option>
                      <option value="link_pagamento" className="bg-midnight-900">Link de pagamento</option>
                      <option value="outro" className="bg-midnight-900">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="aceita_entrevista" className="block text-sm font-medium text-white/70 mb-2">
                      Aceita entrevista de 15 minutos?
                    </label>
                    <select
                      id="aceita_entrevista"
                      name="aceita_entrevista"
                      value={aceitaEntrevista}
                      onChange={(e) => setAceitaEntrevista(e.target.value as "sim" | "nao")}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-midnight-900">Selecione</option>
                      <option value="sim" className="bg-midnight-900">Sim</option>
                      <option value="nao" className="bg-midnight-900">Não</option>
                    </select>
                  </div>

                  {aceitaEntrevista === "sim" && (
                    <div>
                      <label htmlFor="whatsapp" className="block text-sm font-medium text-white/70 mb-2">
                        WhatsApp para contato
                      </label>
                      <input
                        type="text"
                        id="whatsapp"
                        name="whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        required
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="dor_texto_livre" className="block text-sm font-medium text-white/70 mb-2">
                      O que mais te incomoda no processo atual? (opcional)
                    </label>
                    <textarea
                      id="dor_texto_livre"
                      name="dor_texto_livre"
                      value={dorTextoLivre}
                      onChange={(e) => setDorTextoLivre(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">Enviando...</span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Enviar interesse
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-white/40 text-center">
                    Cadastro para validação de demanda. Sem oferta de produto ativo nesta fase.
                  </p>
                </form>
              </div>
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
