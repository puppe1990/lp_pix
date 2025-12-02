"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components";
import { Shield, Scale, Users, Lock, CheckCircle2, AlertTriangle, BookOpen, FileText } from "lucide-react";
import Link from "next/link";

export default function LGPDPage() {
  const principles = [
    {
      icon: Shield,
      title: "Finalidade",
      description: "Tratamento para propósitos legítimos, específicos, explícitos e informados ao titular.",
    },
    {
      icon: Lock,
      title: "Adequação",
      description: "Compatibilidade com as finalidades informadas ao titular, de acordo com o contexto do tratamento.",
    },
    {
      icon: Users,
      title: "Necessidade",
      description: "Limitação ao mínimo necessário para a realização de suas finalidades.",
    },
    {
      icon: CheckCircle2,
      title: "Livre Acesso",
      description: "Garantia de consulta facilitada e gratuita sobre a forma e a duração do tratamento.",
    },
    {
      icon: Shield,
      title: "Qualidade dos Dados",
      description: "Exatidão, clareza, relevância e atualização dos dados, conforme a necessidade e para o cumprimento da finalidade.",
    },
    {
      icon: Lock,
      title: "Transparência",
      description: "Informações claras, precisas e facilmente acessíveis sobre o tratamento e os responsáveis.",
    },
    {
      icon: AlertTriangle,
      title: "Segurança",
      description: "Medidas técnicas e administrativas para proteger os dados pessoais de acessos não autorizados.",
    },
    {
      icon: Users,
      title: "Prevenção",
      description: "Adoção de medidas para prevenir danos em virtude do tratamento de dados pessoais.",
    },
    {
      icon: CheckCircle2,
      title: "Não Discriminação",
      description: "Impossibilidade de tratamento para fins discriminatórios ilícitos ou abusivos.",
    },
    {
      icon: Shield,
      title: "Responsabilização",
      description: "Demonstração de adoção de medidas eficazes e capazes de comprovar a conformidade com as normas de proteção de dados.",
    },
  ];

  const rights = [
    {
      title: "Confirmação e Acesso",
      description: "Obter confirmação sobre a existência de tratamento e acesso aos dados pessoais.",
    },
    {
      title: "Correção",
      description: "Solicitar correção de dados incompletos, inexatos ou desatualizados.",
    },
    {
      title: "Anonimização, Bloqueio ou Eliminação",
      description: "Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.",
    },
    {
      title: "Portabilidade",
      description: "Solicitar a portabilidade dos dados para outro prestador de serviços ou produto.",
    },
    {
      title: "Eliminação",
      description: "Solicitar a eliminação dos dados pessoais tratados com base em consentimento.",
    },
    {
      title: "Informação sobre Compartilhamento",
      description: "Obter informações sobre entidades públicas e privadas com as quais compartilhamos dados.",
    },
    {
      title: "Informação sobre Consentimento",
      description: "Ser informado sobre a possibilidade de não fornecer consentimento e as consequências da negativa.",
    },
    {
      title: "Revogação de Consentimento",
      description: "Revogar o consentimento a qualquer momento, mediante manifestação expressa.",
    },
  ];

  const legalBases = [
    {
      title: "Consentimento",
      description: "Quando o titular fornece consentimento livre, informado e inequívoco para o tratamento de seus dados.",
      example: "Cadastro na plataforma, newsletter, marketing.",
    },
    {
      title: "Execução de Contrato",
      description: "Para cumprimento de obrigações decorrentes de contrato ou de procedimentos preliminares.",
      example: "Prestação de serviços contratados, processamento de pagamentos.",
    },
    {
      title: "Cumprimento de Obrigação Legal",
      description: "Para cumprimento de obrigação legal ou regulatória pelo controlador.",
      example: "Manutenção de registros fiscais, atendimento a solicitações judiciais.",
    },
    {
      title: "Políticas Públicas",
      description: "Para execução de políticas públicas previstas em leis ou regulamentos.",
      example: "Programas governamentais, políticas de saúde pública.",
    },
    {
      title: "Estudos por Órgão de Pesquisa",
      description: "Para realização de estudos por órgão de pesquisa, garantida a anonimização quando possível.",
      example: "Pesquisas acadêmicas, estudos estatísticos.",
    },
    {
      title: "Execução de Contrato de Seguro",
      description: "Para execução de contrato de seguro ou previdência.",
      example: "Processamento de sinistros, análise de risco.",
    },
    {
      title: "Proteção da Vida",
      description: "Para proteção da vida ou da incolumidade física do titular ou de terceiro.",
      example: "Emergências médicas, situações de risco.",
    },
    {
      title: "Tutela da Saúde",
      description: "Para procedimentos realizados por profissionais de saúde, serviços de saúde ou autoridade sanitária.",
      example: "Prontuários médicos, registros de consultas.",
    },
    {
      title: "Legítimo Interesse",
      description: "Para atender aos interesses legítimos do controlador ou de terceiro, respeitados os direitos fundamentais.",
      example: "Prevenção de fraudes, segurança da informação, melhorias de serviços.",
    },
    {
      title: "Proteção do Crédito",
      description: "Para proteção do crédito, incluindo o disposto na legislação pertinente.",
      example: "Análise de crédito, consultas a bureaus de crédito.",
    },
  ];

  const complianceMeasures = [
    {
      icon: Shield,
      title: "Encarregado de Proteção de Dados (DPO)",
      description: "Designamos um DPO responsável por receber comunicações dos titulares e da ANPD, orientar funcionários e garantir conformidade.",
    },
    {
      icon: Lock,
      title: "Mapeamento de Dados",
      description: "Realizamos mapeamento completo dos dados pessoais tratados, suas finalidades e bases legais.",
    },
    {
      icon: Users,
      title: "Políticas e Procedimentos",
      description: "Desenvolvemos políticas claras de privacidade e procedimentos internos para tratamento de dados.",
    },
    {
      icon: CheckCircle2,
      title: "Medidas de Segurança",
      description: "Implementamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais.",
    },
    {
      icon: FileText,
      title: "Registro de Atividades",
      description: "Mantemos registros das atividades de tratamento de dados pessoais conforme exigido pela LGPD.",
    },
    {
      icon: AlertTriangle,
      title: "Gestão de Incidentes",
      description: "Possuímos procedimentos para identificação, tratamento e comunicação de incidentes de segurança.",
    },
    {
      icon: BookOpen,
      title: "Treinamento e Capacitação",
      description: "Capacitamos continuamente nossa equipe sobre proteção de dados e conformidade com a LGPD.",
    },
    {
      icon: Scale,
      title: "Avaliação de Impacto",
      description: "Realizamos avaliações de impacto à proteção de dados (AIPD) quando necessário.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-midnight-600/20 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <div className="relative z-10 container-wide pt-32 pb-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
            >
              <Scale className="w-4 h-4 text-brand-400" />
              <span className="text-sm font-medium text-white/80">Conformidade Legal</span>
            </motion.div>

            <h1 className="heading-lg text-white mb-4">
              Lei Geral de Proteção de <span className="gradient-text">Dados</span>
            </h1>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Entenda a LGPD e como o SegurePix garante total conformidade com a proteção de dados pessoais
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="card p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">O que é a LGPD?</h2>
                  <div className="space-y-4 text-white/70 leading-relaxed">
                    <p>
                      A <strong className="text-white">Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong> é a legislação brasileira que estabelece regras sobre coleta, armazenamento, tratamento e compartilhamento de dados pessoais, impondo mais proteção e penalidades para o descumprimento.
                    </p>
                    <p>
                      A LGPD entrou em vigor em setembro de 2020 e se aplica a todas as empresas e organizações que tratam dados pessoais no Brasil, independentemente do tamanho ou setor de atuação.
                    </p>
                    <p>
                      O objetivo da lei é proteger os direitos fundamentais de liberdade e privacidade, garantindo que os dados pessoais sejam tratados de forma transparente, segura e com finalidades específicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Principles Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Princípios da LGPD</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                A LGPD estabelece 10 princípios fundamentais que devem guiar todo tratamento de dados pessoais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  >
                    <div className="card p-6 h-full">
                      <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 border border-brand-500/20">
                        <Icon className="w-6 h-6 text-brand-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Rights Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Direitos dos Titulares</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                A LGPD garante 8 direitos fundamentais aos titulares de dados pessoais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rights.map((right, index) => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                >
                  <div className="card p-6 border-l-4 border-brand-500">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {right.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {right.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Legal Bases Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Bases Legais para Tratamento</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                A LGPD estabelece 10 hipóteses legais que autorizam o tratamento de dados pessoais
              </p>
            </div>

            <div className="space-y-4">
              {legalBases.map((base, index) => (
                <motion.div
                  key={base.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.05 }}
                >
                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-500/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-brand-500/20">
                        <CheckCircle2 className="w-5 h-5 text-brand-400" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {base.title}
                        </h3>
                        <p className="text-white/70 mb-2">
                          {base.description}
                        </p>
                        <p className="text-sm text-brand-400">
                          <strong>Exemplo:</strong> {base.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Compliance Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Conformidade do SegurePix</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Medidas que implementamos para garantir total conformidade com a LGPD
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceMeasures.map((measure, index) => {
                const Icon = measure.icon;
                return (
                  <motion.div
                    key={measure.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.05 }}
                  >
                    <div className="card p-6 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {measure.title}
                          </h3>
                          <p className="text-white/60 leading-relaxed">
                            {measure.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ANPD Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="mb-16"
          >
            <div className="card p-8 bg-gradient-to-br from-brand-500/10 to-midnight-800/50 border border-brand-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Autoridade Nacional de Proteção de Dados (ANPD)
                  </h2>
                  <div className="space-y-4 text-white/70 leading-relaxed">
                    <p>
                      A <strong className="text-white">ANPD</strong> é o órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento da LGPD em todo o território nacional.
                    </p>
                    <p>
                      A ANPD tem competência para aplicar sanções administrativas em caso de descumprimento da LGPD, que podem incluir advertências, multas simples de até 2% do faturamento (limitadas a R$ 50 milhões por infração) e multas diárias.
                    </p>
                    <p>
                      Você pode apresentar reclamações diretamente à ANPD através do site{" "}
                      <a
                        href="https://www.gov.br/anpd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-400 hover:text-brand-300 underline"
                      >
                        www.gov.br/anpd
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="text-center"
          >
            <div className="card p-8 bg-gradient-to-br from-brand-500/10 to-midnight-800/50 border border-brand-500/20">
              <Shield className="w-12 h-12 text-brand-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Dúvidas sobre LGPD?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Nossa equipe está pronta para esclarecer qualquer questão sobre conformidade com a LGPD e proteção de dados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:dpo@segurepix.com.br"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Falar com DPO
                </a>
                <Link
                  href="/politica-de-privacidade"
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  Ver Política de Privacidade
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

