# SegurePix - Landing Page

Landing page moderna para o SegurePix, uma solução de pagamentos Pix com privacidade para profissionais de saúde.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas
- **Lucide Icons** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar produção
npm start
```

## 🎨 Estrutura

```
web/
├── app/
│   ├── globals.css      # Estilos globais e utilitários
│   ├── layout.tsx       # Layout raiz com fontes
│   └── page.tsx         # Página principal
├── components/
│   ├── Header.tsx       # Navegação
│   ├── Hero.tsx         # Seção hero
│   ├── Problem.tsx      # Apresentação do problema
│   ├── Solution.tsx     # Features da solução
│   ├── HowItWorks.tsx   # Passos de uso
│   ├── Pricing.tsx      # Tabela de preços
│   ├── Testimonials.tsx # Depoimentos
│   ├── FAQ.tsx          # Perguntas frequentes
│   ├── CTA.tsx          # Call to action final
│   └── Footer.tsx       # Rodapé
├── lib/
│   └── utils.ts         # Utilitários (cn)
└── public/
    └── fonts/           # Fontes locais
```

## 🎯 Seções

1. **Hero** - Proposta de valor principal
2. **Problema** - Dores do ICP (exposição de dados, sigilo, fiscal)
3. **Solução** - Features do produto
4. **Como Funciona** - Onboarding em 4 passos
5. **Preços** - Planos Starter, Professional, Enterprise
6. **Depoimentos** - Prova social
7. **FAQ** - Perguntas frequentes
8. **CTA** - Call to action final

## 🎨 Design System

### Cores
- **Brand (Verde)**: Confiança, saúde, segurança
- **Midnight (Azul escuro)**: Background profissional
- **Accent**: Gold, Coral, Purple para destaques

### Fontes
- **Outfit**: Corpo de texto
- **Cabinet Grotesk**: Títulos (display)

## 📝 Customização

As cores e estilos podem ser ajustados em:
- `tailwind.config.ts` - Tema e extensões
- `app/globals.css` - Classes utilitárias customizadas

## 🚀 Deploy

```bash
# Build
npm run build

# Deploy na Vercel (recomendado)
vercel --prod
```

## 📄 Licença

Proprietário - SegurePix

