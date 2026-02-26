"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components";
import { FileText, Shield, AlertCircle, Scale } from "lucide-react";
import Link from "next/link";

export default function TermosDeUsoPage() {
  const sections = [
    {
      id: "1",
      title: "1. Aceitação dos Termos",
      content: (
        <div className="space-y-4">
          <p>
            Ao acessar e utilizar o site e os formulários de validação do SegurePix, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concorda com qualquer parte destes termos, não deve utilizar nossos canais.
          </p>
          <p>
            Estes termos constituem um acordo legal entre você e o SegurePix para esta etapa de validação. Recomendamos que você leia atentamente todo o documento antes de utilizar nossos canais.
          </p>
        </div>
      ),
    },
    {
      id: "2",
      title: "2. Definições",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>
              <strong className="text-white">SegurePix:</strong> Site e iniciativa em validação para estudar uma solução de privacidade no recebimento via Pix para profissionais de saúde.
            </li>
            <li>
              <strong className="text-white">Usuário:</strong> Qualquer pessoa física ou jurídica que utiliza os serviços do SegurePix.
            </li>
            <li>
              <strong className="text-white">Serviços:</strong> Nesta etapa, incluem conteúdos, formulários de interesse, entrevistas e canais de contato do SegurePix.
            </li>
            <li>
              <strong className="text-white">Chave Pix:</strong> Identificador utilizado para recebimento de pagamentos via Pix, que pode ser aleatória ou personalizada.
            </li>
            <li>
              <strong className="text-white">Dados Pessoais:</strong> Qualquer informação relacionada a pessoa natural identificada ou identificável, conforme definido pela LGPD.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "3",
      title: "3. Elegibilidade e Cadastro",
      content: (
        <div className="space-y-4">
          <p>
            Para utilizar os canais do SegurePix nesta fase de validação, você deve:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Ser maior de 18 anos ou ter capacidade legal para contratar;</li>
            <li>Ser profissional de saúde ou pessoa jurídica do setor de saúde;</li>
            <li>Fornecer informações verdadeiras, precisas e atualizadas durante o cadastro;</li>
            <li>Manter a segurança de suas credenciais de acesso;</li>
            <li>Notificar imediatamente o SegurePix sobre qualquer uso não autorizado de seus dados de contato ou canais vinculados à validação.</li>
          </ul>
          <p>
            O SegurePix reserva-se o direito de restringir acesso a formulários, entrevistas ou canais que violem estes termos ou sejam utilizados de forma fraudulenta ou ilegal.
          </p>
        </div>
      ),
    },
    {
      id: "4",
      title: "4. Descrição dos Serviços (Fase de Validação)",
      content: (
        <div className="space-y-4">
          <p>
            Nesta fase, o SegurePix disponibiliza um site de validação que pode permitir:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Cadastro em lista de espera e formulários de interesse;</li>
            <li>Entrevistas de descoberta com profissionais de saúde;</li>
            <li>Conteúdo educativo sobre privacidade, Pix e LGPD;</li>
            <li>Comunicações sobre validação, pilotos e futuras funcionalidades (quando aplicável).</li>
          </ul>
          <p>
            Não há, nesta etapa, produto transacional em produção, intermediação de pagamentos ou integração operacional ativa com o sistema Pix.
          </p>
        </div>
      ),
    },
    {
      id: "5",
      title: "5. Privacidade e Proteção de Dados",
      content: (
        <div className="space-y-4">
          <p>
            O SegurePix está comprometido com a proteção da privacidade e dos dados pessoais de seus usuários e pacientes. Nossas práticas de privacidade estão detalhadas em nossa{" "}
            <Link href="/politica-de-privacidade" className="text-brand-400 hover:text-brand-300 underline">
              Política de Privacidade
            </Link>
            .
          </p>
          <p>
            Ao utilizar nossos canais nesta fase, você concorda que:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>O SegurePix processará seus dados pessoais conforme necessário para operar o site, formulários de interesse e contatos de validação;</li>
            <li>Você não deve inserir dados de pacientes em campos que não foram projetados para isso;</li>
            <li>O SegurePix adota medidas proporcionais à fase de validação para proteger dados pessoais;</li>
            <li>Você deve utilizar nossos canais de forma ética e legal.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "6",
      title: "6. Responsabilidades do Usuário",
      content: (
        <div className="space-y-4">
          <p>
            Você é responsável por:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Utilizar os serviços de forma legal e ética, em conformidade com os códigos de ética profissional aplicáveis;</li>
            <li>Manter a segurança e confidencialidade de eventuais credenciais de acesso, quando aplicável;</li>
            <li>Não utilizar os serviços para atividades ilegais, fraudulentas ou que violem direitos de terceiros;</li>
            <li>Fornecer informações precisas e atualizadas;</li>
            <li>Respeitar a privacidade e confidencialidade dos dados que compartilhar conosco;</li>
            <li>Notificar imediatamente o SegurePix sobre qualquer violação de segurança ou uso não autorizado.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "7",
      title: "7. Limitação de Responsabilidade",
      content: (
        <div className="space-y-4">
          <p>
            O SegurePix não se responsabiliza por:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Interrupções, falhas ou indisponibilidades temporárias dos serviços devido a manutenção, atualizações ou causas fora de nosso controle;</li>
            <li>Perdas ou danos decorrentes do uso inadequado dos serviços pelo usuário;</li>
            <li>Problemas relacionados ao sistema Pix do Banco Central ou instituições financeiras;</li>
            <li>Decisões tomadas pelo usuário com base em informações fornecidas pelo site, conteúdos ou materiais de validação;</li>
            <li>Danos indiretos, lucros cessantes ou perda de dados, exceto quando decorrentes de dolo ou culpa grave do SegurePix.</li>
          </ul>
          <p>
            O SegurePix se esforça para manter o site e os formulários disponíveis, mas não garante disponibilidade ininterrupta ou livre de erros.
          </p>
        </div>
      ),
    },
    {
      id: "8",
      title: "8. Propriedade Intelectual",
      content: (
        <div className="space-y-4">
          <p>
            Todo o conteúdo da plataforma SegurePix, incluindo mas não limitado a textos, gráficos, logos, ícones, imagens, código-fonte e software, é propriedade do SegurePix ou de seus licenciadores e está protegido por leis de propriedade intelectual.
          </p>
          <p>
            Você recebe uma licença limitada, não exclusiva e não transferível para utilizar os serviços conforme estes termos. Você não pode:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Copiar, modificar ou criar obras derivadas do conteúdo da plataforma;</li>
            <li>Reproduzir, distribuir ou transmitir qualquer parte dos serviços sem autorização prévia;</li>
            <li>Utilizar robôs, scripts ou outros meios automatizados para acessar os serviços;</li>
            <li>Remover ou alterar avisos de direitos autorais ou propriedade.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "9",
      title: "9. Taxas e Pagamentos (Quando Aplicável)",
      content: (
        <div className="space-y-4">
          <p>
            Nesta fase de validação, não há cobrança pelo uso do site e dos formulários de interesse. Caso o SegurePix evolua para um piloto pago ou produto comercial, condições e taxas serão apresentadas em documento próprio antes de qualquer contratação.
          </p>
          <p>
            Se houver piloto pago no futuro, termos comerciais específicos prevalecerão sobre esta seção para assuntos de cobrança, faturamento e inadimplência.
          </p>
        </div>
      ),
    },
    {
      id: "10",
      title: "10. Modificações dos Serviços e Termos",
      content: (
        <div className="space-y-4">
          <p>
            O SegurePix reserva-se o direito de modificar, suspender ou descontinuar conteúdos, formulários, entrevistas e outros elementos da validação a qualquer momento.
          </p>
          <p>
            Estes Termos de Uso podem ser atualizados periodicamente. Alterações significativas serão comunicadas aos usuários através dos canais de comunicação do site ou por e-mail.
          </p>
          <p>
            O uso continuado dos canais após a publicação de alterações constitui aceitação dos novos termos. Se você não concordar com as alterações, deve deixar de utilizar nossos canais.
          </p>
        </div>
      ),
    },
    {
      id: "11",
      title: "11. Encerramento de Acesso e Participação",
      content: (
        <div className="space-y-4">
          <p>
            Você pode solicitar a interrupção de contatos e participação na validação a qualquer momento entrando em contato com nosso suporte.
          </p>
          <p>
            O SegurePix pode suspender ou encerrar seu acesso a formulários, entrevistas e canais imediatamente, sem aviso prévio, se:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Você violar estes Termos de Uso;</li>
            <li>Você utilizar os serviços de forma fraudulenta ou ilegal;</li>
            <li>Houver solicitação de autoridades competentes;</li>
            <li>Houver risco de uso abusivo, fraudulento ou incompatível com a finalidade da validação.</li>
          </ul>
          <p>
            Após o encerramento, você poderá perder acesso a canais e comunicações da validação, sem prejuízo da retenção de dados quando exigida por lei.
          </p>
        </div>
      ),
    },
    {
      id: "12",
      title: "12. Conformidade Legal",
      content: (
        <div className="space-y-4">
          <p>
            O SegurePix busca alinhar sua validação e futura operação aos seguintes marcos legais, quando aplicáveis:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018);</li>
            <li>Regulamentações do Banco Central do Brasil sobre o sistema Pix (se e quando houver produto/arranjo operacional aplicável);</li>
            <li>Código de Defesa do Consumidor;</li>
            <li>Marco Civil da Internet;</li>
            <li>Demais legislações aplicáveis.</li>
          </ul>
          <p>
            Você é responsável por garantir que seu uso dos serviços esteja em conformidade com todas as leis e regulamentações aplicáveis ao seu setor de atuação, incluindo códigos de ética profissional.
          </p>
        </div>
      ),
    },
    {
      id: "13",
      title: "13. Lei Aplicável e Foro",
      content: (
        <div className="space-y-4">
          <p>
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
          </p>
          <p>
            Qualquer disputa relacionada a estes termos ou aos serviços será resolvida preferencialmente por meio de negociação direta. Na impossibilidade de acordo, as partes se submetem ao foro da Comarca de São Paulo, Estado de São Paulo, renunciando a qualquer outro, por mais privilegiado que seja.
          </p>
        </div>
      ),
    },
    {
      id: "14",
      title: "14. Disposições Gerais",
      content: (
        <div className="space-y-4">
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>
              <strong className="text-white">Integralidade:</strong> Estes termos constituem o acordo completo entre você e o SegurePix sobre o uso dos serviços.
            </li>
            <li>
              <strong className="text-white">Renúncia:</strong> A falha do SegurePix em exercer qualquer direito não constitui renúncia a tal direito.
            </li>
            <li>
              <strong className="text-white">Divisibilidade:</strong> Se qualquer disposição destes termos for considerada inválida, as demais disposições permanecerão em pleno vigor.
            </li>
            <li>
              <strong className="text-white">Cessão:</strong> Você não pode ceder ou transferir seus direitos ou obrigações sem consentimento prévio do SegurePix.
            </li>
            <li>
              <strong className="text-white">Comunicação:</strong> As comunicações oficiais poderão ser enviadas para o e-mail informado por você em formulários do site.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "15",
      title: "15. Contato",
      content: (
        <div className="space-y-4">
          <p>
            Para questões relacionadas a estes Termos de Uso, entre em contato conosco:
          </p>
          <ul className="list-none space-y-2 text-white/70">
            <li>
              <strong className="text-white">E-mail:</strong>{" "}
              <a href="mailto:contato@segurepix.com.br" className="text-brand-400 hover:text-brand-300 underline">
                contato@segurepix.com.br
              </a>
            </li>
            <li>
              <strong className="text-white">Telefone:</strong>{" "}
              <a href="tel:+5511995597242" className="text-brand-400 hover:text-brand-300 underline">
                (11) 99559-7242
              </a>
            </li>
            <li>
              <strong className="text-white">Endereço:</strong> São Paulo, Brasil
            </li>
          </ul>
        </div>
      ),
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
              <FileText className="w-4 h-4 text-brand-400" />
              <span className="text-sm font-medium text-white/80">Documento Legal · Fase de validação</span>
            </motion.div>

            <h1 className="heading-lg text-white mb-4">
              Termos de <span className="gradient-text">Uso</span>
            </h1>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Última atualização: {new Date().toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="card p-6 border-l-4 border-brand-500 bg-brand-500/5">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Importante
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Estes Termos de Uso estabelecem as condições de utilização do site e dos canais de validação do SegurePix.
                    Não descrevem um produto transacional em operação. Recomendamos que você leia atentamente todo o documento.
                    Ao utilizar nossos canais, você concorda em estar vinculado a estes termos. Em caso de dúvidas, entre em contato
                    conosco através dos canais indicados.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terms Content */}
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={`section-${section.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="mb-12"
              >
                <div className="card p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Scale className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <div className="prose prose-invert max-w-none text-white/70 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="card p-8 bg-gradient-to-br from-brand-500/10 to-midnight-800/50 border border-brand-500/20">
              <Shield className="w-12 h-12 text-brand-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Dúvidas sobre os Termos?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Nossa equipe está pronta para esclarecer qualquer questão sobre estes termos de uso.
              </p>
              <a
                href="mailto:contato@segurepix.com.br"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Entrar em Contato
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
