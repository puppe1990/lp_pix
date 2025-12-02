"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components";
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function PoliticaDePrivacidadePage() {
  const sections = [
    {
      id: "1",
      title: "1. Introdução",
      content: (
        <div className="space-y-4">
          <p>
            O SegurePix está comprometido com a proteção da privacidade e dos dados pessoais de nossos usuários e pacientes. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>
          <p>
            Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política. Recomendamos que você leia atentamente este documento para entender como tratamos seus dados pessoais.
          </p>
          <p>
            Esta política se aplica a todos os usuários da plataforma SegurePix, incluindo profissionais de saúde, pacientes e visitantes do site.
          </p>
        </div>
      ),
    },
    {
      id: "2",
      title: "2. Definições",
      content: (
        <div className="space-y-4">
          <p>Para os fins desta Política de Privacidade, utilizamos as seguintes definições:</p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>
              <strong className="text-white">Dados Pessoais:</strong> Qualquer informação relacionada a pessoa natural identificada ou identificável.
            </li>
            <li>
              <strong className="text-white">Dados Sensíveis:</strong> Dados pessoais sobre origem racial ou étnica, convicções religiosas, opiniões políticas, filiação a sindicato ou organização de caráter religioso, filosófico ou político, dados referentes à saúde ou à vida sexual, dados biométricos ou genéticos.
            </li>
            <li>
              <strong className="text-white">Titular:</strong> Pessoa natural a quem se referem os dados pessoais que são objeto de tratamento.
            </li>
            <li>
              <strong className="text-white">Controlador:</strong> SegurePix, pessoa natural ou jurídica responsável pelas decisões referentes ao tratamento de dados pessoais.
            </li>
            <li>
              <strong className="text-white">Operador:</strong> Pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador.
            </li>
            <li>
              <strong className="text-white">Tratamento:</strong> Toda operação realizada com dados pessoais, como coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.
            </li>
            <li>
              <strong className="text-white">LGPD:</strong> Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "3",
      title: "3. Dados que Coletamos",
      content: (
        <div className="space-y-4">
          <p>
            Coletamos diferentes tipos de dados pessoais, dependendo de como você interage com nossos serviços:
          </p>
          
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-white mb-2">3.1. Dados de Cadastro e Conta</h4>
              <ul className="list-disc list-inside space-y-1 text-white/70 ml-4">
                <li>Nome completo</li>
                <li>E-mail</li>
                <li>Telefone</li>
                <li>CPF ou CNPJ</li>
                <li>Profissão/Área de atuação</li>
                <li>Número de registro profissional (quando aplicável)</li>
                <li>Endereço</li>
                <li>Dados bancários para recebimento (quando necessário)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">3.2. Dados de Uso da Plataforma</h4>
              <ul className="list-disc list-inside space-y-1 text-white/70 ml-4">
                <li>Logs de acesso e atividade</li>
                <li>Informações sobre dispositivos utilizados</li>
                <li>Endereço IP</li>
                <li>Dados de navegação e cookies</li>
                <li>Preferências e configurações</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">3.3. Dados de Transações</h4>
              <ul className="list-disc list-inside space-y-1 text-white/70 ml-4">
                <li>Histórico de pagamentos recebidos</li>
                <li>Valores e datas de transações</li>
                <li>Chaves Pix utilizadas</li>
                <li>Informações sobre pagadores (quando necessário para emissão de recibos)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">3.4. Dados de Pacientes (quando fornecidos pelo profissional)</h4>
              <ul className="list-disc list-inside space-y-1 text-white/70 ml-4">
                <li>Nome do paciente (para emissão de recibos)</li>
                <li>CPF do paciente (quando necessário)</li>
                <li>Informações sobre consultas e serviços prestados</li>
                <li>Valores cobrados</li>
              </ul>
              <p className="text-white/60 text-sm mt-2 ml-4">
                <strong>Importante:</strong> O profissional de saúde é responsável por obter o consentimento adequado dos pacientes antes de inserir seus dados na plataforma.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "4",
      title: "4. Como Coletamos Seus Dados",
      content: (
        <div className="space-y-4">
          <p>Coletamos dados pessoais através das seguintes formas:</p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>
              <strong className="text-white">Fornecimento Direto:</strong> Quando você se cadastra, preenche formulários ou utiliza nossos serviços.
            </li>
            <li>
              <strong className="text-white">Uso da Plataforma:</strong> Dados coletados automaticamente durante o uso de nossos serviços.
            </li>
            <li>
              <strong className="text-white">Cookies e Tecnologias Similares:</strong> Utilizamos cookies e tecnologias similares para melhorar sua experiência e coletar informações sobre como você utiliza nosso site.
            </li>
            <li>
              <strong className="text-white">Integrações:</strong> Quando você conecta sua conta a serviços de terceiros (com sua autorização).
            </li>
            <li>
              <strong className="text-white">Comunicações:</strong> Informações fornecidas quando você entra em contato conosco por e-mail, telefone ou outros canais.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "5",
      title: "5. Finalidades do Tratamento",
      content: (
        <div className="space-y-4">
          <p>Utilizamos seus dados pessoais para as seguintes finalidades:</p>
          
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-white mb-2">5.1. Prestação de Serviços</h4>
              <ul className="list-disc list-inside space-y-1 text-white/70 ml-4">
                <li>Gerenciar sua conta e acesso à plataforma</li>
                <li>Processar pagamentos e transações</li>
                <li>Gerar chaves Pix aleatórias</li>
                <li>Emitir recibos digitais</li>
                <li>Fornecer suporte técnico</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">5.2. Conformidade Legal e Regulatória</h4>
              <ul className="list-disc list-inside space-y-1 text-white/70 ml-4">
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Atender solicitações de autoridades competentes</li>
                <li>Manter registros conforme exigido por lei</li>
                <li>Garantir conformidade com LGPD</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">5.3. Melhoria dos Serviços</h4>
              <ul className="list-disc list-inside space-y-1 text-white/70 ml-4">
                <li>Analisar uso da plataforma para melhorias</li>
                <li>Desenvolver novos recursos e funcionalidades</li>
                <li>Realizar pesquisas e análises estatísticas</li>
                <li>Prevenir fraudes e garantir segurança</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">5.4. Comunicação</h4>
              <ul className="list-disc list-inside space-y-1 text-white/70 ml-4">
                <li>Enviar notificações sobre sua conta e transações</li>
                <li>Responder a suas solicitações e dúvidas</li>
                <li>Enviar informações sobre atualizações e novos recursos (com seu consentimento)</li>
                <li>Enviar comunicações de marketing (apenas com consentimento explícito)</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "6",
      title: "6. Base Legal para o Tratamento",
      content: (
        <div className="space-y-4">
          <p>
            O tratamento de dados pessoais pelo SegurePix é realizado com base nas seguintes hipóteses legais previstas na LGPD:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>
              <strong className="text-white">Consentimento:</strong> Quando você fornece consentimento livre, informado e inequívoco para o tratamento de seus dados para finalidades específicas.
            </li>
            <li>
              <strong className="text-white">Execução de Contrato:</strong> Para cumprimento de obrigações contratuais e prestação dos serviços solicitados.
            </li>
            <li>
              <strong className="text-white">Cumprimento de Obrigação Legal:</strong> Para atender a obrigações legais e regulatórias aplicáveis.
            </li>
            <li>
              <strong className="text-white">Legítimo Interesse:</strong> Para fins legítimos do SegurePix ou de terceiros, como prevenção de fraudes, segurança e melhoria dos serviços.
            </li>
            <li>
              <strong className="text-white">Proteção da Vida:</strong> Para proteção da vida ou da incolumidade física do titular ou de terceiro.
            </li>
            <li>
              <strong className="text-white">Tutela da Saúde:</strong> Para procedimentos realizados por profissionais de saúde, serviços de saúde ou autoridade sanitária.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "7",
      title: "7. Compartilhamento de Dados",
      content: (
        <div className="space-y-4">
          <p>
            O SegurePix não vende seus dados pessoais. Compartilhamos informações apenas nas seguintes situações:
          </p>
          
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold text-white mb-2">7.1. Prestadores de Serviços</h4>
              <p className="text-white/70 ml-4">
                Podemos compartilhar dados com prestadores de serviços que nos auxiliam na operação da plataforma (hospedagem, processamento de pagamentos, análise de dados), sempre sob rigorosos acordos de confidencialidade e segurança.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">7.2. Obrigações Legais</h4>
              <p className="text-white/70 ml-4">
                Quando exigido por lei, ordem judicial ou solicitação de autoridades competentes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">7.3. Instituições Financeiras</h4>
              <p className="text-white/70 ml-4">
                Informações necessárias para processamento de pagamentos via Pix, conforme regulamentação do Banco Central.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">7.4. Com Seu Consentimento</h4>
              <p className="text-white/70 ml-4">
                Quando você autorizar explicitamente o compartilhamento para finalidades específicas.
              </p>
            </div>
          </div>

          <div className="bg-brand-500/10 border border-brand-500/20 rounded-lg p-4 mt-4">
            <p className="text-white/80 text-sm">
              <strong>Compromisso:</strong> Todos os parceiros e prestadores de serviços são obrigados a manter a confidencialidade e segurança dos dados compartilhados, em conformidade com a LGPD.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "8",
      title: "8. Segurança dos Dados",
      content: (
        <div className="space-y-4">
          <p>
            Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>
              <strong className="text-white">Criptografia:</strong> Dados sensíveis são criptografados em trânsito e em repouso.
            </li>
            <li>
              <strong className="text-white">Controles de Acesso:</strong> Acesso restrito apenas a pessoal autorizado e com necessidade de conhecimento.
            </li>
            <li>
              <strong className="text-white">Monitoramento:</strong> Sistemas de monitoramento e detecção de atividades suspeitas.
            </li>
            <li>
              <strong className="text-white">Backup e Recuperação:</strong> Procedimentos regulares de backup e planos de recuperação de desastres.
            </li>
            <li>
              <strong className="text-white">Atualizações de Segurança:</strong> Manutenção regular de sistemas e aplicação de patches de segurança.
            </li>
            <li>
              <strong className="text-white">Treinamento:</strong> Capacitação contínua de nossa equipe sobre proteção de dados e segurança da informação.
            </li>
          </ul>
          <p>
            Embora adotemos medidas de segurança robustas, nenhum sistema é 100% seguro. Recomendamos que você também tome precauções, como usar senhas fortes e não compartilhar suas credenciais de acesso.
          </p>
        </div>
      ),
    },
    {
      id: "9",
      title: "9. Retenção de Dados",
      content: (
        <div className="space-y-4">
          <p>
            Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, exceto quando a retenção for exigida ou permitida por lei.
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>
              <strong className="text-white">Dados de Conta:</strong> Mantidos enquanto sua conta estiver ativa e por período adicional conforme exigências legais.
            </li>
            <li>
              <strong className="text-white">Dados de Transações:</strong> Retidos conforme exigências legais e regulatórias (geralmente 5 anos).
            </li>
            <li>
              <strong className="text-white">Dados de Pacientes:</strong> Retidos conforme exigências legais do setor de saúde e códigos de ética profissional.
            </li>
            <li>
              <strong className="text-white">Dados de Marketing:</strong> Mantidos até você revogar seu consentimento ou solicitar exclusão.
            </li>
          </ul>
          <p>
            Após o período de retenção, os dados serão eliminados de forma segura ou anonimizados, exceto quando a retenção for exigida por lei.
          </p>
        </div>
      ),
    },
    {
      id: "10",
      title: "10. Seus Direitos (LGPD)",
      content: (
        <div className="space-y-4">
          <p>
            Conforme a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
          </p>
          
          <div className="space-y-3 mt-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">1. Confirmação e Acesso</h4>
              <p className="text-white/70 text-sm">
                Direito de obter confirmação sobre o tratamento de seus dados e acesso aos dados tratados.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">2. Correção</h4>
              <p className="text-white/70 text-sm">
                Direito de solicitar correção de dados incompletos, inexatos ou desatualizados.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">3. Anonimização, Bloqueio ou Eliminação</h4>
              <p className="text-white/70 text-sm">
                Direito de solicitar anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">4. Portabilidade</h4>
              <p className="text-white/70 text-sm">
                Direito de solicitar a portabilidade de seus dados para outro prestador de serviços.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">5. Eliminação</h4>
              <p className="text-white/70 text-sm">
                Direito de solicitar a eliminação dos dados pessoais tratados com base em consentimento.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">6. Informação sobre Compartilhamento</h4>
              <p className="text-white/70 text-sm">
                Direito de obter informações sobre entidades públicas e privadas com as quais compartilhamos dados.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">7. Informação sobre Possibilidade de Não Consentir</h4>
              <p className="text-white/70 text-sm">
                Direito de ser informado sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <h4 className="font-semibold text-white mb-2">8. Revogação de Consentimento</h4>
              <p className="text-white/70 text-sm">
                Direito de revogar seu consentimento a qualquer momento.
              </p>
            </div>
          </div>

          <div className="bg-brand-500/10 border border-brand-500/20 rounded-lg p-4 mt-4">
            <p className="text-white/80 text-sm">
              <strong>Como Exercer Seus Direitos:</strong> Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail{" "}
              <a href="mailto:privacidade@segurepix.com.br" className="text-brand-400 hover:text-brand-300 underline">
                privacidade@segurepix.com.br
              </a>{" "}
              ou através dos canais de contato indicados nesta política. Responderemos sua solicitação no prazo de 15 (quinze) dias, conforme previsto na LGPD.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "11",
      title: "11. Cookies e Tecnologias Similares",
      content: (
        <div className="space-y-4">
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso da plataforma e personalizar conteúdo. Os tipos de cookies que utilizamos incluem:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>
              <strong className="text-white">Cookies Essenciais:</strong> Necessários para o funcionamento básico da plataforma.
            </li>
            <li>
              <strong className="text-white">Cookies de Desempenho:</strong> Coletam informações sobre como você utiliza nosso site para melhorias.
            </li>
            <li>
              <strong className="text-white">Cookies de Funcionalidade:</strong> Permitem que o site lembre suas preferências.
            </li>
            <li>
              <strong className="text-white">Cookies de Marketing:</strong> Utilizados para personalizar anúncios (apenas com seu consentimento).
            </li>
          </ul>
          <p>
            Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. Note que desabilitar certos cookies pode afetar a funcionalidade da plataforma.
          </p>
        </div>
      ),
    },
    {
      id: "12",
      title: "12. Transferência Internacional de Dados",
      content: (
        <div className="space-y-4">
          <p>
            Seus dados pessoais são armazenados e processados principalmente no Brasil. Caso seja necessário transferir dados para outros países, garantiremos que:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>A transferência seja realizada em conformidade com a LGPD;</li>
            <li>O país de destino ofereça nível adequado de proteção de dados;</li>
            <li>Cláusulas contratuais adequadas sejam implementadas para proteger seus dados;</li>
            <li>Você seja informado sobre a transferência quando aplicável.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "13",
      title: "13. Dados de Menores",
      content: (
        <div className="space-y-4">
          <p>
            Nossos serviços são destinados a profissionais de saúde e pessoas maiores de 18 anos. Não coletamos intencionalmente dados pessoais de menores de idade.
          </p>
          <p>
            Se tomarmos conhecimento de que coletamos dados de menores sem o consentimento adequado dos responsáveis, tomaremos medidas imediatas para eliminar essas informações.
          </p>
        </div>
      ),
    },
    {
      id: "14",
      title: "14. Alterações nesta Política",
      content: (
        <div className="space-y-4">
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por razões legais, operacionais ou regulatórias.
          </p>
          <p>
            Alterações significativas serão comunicadas através de:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Notificação por e-mail para o endereço cadastrado;</li>
            <li>Aviso destacado na plataforma;</li>
            <li>Atualização da data de "Última atualização" no topo desta política.</li>
          </ul>
          <p>
            Recomendamos que você revise esta política periodicamente. O uso continuado de nossos serviços após alterações constitui aceitação da política atualizada.
          </p>
        </div>
      ),
    },
    {
      id: "15",
      title: "15. Encarregado de Proteção de Dados (DPO)",
      content: (
        <div className="space-y-4">
          <p>
            O SegurePix possui um Encarregado de Proteção de Dados (DPO) responsável por:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Receber comunicações dos titulares e da Autoridade Nacional de Proteção de Dados (ANPD);</li>
            <li>Orientar funcionários e contratados sobre práticas de proteção de dados;</li>
            <li>Executar outras atribuições determinadas pelo controlador ou previstas em regulamentação.</li>
          </ul>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10 mt-4">
            <p className="text-white/80">
              <strong>Contato do DPO:</strong>
            </p>
            <ul className="list-none space-y-2 text-white/70 mt-2">
              <li>
                <strong className="text-white">E-mail:</strong>{" "}
                <a href="mailto:dpo@segurepix.com.br" className="text-brand-400 hover:text-brand-300 underline">
                  dpo@segurepix.com.br
                </a>
              </li>
              <li>
                <strong className="text-white">E-mail Geral:</strong>{" "}
                <a href="mailto:privacidade@segurepix.com.br" className="text-brand-400 hover:text-brand-300 underline">
                  privacidade@segurepix.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "16",
      title: "16. Contato e Reclamações",
      content: (
        <div className="space-y-4">
          <p>
            Para questões, solicitações ou reclamações relacionadas a esta Política de Privacidade ou ao tratamento de seus dados pessoais, entre em contato:
          </p>
          <div className="bg-white/5 rounded-lg p-6 border border-white/10 mt-4">
            <div className="space-y-3">
              <div>
                <strong className="text-white">SegurePix</strong>
              </div>
              <div>
                <strong className="text-white">E-mail de Privacidade:</strong>{" "}
                <a href="mailto:privacidade@segurepix.com.br" className="text-brand-400 hover:text-brand-300 underline">
                  privacidade@segurepix.com.br
                </a>
              </div>
              <div>
                <strong className="text-white">E-mail Geral:</strong>{" "}
                <a href="mailto:contato@segurepix.com.br" className="text-brand-400 hover:text-brand-300 underline">
                  contato@segurepix.com.br
                </a>
              </div>
              <div>
                <strong className="text-white">Telefone:</strong>{" "}
                <a href="tel:+5511995597242" className="text-brand-400 hover:text-brand-300 underline">
                  (11) 99559-7242
                </a>
              </div>
              <div>
                <strong className="text-white">Endereço:</strong> São Paulo, Brasil
              </div>
            </div>
          </div>
          <p>
            Você também pode apresentar reclamações diretamente à Autoridade Nacional de Proteção de Dados (ANPD) através do site{" "}
            <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 underline">
              www.gov.br/anpd
            </a>.
          </p>
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
              <Lock className="w-4 h-4 text-brand-400" />
              <span className="text-sm font-medium text-white/80">Proteção de Dados</span>
            </motion.div>

            <h1 className="heading-lg text-white mb-4">
              Política de <span className="gradient-text">Privacidade</span>
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
                <Shield className="w-6 h-6 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Compromisso com sua Privacidade
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Esta Política de Privacidade descreve como o SegurePix coleta, utiliza, armazena e protege seus dados pessoais, 
                    em total conformidade com a Lei Geral de Proteção de Dados (LGPD). Sua privacidade é nossa prioridade, e estamos 
                    comprometidos em ser transparentes sobre nossas práticas de proteção de dados.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Privacy Content */}
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
                      {index === 0 && <FileText className="w-5 h-5 text-white" />}
                      {index === 1 && <Database className="w-5 h-5 text-white" />}
                      {index === 2 && <Eye className="w-5 h-5 text-white" />}
                      {index === 3 && <Database className="w-5 h-5 text-white" />}
                      {index === 4 && <UserCheck className="w-5 h-5 text-white" />}
                      {index === 5 && <Shield className="w-5 h-5 text-white" />}
                      {index === 6 && <Eye className="w-5 h-5 text-white" />}
                      {index === 7 && <Lock className="w-5 h-5 text-white" />}
                      {index === 8 && <Database className="w-5 h-5 text-white" />}
                      {index === 9 && <UserCheck className="w-5 h-5 text-white" />}
                      {index === 10 && <Eye className="w-5 h-5 text-white" />}
                      {index === 11 && <Database className="w-5 h-5 text-white" />}
                      {index === 12 && <Shield className="w-5 h-5 text-white" />}
                      {index === 13 && <AlertCircle className="w-5 h-5 text-white" />}
                      {index === 14 && <UserCheck className="w-5 h-5 text-white" />}
                      {index === 15 && <Shield className="w-5 h-5 text-white" />}
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
              <Lock className="w-12 h-12 text-brand-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Dúvidas sobre Privacidade?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Nossa equipe de privacidade está pronta para esclarecer qualquer questão sobre o tratamento de seus dados pessoais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacidade@segurepix.com.br"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Falar com DPO
                </a>
                <Link
                  href="/termos-de-uso"
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  Ver Termos de Uso
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

