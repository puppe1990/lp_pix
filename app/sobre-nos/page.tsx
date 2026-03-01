"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components";
import { Shield, Target, Users, Heart, Award, Zap } from "lucide-react";

export default function SobreNosPage() {
  const values = [
    {
      icon: Shield,
      title: "Privacidade em Primeiro Lugar",
      description:
        "Acreditamos que seus dados pessoais devem permanecer privados. Estamos validando uma abordagem que reduza exposição de dados sem comprometer a praticidade.",
    },
    {
      icon: Target,
      title: "Foco no Profissional de Saúde",
      description:
        "Estamos estudando as necessidades específicas de psicólogos, dentistas e outros profissionais de saúde para definir um piloto com foco real no setor.",
    },
    {
      icon: Heart,
      title: "Conformidade e Ética",
      description:
        "Tratamos LGPD e códigos de ética profissional como requisitos de desenho da ideia, com linguagem e promessas compatíveis com o estágio de validação.",
    },
    {
      icon: Zap,
      title: "Inovação Contínua",
      description:
        "Estamos testando hipóteses e aprendizados com profissionais de saúde antes de decidir o formato do MVP/piloto.",
    },
  ];

  const team = [
    {
      name: "Equipe SegurePix",
      role: "Especialistas em Privacidade e Pagamentos",
      description:
        "Equipe em formação focada em privacidade, segurança de dados e desenho de fluxos de pagamento. Estamos combinando pesquisa com profissionais de saúde e validação de mensagem antes de construir produto.",
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
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
            >
              <Shield className="w-4 h-4 text-brand-400" />
              <span className="text-sm font-medium text-white/80">Sobre Nós · Ideia em validação</span>
            </motion.div>

            <h1 className="heading-lg text-white mb-6">
              Protegendo a{" "}
              <span className="gradient-text">Privacidade</span> dos
              <br />
              Profissionais de Saúde
            </h1>
            <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              O SegurePix nasceu como uma hipótese de produto para reduzir a exposição de
              dados no recebimento via Pix por profissionais de saúde. Nesta etapa, estamos
              validando a dor, a urgência e o formato de um possível piloto antes de
              construir uma solução em produção.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="card p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">Nossa Missão</h2>
                  <p className="text-white/70 leading-relaxed">
                    Validar uma forma prática de reduzir exposição de dados no recebimento
                    via Pix para profissionais de saúde, sem prometer funcionalidades que
                    ainda não existem. Acreditamos que tecnologia e privacidade podem e
                    devem caminhar juntas, mas o formato final do produto depende da
                    pesquisa em andamento.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Nossos Valores</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Os princípios que guiam tudo o que fazemos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="card p-6 h-full">
                      <div className="w-12 h-12 bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 border border-brand-500/20">
                        <Icon className="w-6 h-6 text-brand-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Why Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-20"
          >
            <div className="card p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Por Que Participar da Validação do SegurePix?
                  </h2>
                  <div className="space-y-4 text-white/70">
                    <p className="leading-relaxed">
                      Como profissionais de saúde, vocês lidam diariamente com
                      informações sensíveis e confidenciais. Sabemos que a privacidade
                      não é apenas uma preferência, mas uma obrigação ética e legal.
                    </p>
                    <p className="leading-relaxed">
                      O SegurePix está sendo desenhado a partir das necessidades do setor
                      de saúde. Nesta fase, coletamos sinais de dor, rotina e urgência
                      para entender se faz sentido evoluir para um piloto focado em
                      privacidade operacional no Pix.
                    </p>
                    <p className="leading-relaxed">
                      LGPD, códigos de ética e boas práticas de segurança são critérios de
                      avaliação desta validação. Evitamos claims de &quot;conformidade total&quot;
                      nesta etapa porque ainda não há produto em produção.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Nossa Equipe</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Profissionais dedicados a proteger sua privacidade
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-3xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="card p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-brand-400 mb-4">{member.role}</p>
                        <p className="text-white/60 leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <div className="card p-8 md:p-12 bg-gradient-to-br from-brand-500/10 to-midnight-800/50 border border-brand-500/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Quer participar da validação?
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Entre na lista de espera ou participe de uma entrevista curta para ajudar
                a definir se o SegurePix deve virar um piloto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/interesse?plano=geral&source=sobre_nos_cta&campaign=validacao_14d&content_slug=sobre-nos&intent=privacidade_pix"
                  className="btn-primary group"
                >
                  Entrar na Lista de Espera
                  <Zap className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="/interesse?plano=entrevista&source=sobre_nos_interview&campaign=validacao_14d&content_slug=sobre-nos&intent=entrevista"
                  className="btn-secondary"
                >
                  Participar de Entrevista
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}
