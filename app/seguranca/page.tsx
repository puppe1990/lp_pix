"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components";
import {
  Shield,
  Lock,
  Key,
  Eye,
  AlertTriangle,
  CheckCircle2,
  Database,
  Server,
  Users,
  FileCheck,
  Zap,
  Globe,
  HardDrive,
  Activity,
} from "lucide-react";
import Link from "next/link";

export default function SegurancaPage() {
  const technicalMeasures = [
    {
      icon: Lock,
      title: "Criptografia de Dados",
      description:
        "Todos os dados sensíveis são criptografados tanto em trânsito (TLS 1.3) quanto em repouso (AES-256). Suas informações estão protegidas mesmo em caso de interceptação.",
      details: [
        "Criptografia TLS 1.3 para todas as comunicações",
        "Criptografia AES-256 para dados armazenados",
        "Chaves de criptografia gerenciadas de forma segura",
        "Certificados SSL/TLS atualizados regularmente",
      ],
    },
    {
      icon: Key,
      title: "Autenticação e Autorização",
      description:
        "Sistema robusto de autenticação multi-fator (MFA) e controle de acesso baseado em funções (RBAC) para garantir que apenas pessoas autorizadas acessem os dados.",
      details: [
        "Autenticação de dois fatores (2FA) obrigatória",
        "Senhas criptografadas com hash bcrypt",
        "Controle de acesso baseado em funções",
        "Sessões com timeout automático",
        "Proteção contra ataques de força bruta",
      ],
    },
    {
      icon: Server,
      title: "Infraestrutura Segura",
      description:
        "Nossa infraestrutura utiliza os mais altos padrões de segurança, com servidores em data centers certificados e monitoramento 24/7.",
      details: [
        "Hospedagem em data centers certificados (ISO 27001)",
        "Firewalls de última geração",
        "Proteção DDoS (Distributed Denial of Service)",
        "Redundância e alta disponibilidade",
        "Backup automático e redundante",
      ],
    },
    {
      icon: Database,
      title: "Segurança de Banco de Dados",
      description:
        "Bancos de dados protegidos com múltiplas camadas de segurança, incluindo isolamento, criptografia e controle de acesso granular.",
      details: [
        "Isolamento de dados por cliente",
        "Criptografia de dados sensíveis",
        "Backup automático diário",
        "Controle de acesso granular",
        "Monitoramento de atividades suspeitas",
      ],
    },
    {
      icon: Activity,
      title: "Monitoramento e Detecção",
      description:
        "Sistemas avançados de monitoramento que detectam e respondem a ameaças em tempo real, incluindo análise comportamental e detecção de anomalias.",
      details: [
        "Monitoramento 24/7 de segurança",
        "Detecção de anomalias e comportamentos suspeitos",
        "Alertas automáticos para equipe de segurança",
        "Logs detalhados de todas as atividades",
        "Análise de segurança contínua",
      ],
    },
    {
      icon: Zap,
      title: "Atualizações e Patches",
      description:
        "Manutenção proativa de segurança com atualizações regulares de software, aplicação de patches de segurança e gestão de vulnerabilidades.",
      details: [
        "Atualizações automáticas de segurança",
        "Gestão proativa de vulnerabilidades",
        "Testes de penetração regulares",
        "Revisão de código de segurança",
        "Auditorias de segurança periódicas",
      ],
    },
  ];

  const organizationalMeasures = [
    {
      icon: Users,
      title: "Treinamento e Capacitação",
      description:
        "Nossa equipe recebe treinamento contínuo sobre segurança da informação, proteção de dados e melhores práticas de privacidade.",
    },
    {
      icon: FileCheck,
      title: "Políticas e Procedimentos",
      description:
        "Políticas de segurança bem definidas e procedimentos documentados garantem que todas as operações sigam os mais altos padrões de segurança.",
    },
    {
      icon: Shield,
      title: "Controle de Acesso Físico",
      description:
        "Acesso físico restrito apenas a pessoal autorizado, com controles de entrada, monitoramento por câmeras e registro de acessos.",
    },
    {
      icon: CheckCircle2,
      title: "Gestão de Incidentes",
      description:
        "Plano de resposta a incidentes bem definido, com equipe dedicada e procedimentos claros para identificação, contenção e resolução de problemas de segurança.",
    },
  ];

  const complianceStandards = [
    {
      title: "LGPD",
      description: "Total conformidade com a Lei Geral de Proteção de Dados",
      status: "Conforme",
    },
    {
      title: "ISO 27001",
      description: "Seguindo padrões internacionais de gestão de segurança da informação",
      status: "Em Implementação",
    },
    {
      title: "PCI DSS",
      description: "Padrões de segurança para processamento de pagamentos",
      status: "Conforme",
    },
    {
      title: "Banco Central",
      description: "Conformidade com regulamentações do Banco Central para Pix",
      status: "Conforme",
    },
  ];

  const userBestPractices = [
    {
      icon: Key,
      title: "Use Senhas Fortes",
      description:
        "Crie senhas únicas e complexas, com pelo menos 12 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos.",
    },
    {
      icon: Shield,
      title: "Ative a Autenticação de Dois Fatores",
      description:
        "Sempre ative o 2FA para adicionar uma camada extra de segurança à sua conta.",
    },
    {
      icon: AlertTriangle,
      title: "Cuidado com Phishing",
      description:
        "Nunca compartilhe suas credenciais. O SegurePix nunca solicitará sua senha por e-mail ou telefone.",
    },
    {
      icon: Lock,
      title: "Mantenha Seus Dispositivos Seguros",
      description:
        "Use antivírus atualizado, mantenha o sistema operacional atualizado e evite acessar sua conta em dispositivos públicos.",
    },
    {
      icon: Eye,
      title: "Monitore Sua Conta",
      description:
        "Revise regularmente as atividades da sua conta e notifique-nos imediatamente sobre qualquer atividade suspeita.",
    },
    {
      icon: Users,
      title: "Compartilhe com Cuidado",
      description:
        "Não compartilhe suas credenciais com terceiros. Cada usuário deve ter sua própria conta.",
    },
  ];

  const incidentResponse = [
    {
      step: "1",
      title: "Detecção",
      description:
        "Sistemas automatizados e equipe de segurança monitoram continuamente para detectar possíveis incidentes.",
    },
    {
      step: "2",
      title: "Análise",
      description:
        "Equipe especializada analisa o incidente para determinar sua natureza, escopo e impacto potencial.",
    },
    {
      step: "3",
      title: "Contenção",
      description:
        "Medidas imediatas são tomadas para conter o incidente e prevenir danos adicionais.",
    },
    {
      step: "4",
      title: "Eradicação",
      description:
        "A causa raiz do incidente é identificada e removida do sistema.",
    },
    {
      step: "5",
      title: "Recuperação",
      description:
        "Sistemas são restaurados e operações normais são retomadas com segurança.",
    },
    {
      step: "6",
      title: "Lições Aprendidas",
      description:
        "Análise pós-incidente para melhorar processos e prevenir ocorrências futuras.",
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
              <Shield className="w-4 h-4 text-brand-400" />
              <span className="text-sm font-medium text-white/80">Segurança da Informação</span>
            </motion.div>

            <h1 className="heading-lg text-white mb-4">
              Segurança em <span className="gradient-text">Primeiro Lugar</span>
            </h1>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Protegemos seus dados com as mais avançadas tecnologias e práticas de segurança da informação
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
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Nossa Abordagem à Segurança
                  </h2>
                  <div className="space-y-4 text-white/70 leading-relaxed">
                    <p>
                      A segurança é fundamental para o SegurePix. Implementamos uma abordagem de segurança em camadas, 
                      combinando medidas técnicas avançadas, processos organizacionais rigorosos e monitoramento contínuo 
                      para proteger seus dados pessoais e financeiros.
                    </p>
                    <p>
                      Nossa infraestrutura foi projetada desde o início com segurança como prioridade, seguindo os mais 
                      altos padrões da indústria e melhores práticas de segurança da informação.
                    </p>
                    <p>
                      Trabalhamos continuamente para identificar e mitigar riscos, mantendo nossos sistemas atualizados 
                      e protegidos contra as mais recentes ameaças de segurança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Technical Measures */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Medidas Técnicas de Segurança
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Tecnologias e sistemas avançados que protegem seus dados em todas as camadas
              </p>
            </div>

            <div className="space-y-6">
              {technicalMeasures.map((measure, index) => {
                const Icon = measure.icon;
                return (
                  <motion.div
                    key={measure.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="card p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {measure.title}
                          </h3>
                          <p className="text-white/70 mb-4 leading-relaxed">
                            {measure.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {measure.details.map((detail, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-sm text-white/60"
                              >
                                <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Organizational Measures */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Medidas Organizacionais
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Processos, políticas e pessoas trabalhando juntas para garantir segurança
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {organizationalMeasures.map((measure, index) => {
                const Icon = measure.icon;
                return (
                  <motion.div
                    key={measure.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    <div className="card p-6 h-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {measure.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {measure.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Compliance */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Conformidade e Certificações
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Seguimos os mais altos padrões de segurança e conformidade da indústria
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <div className="card p-6 border-l-4 border-brand-500">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {standard.title}
                      </h3>
                      <span className="px-3 py-1 bg-brand-500/20 text-brand-400 text-xs font-semibold rounded-full border border-brand-500/30">
                        {standard.status}
                      </span>
                    </div>
                    <p className="text-white/60">{standard.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Incident Response */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Resposta a Incidentes
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Processo estruturado para detectar, responder e recuperar de incidentes de segurança
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {incidentResponse.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                >
                  <div className="card p-6 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* User Best Practices */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Boas Práticas de Segurança
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Como você pode ajudar a manter sua conta e dados seguros
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userBestPractices.map((practice, index) => {
                const Icon = practice.icon;
                return (
                  <motion.div
                    key={practice.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.1 + index * 0.05 }}
                  >
                    <div className="card p-6 h-full">
                      <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 border border-brand-500/20">
                        <Icon className="w-6 h-6 text-brand-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {practice.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {practice.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Security Contact */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="mb-16"
          >
            <div className="card p-8 bg-gradient-to-br from-brand-500/10 to-midnight-800/50 border border-brand-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Reportar Problema de Segurança
                  </h2>
                  <div className="space-y-4 text-white/70 leading-relaxed">
                    <p>
                      Se você descobriu uma vulnerabilidade de segurança ou suspeita de atividade suspeita em sua conta, 
                      entre em contato conosco imediatamente.
                    </p>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mt-4">
                      <p className="text-white/80 mb-2">
                        <strong>E-mail de Segurança:</strong>
                      </p>
                      <a
                        href="mailto:seguranca@segurepix.com.br"
                        className="text-brand-400 hover:text-brand-300 underline text-lg"
                      >
                        seguranca@segurepix.com.br
                      </a>
                    </div>
                    <p className="text-sm text-white/60">
                      Responderemos a todas as comunicações relacionadas à segurança com a máxima prioridade.
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
            transition={{ duration: 0.6, delay: 2.6 }}
            className="text-center"
          >
            <div className="card p-8 bg-gradient-to-br from-brand-500/10 to-midnight-800/50 border border-brand-500/20">
              <Shield className="w-12 h-12 text-brand-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Dúvidas sobre Segurança?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Nossa equipe de segurança está disponível para esclarecer qualquer questão sobre nossas medidas de proteção.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:seguranca@segurepix.com.br"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Falar com Equipe de Segurança
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

