"use client";

import { Shield, Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  produto: [
    { label: "Funcionalidades", href: "#solucao" },
    { label: "Preços", href: "#precos" },
    { label: "API & Integrações", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  empresa: [
    { label: "Sobre nós", href: "/sobre-nos" },
    { label: "Blog", href: "/blog" },
    { label: "Carreiras", href: "#" },
    { label: "Contato", href: "#" },
  ],
  legal: [
    { label: "Termos de Uso", href: "/termos-de-uso" },
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "LGPD", href: "/lgpd" },
    { label: "Segurança", href: "#" },
  ],
  suporte: [
    { label: "Central de Ajuda", href: "#" },
    { label: "Documentação", href: "#" },
    { label: "Status", href: "#" },
    { label: "FAQ", href: "#faq" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-midnight-950 border-t border-white/5">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">
                Segure<span className="text-brand-400">Pix</span>
              </span>
            </a>
            <p className="text-white/50 text-sm mb-6 max-w-xs">
              Pagamentos via Pix com privacidade e conformidade para profissionais 
              de saúde. Proteja seus dados, simplifique sua rotina.
            </p>
            <div className="space-y-2 text-sm text-white/50">
              <a
                href="mailto:contato@segurepix.com.br"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@segurepix.com.br
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (11) 99559-7242
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                São Paulo, Brasil
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-2">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Suporte</h4>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} SegurePix. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/30">
              Regulamentado pelo Banco Central do Brasil
            </span>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white/60" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4 text-white/60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

