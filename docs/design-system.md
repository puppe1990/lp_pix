# Design System — SegurePix

> Sistema de design para interfaces institucionais modernas, focado em elegância, legibilidade e performance.

---

## 📐 Sumário

1. [Paleta de Cores](#-paleta-de-cores)
2. [Tipografia](#-tipografia)
3. [Espaçamentos](#-espaçamentos)
4. [Efeitos Visuais](#-efeitos-visuais)
5. [Animações](#-animações)
6. [Componentes Base](#-componentes-base)
7. [Tokens CSS](#-tokens-css)

---

## 🎨 Paleta de Cores

### Cores Primárias (Brand)

Verde vibrante que transmite confiança, segurança e inovação.

| Token | HSL | HEX | Uso |
|-------|-----|-----|-----|
| `brand-50` | `147 86% 97%` | `#f0fdf6` | Backgrounds sutis |
| `brand-100` | `147 86% 93%` | `#dcfce9` | Hover em surfaces claras |
| `brand-200` | `149 80% 85%` | `#bbf7d4` | Borders, dividers |
| `brand-300` | `151 76% 73%` | `#86efb4` | Ícones secundários |
| `brand-400` | `148 74% 58%` | `#4ade8b` | Elementos interativos |
| `brand-500` | `150 67% 45%` | `#22c566` | **Cor principal** |
| `brand-600` | `152 72% 36%` | `#16a350` | Hover em botões |
| `brand-700` | `153 69% 29%` | `#158041` | Active states |
| `brand-800` | `154 61% 24%` | `#166536` | Textos sobre light BG |
| `brand-900` | `155 61% 20%` | `#14532e` | Textos de alto contraste |
| `brand-950` | `158 74% 10%` | `#052e15` | Sombras, overlays |

### Cores Secundárias (Midnight)

Azul profundo para backgrounds e superfícies escuras.

| Token | HSL | HEX | Uso |
|-------|-----|-----|-----|
| `midnight-50` | `222 32% 97%` | `#f4f6fb` | Background claro |
| `midnight-100` | `222 32% 94%` | `#e8ecf6` | Surfaces elevation 1 |
| `midnight-200` | `220 33% 86%` | `#ccd7eb` | Borders light mode |
| `midnight-300` | `218 37% 74%` | `#9fb5da` | Texto desabilitado |
| `midnight-400` | `216 38% 59%` | `#6c8ec4` | Ícones secundários |
| `midnight-500` | `216 40% 48%` | `#4970ae` | Links secundários |
| `midnight-600` | `217 45% 39%` | `#375892` | Hover states |
| `midnight-700` | `217 44% 32%` | `#2e4777` | Active states |
| `midnight-800` | `218 41% 28%` | `#293d63` | Cards escuros |
| `midnight-900` | `220 36% 24%` | `#263553` | Surfaces elevation 2 |
| `midnight-950` | `224 48% 11%` | `#0f1629` | **Background principal** |

### Cores de Acento

| Token | HSL | HEX | Uso |
|-------|-----|-----|-----|
| `accent-gold` | `43 92% 48%` | `#f5b700` | Destaques, badges premium |
| `accent-coral` | `0 100% 71%` | `#ff6b6b` | Alertas, erros |
| `accent-purple` | `271 91% 65%` | `#a855f7` | Features especiais |

### Cores Neutras (Dark Mode)

| Token | HSL | Uso |
|-------|-----|-----|
| `white` | `0 0% 100%` | Texto principal |
| `white/80` | `0 0% 100% / 0.8` | Texto secundário |
| `white/60` | `0 0% 100% / 0.6` | Texto terciário |
| `white/40` | `0 0% 100% / 0.4` | Placeholder, disabled |
| `white/20` | `0 0% 100% / 0.2` | Borders |
| `white/10` | `0 0% 100% / 0.1` | Dividers |
| `white/5` | `0 0% 100% / 0.05` | Surfaces glass |

### Gradientes

```css
/* Gradiente Principal - CTAs e destaques */
--gradient-brand: linear-gradient(135deg, hsl(150 67% 45%) 0%, hsl(152 72% 36%) 100%);

/* Gradiente Texto - Headlines especiais */
--gradient-text: linear-gradient(90deg, hsl(148 74% 58%) 0%, hsl(151 76% 73%) 50%, hsl(150 67% 45%) 100%);

/* Gradiente Gold - Premium badges */
--gradient-gold: linear-gradient(90deg, hsl(43 92% 48%) 0%, hsl(50 100% 70%) 50%, hsl(43 92% 48%) 100%);

/* Gradiente Background - Hero sections */
--gradient-radial-glow: radial-gradient(ellipse at center, hsl(150 67% 45% / 0.2) 0%, transparent 70%);

/* Gradiente Overlay - Masks */
--gradient-fade-down: linear-gradient(to bottom, transparent 0%, hsl(224 48% 11%) 100%);

/* Gradiente Mesh - Backgrounds complexos */
--gradient-mesh: radial-gradient(at 40% 20%, hsl(150 67% 45% / 0.15) 0%, transparent 50%),
                 radial-gradient(at 80% 0%, hsl(216 40% 48% / 0.1) 0%, transparent 50%),
                 radial-gradient(at 0% 50%, hsl(271 91% 65% / 0.08) 0%, transparent 50%);
```

---

## 📝 Tipografia

### Font Stack

```css
--font-sans: 'Outfit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Sora', 'Outfit', system-ui, sans-serif;
```

### Escala Tipográfica Responsiva

#### Headlines (font-display)

| Token | Mobile | Tablet | Desktop | Weight | Tracking | Leading |
|-------|--------|--------|---------|--------|----------|---------|
| `h1` | 2.5rem (40px) | 3.5rem (56px) | 4.5rem (72px) | 700 | -0.025em | 1.1 |
| `h2` | 2rem (32px) | 2.5rem (40px) | 3.25rem (52px) | 700 | -0.02em | 1.15 |
| `h3` | 1.5rem (24px) | 1.875rem (30px) | 2.25rem (36px) | 600 | -0.015em | 1.2 |
| `h4` | 1.25rem (20px) | 1.5rem (24px) | 1.75rem (28px) | 600 | -0.01em | 1.3 |
| `h5` | 1.125rem (18px) | 1.25rem (20px) | 1.375rem (22px) | 600 | 0 | 1.4 |
| `h6` | 1rem (16px) | 1.125rem (18px) | 1.125rem (18px) | 600 | 0.01em | 1.4 |

#### Body Text (font-sans)

| Token | Size | Weight | Tracking | Leading | Uso |
|-------|------|--------|----------|---------|-----|
| `body-xl` | 1.25rem (20px) | 400 | 0 | 1.7 | Leads, destaques |
| `body-lg` | 1.125rem (18px) | 400 | 0 | 1.7 | Parágrafos principais |
| `body` | 1rem (16px) | 400 | 0 | 1.6 | Texto padrão |
| `body-sm` | 0.875rem (14px) | 400 | 0.01em | 1.5 | Labels, legendas |
| `body-xs` | 0.75rem (12px) | 500 | 0.02em | 1.5 | Badges, micro-copy |

### Classes Tailwind

```css
/* Headlines com escala responsiva */
.heading-xl {
  @apply text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.5rem]
         font-display font-bold tracking-[-0.025em] leading-[1.1];
}

.heading-lg {
  @apply text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem]
         font-display font-bold tracking-[-0.02em] leading-[1.15];
}

.heading-md {
  @apply text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem]
         font-display font-semibold tracking-[-0.015em] leading-[1.2];
}

.heading-sm {
  @apply text-[1.25rem] sm:text-[1.375rem] md:text-[1.5rem]
         font-display font-semibold tracking-[-0.01em] leading-[1.3];
}

/* Body text */
.text-lead {
  @apply text-lg md:text-xl font-normal leading-relaxed text-white/60;
}

.text-body {
  @apply text-base font-normal leading-relaxed text-white/80;
}

.text-caption {
  @apply text-sm font-medium tracking-wide text-white/50;
}
```

---

## 📏 Espaçamentos

### Escala Base (4px)

| Token | Valor | Uso |
|-------|-------|-----|
| `space-0` | 0 | Reset |
| `space-px` | 1px | Borders finas |
| `space-0.5` | 2px | Micro ajustes |
| `space-1` | 4px | Padding inline mínimo |
| `space-1.5` | 6px | Gaps mínimos |
| `space-2` | 8px | Padding interno pequeno |
| `space-2.5` | 10px | - |
| `space-3` | 12px | Gaps em listas |
| `space-3.5` | 14px | - |
| `space-4` | 16px | **Unidade base** |
| `space-5` | 20px | Padding médio |
| `space-6` | 24px | Padding de cards |
| `space-7` | 28px | - |
| `space-8` | 32px | Margin entre blocos |
| `space-9` | 36px | - |
| `space-10` | 40px | Seção pequena |
| `space-11` | 44px | - |
| `space-12` | 48px | Gap entre seções |
| `space-14` | 56px | - |
| `space-16` | 64px | Seção média |
| `space-20` | 80px | Padding de seções |
| `space-24` | 96px | Seção grande |
| `space-28` | 112px | - |
| `space-32` | 128px | Seção hero |
| `space-36` | 144px | - |
| `space-40` | 160px | Seção extra grande |

### Containers

```css
/* Container estreito - textos longos, forms */
.container-narrow {
  @apply max-w-[48rem] mx-auto px-4 sm:px-6;
}

/* Container padrão - conteúdo principal */
.container-base {
  @apply max-w-[64rem] mx-auto px-4 sm:px-6 lg:px-8;
}

/* Container largo - hero, features grid */
.container-wide {
  @apply max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8;
}

/* Container full - edge-to-edge com padding */
.container-full {
  @apply w-full px-4 sm:px-6 lg:px-8;
}
```

### Padding de Seções

```css
/* Seções padrão */
.section-padding {
  @apply py-16 md:py-24 lg:py-32;
}

/* Seções compactas */
.section-padding-sm {
  @apply py-12 md:py-16 lg:py-20;
}

/* Seções hero/CTA */
.section-padding-lg {
  @apply py-20 md:py-28 lg:py-40;
}
```

---

## ✨ Efeitos Visuais

### Glassmorphism

```css
/* Glass padrão - cards sobre backgrounds escuros */
.glass {
  @apply bg-white/5 backdrop-blur-xl border border-white/10;
}

/* Glass elevado - modais, dropdowns */
.glass-elevated {
  @apply bg-white/[0.08] backdrop-blur-2xl border border-white/15
         shadow-xl shadow-black/20;
}

/* Glass sutil - badges, pills */
.glass-subtle {
  @apply bg-white/[0.03] backdrop-blur-md border border-white/5;
}

/* Glass dark - footer, sidebars */
.glass-dark {
  @apply bg-midnight-950/80 backdrop-blur-xl border border-white/5;
}

/* Glass colorido - destaque brand */
.glass-brand {
  @apply bg-brand-500/10 backdrop-blur-xl border border-brand-500/20;
}
```

### Sistema de Sombras

```css
/* Sombras para dark mode */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.5);

/* Sombras coloridas - glow effects */
--shadow-brand: 0 0 0 1px hsl(150 67% 45% / 0.1),
                0 4px 16px hsl(150 67% 45% / 0.15),
                0 12px 32px hsl(150 67% 45% / 0.1);

--shadow-brand-lg: 0 0 0 1px hsl(150 67% 45% / 0.15),
                   0 8px 24px hsl(150 67% 45% / 0.25),
                   0 24px 48px hsl(150 67% 45% / 0.15);

/* Sombra interna - inputs focus */
--shadow-inner-brand: inset 0 0 0 1px hsl(150 67% 45% / 0.5),
                      0 0 0 3px hsl(150 67% 45% / 0.1);
```

### Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `rounded-none` | 0 | Reset |
| `rounded-sm` | 0.25rem (4px) | Badges pequenos |
| `rounded` | 0.375rem (6px) | Inputs, botões pequenos |
| `rounded-md` | 0.5rem (8px) | Botões padrão |
| `rounded-lg` | 0.75rem (12px) | Cards pequenos |
| `rounded-xl` | 1rem (16px) | **Cards padrão** |
| `rounded-2xl` | 1.25rem (20px) | Cards destacados |
| `rounded-3xl` | 1.5rem (24px) | Modais, seções |
| `rounded-full` | 9999px | Pills, avatares |

### Borders

```css
/* Borders sutis */
--border-subtle: 1px solid hsl(0 0% 100% / 0.05);
--border-default: 1px solid hsl(0 0% 100% / 0.1);
--border-emphasis: 1px solid hsl(0 0% 100% / 0.2);

/* Borders interativas */
--border-hover: 1px solid hsl(0 0% 100% / 0.15);
--border-focus: 2px solid hsl(150 67% 45% / 0.5);

/* Borders brand */
--border-brand: 1px solid hsl(150 67% 45% / 0.3);
--border-brand-strong: 2px solid hsl(150 67% 45% / 0.5);
```

---

## 🎬 Animações

### Easing Curves

```css
/* Easing padrão - maioria das transições */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);

/* Easing entrada - elementos aparecendo */
--ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);

/* Easing interativo - hover, click */
--ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);

/* Easing bounce - feedback de ações */
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Easing spring - elementos elásticos */
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Durações

| Token | Mobile | Desktop | Uso |
|-------|--------|---------|-----|
| `duration-instant` | 75ms | 50ms | Feedback imediato |
| `duration-fast` | 150ms | 100ms | Hover states |
| `duration-normal` | 250ms | 200ms | **Transições padrão** |
| `duration-moderate` | 350ms | 300ms | Modais, dropdowns |
| `duration-slow` | 500ms | 400ms | Page transitions |
| `duration-slower` | 700ms | 600ms | Animações de entrada |
| `duration-slowest` | 1000ms | 800ms | Hero animations |

### Keyframes

```css
/* Fade simples */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Fade com movimento */
@keyframes fadeUp {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes fadeDown {
  from { 
    opacity: 0; 
    transform: translateY(-20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* Scale */
@keyframes scaleIn {
  from { 
    opacity: 0; 
    transform: scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
}

/* Slide */
@keyframes slideInLeft {
  from { 
    opacity: 0; 
    transform: translateX(-30px); 
  }
  to { 
    opacity: 1; 
    transform: translateX(0); 
  }
}

@keyframes slideInRight {
  from { 
    opacity: 0; 
    transform: translateX(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateX(0); 
  }
}

/* Floating - ícones decorativos */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Pulse lento - glows */
@keyframes pulseSlow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

/* Gradient shift - backgrounds */
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Shimmer - loading states */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Classes de Animação

```css
/* Animações de entrada */
.animate-fade-in {
  animation: fadeIn 0.5s var(--ease-out) forwards;
}

.animate-fade-up {
  animation: fadeUp 0.6s var(--ease-out-expo) forwards;
}

.animate-fade-down {
  animation: fadeDown 0.6s var(--ease-out-expo) forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s var(--ease-out) forwards;
}

.animate-slide-left {
  animation: slideInLeft 0.6s var(--ease-out-expo) forwards;
}

.animate-slide-right {
  animation: slideInRight 0.6s var(--ease-out-expo) forwards;
}

/* Animações contínuas */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}

.animate-gradient {
  animation: gradientShift 8s ease infinite;
  background-size: 200% 200%;
}

/* Delays para stagger */
.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }
.animation-delay-500 { animation-delay: 500ms; }
.animation-delay-600 { animation-delay: 600ms; }
.animation-delay-700 { animation-delay: 700ms; }
```

### Transições Padrão

```css
/* Transição base */
.transition-base {
  @apply transition-all duration-200 ease-out;
}

/* Transição para cores */
.transition-colors {
  @apply transition-colors duration-150 ease-out;
}

/* Transição para transform */
.transition-transform {
  @apply transition-transform duration-200 ease-out;
}

/* Transição para opacidade */
.transition-opacity {
  @apply transition-opacity duration-200 ease-out;
}

/* Transição completa - interações complexas */
.transition-all-smooth {
  @apply transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)];
}
```

---

## 🧱 Componentes Base

### Botões

```css
/* Botão Primário */
.btn-primary {
  @apply inline-flex items-center justify-center gap-2 
         px-6 py-3 
         bg-gradient-to-r from-brand-500 to-brand-600 
         text-white font-semibold 
         rounded-xl
         shadow-lg shadow-brand-500/25
         hover:shadow-xl hover:shadow-brand-500/40
         hover:from-brand-400 hover:to-brand-500
         focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:ring-offset-2 focus:ring-offset-midnight-950
         active:scale-[0.98]
         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg
         transition-all duration-300 ease-out;
}

/* Botão Secundário */
.btn-secondary {
  @apply inline-flex items-center justify-center gap-2 
         px-6 py-3
         bg-white/10 border border-white/20
         text-white font-semibold 
         rounded-xl
         hover:bg-white/20 hover:border-white/30
         focus:outline-none focus:ring-2 focus:ring-white/25 focus:ring-offset-2 focus:ring-offset-midnight-950
         active:scale-[0.98]
         disabled:opacity-50 disabled:cursor-not-allowed
         transition-all duration-300 ease-out;
}

/* Botão Ghost */
.btn-ghost {
  @apply inline-flex items-center justify-center gap-2 
         px-4 py-2
         text-white/80 font-medium
         rounded-lg
         hover:text-white hover:bg-white/10
         focus:outline-none focus:ring-2 focus:ring-white/20
         active:scale-[0.98]
         transition-all duration-200;
}

/* Botão Outline */
.btn-outline {
  @apply inline-flex items-center justify-center gap-2 
         px-6 py-3
         bg-transparent border-2 border-brand-500
         text-brand-400 font-semibold 
         rounded-xl
         hover:bg-brand-500/10 hover:text-brand-300
         focus:outline-none focus:ring-2 focus:ring-brand-500/50
         active:scale-[0.98]
         transition-all duration-300 ease-out;
}

/* Tamanhos */
.btn-sm { @apply px-4 py-2 text-sm rounded-lg; }
.btn-lg { @apply px-8 py-4 text-lg rounded-2xl; }
```

### Cards

```css
/* Card padrão */
.card {
  @apply bg-white/5 backdrop-blur-sm 
         border border-white/10 
         rounded-2xl p-6
         hover:bg-white/[0.07] hover:border-white/20
         transition-all duration-300;
}

/* Card destacado */
.card-highlight {
  @apply bg-gradient-to-br from-brand-500/20 to-brand-600/10 
         backdrop-blur-sm 
         border-2 border-brand-500/50 
         rounded-2xl p-6
         shadow-xl shadow-brand-500/10;
}

/* Card interativo */
.card-interactive {
  @apply bg-white/5 backdrop-blur-sm 
         border border-white/10 
         rounded-2xl p-6
         hover:bg-white/[0.08] hover:border-white/20
         hover:shadow-lg hover:shadow-black/20
         hover:-translate-y-1
         cursor-pointer
         transition-all duration-300;
}

/* Card elevado */
.card-elevated {
  @apply bg-white/[0.08] backdrop-blur-xl 
         border border-white/15 
         rounded-2xl p-6
         shadow-xl shadow-black/20;
}
```

### Inputs

```css
/* Input padrão */
.input {
  @apply w-full px-4 py-3
         bg-white/5 
         border border-white/10 
         rounded-xl
         text-white placeholder:text-white/40
         focus:outline-none focus:border-brand-500/50 focus:bg-white/[0.08]
         focus:ring-2 focus:ring-brand-500/20
         transition-all duration-200;
}

/* Input com ícone */
.input-with-icon {
  @apply pl-12;
}

/* Textarea */
.textarea {
  @apply w-full px-4 py-3
         bg-white/5 
         border border-white/10 
         rounded-xl
         text-white placeholder:text-white/40
         focus:outline-none focus:border-brand-500/50 focus:bg-white/[0.08]
         focus:ring-2 focus:ring-brand-500/20
         resize-none
         transition-all duration-200;
}

/* Select */
.select {
  @apply w-full px-4 py-3 pr-10
         bg-white/5 
         border border-white/10 
         rounded-xl
         text-white
         focus:outline-none focus:border-brand-500/50
         focus:ring-2 focus:ring-brand-500/20
         appearance-none
         cursor-pointer
         transition-all duration-200;
}
```

### Badges & Pills

```css
/* Badge padrão */
.badge {
  @apply inline-flex items-center gap-1.5
         px-3 py-1
         bg-white/10 
         border border-white/10
         rounded-full
         text-xs font-medium text-white/80;
}

/* Badge brand */
.badge-brand {
  @apply inline-flex items-center gap-1.5
         px-3 py-1
         bg-brand-500/20 
         border border-brand-500/30
         rounded-full
         text-xs font-medium text-brand-300;
}

/* Badge gold (premium) */
.badge-gold {
  @apply inline-flex items-center gap-1.5
         px-3 py-1
         bg-gradient-to-r from-accent-gold/20 to-yellow-500/20 
         border border-accent-gold/30
         rounded-full
         text-xs font-semibold text-accent-gold;
}

/* Pill - maior */
.pill {
  @apply inline-flex items-center gap-2
         px-4 py-2
         bg-white/5 
         border border-white/10
         rounded-full
         text-sm font-medium text-white/80;
}
```

### Text Utilities

```css
/* Texto gradiente brand */
.gradient-text {
  @apply bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 
         bg-clip-text text-transparent;
}

/* Texto gradiente gold */
.gradient-text-gold {
  @apply bg-gradient-to-r from-accent-gold via-yellow-300 to-accent-gold 
         bg-clip-text text-transparent;
}

/* Text balance para headlines */
.text-balance {
  text-wrap: balance;
}

/* Text pretty para parágrafos */
.text-pretty {
  text-wrap: pretty;
}
```

---

## 🎯 Tokens CSS

### Arquivo de Variáveis Completo

```css
:root {
  /* ===== CORES ===== */
  
  /* Brand */
  --color-brand-50: 147 86% 97%;
  --color-brand-100: 147 86% 93%;
  --color-brand-200: 149 80% 85%;
  --color-brand-300: 151 76% 73%;
  --color-brand-400: 148 74% 58%;
  --color-brand-500: 150 67% 45%;
  --color-brand-600: 152 72% 36%;
  --color-brand-700: 153 69% 29%;
  --color-brand-800: 154 61% 24%;
  --color-brand-900: 155 61% 20%;
  --color-brand-950: 158 74% 10%;
  
  /* Midnight */
  --color-midnight-50: 222 32% 97%;
  --color-midnight-100: 222 32% 94%;
  --color-midnight-200: 220 33% 86%;
  --color-midnight-300: 218 37% 74%;
  --color-midnight-400: 216 38% 59%;
  --color-midnight-500: 216 40% 48%;
  --color-midnight-600: 217 45% 39%;
  --color-midnight-700: 217 44% 32%;
  --color-midnight-800: 218 41% 28%;
  --color-midnight-900: 220 36% 24%;
  --color-midnight-950: 224 48% 11%;
  
  /* Accents */
  --color-accent-gold: 43 92% 48%;
  --color-accent-coral: 0 100% 71%;
  --color-accent-purple: 271 91% 65%;
  
  /* ===== TIPOGRAFIA ===== */
  --font-sans: 'Outfit', system-ui, sans-serif;
  --font-display: 'Sora', var(--font-sans);
  
  /* ===== ESPAÇAMENTOS ===== */
  --space-unit: 4px;
  
  /* ===== EASING ===== */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* ===== DURAÇÕES ===== */
  --duration-instant: 50ms;
  --duration-fast: 100ms;
  --duration-normal: 200ms;
  --duration-moderate: 300ms;
  --duration-slow: 400ms;
  --duration-slower: 600ms;
  --duration-slowest: 800ms;
  
  /* ===== SOMBRAS ===== */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.5);
  
  /* ===== RADIUS ===== */
  --radius-sm: 0.25rem;
  --radius: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.25rem;
  --radius-3xl: 1.5rem;
  --radius-full: 9999px;
  
  /* ===== Z-INDEX ===== */
  --z-dropdown: 50;
  --z-sticky: 100;
  --z-modal: 200;
  --z-tooltip: 300;
  --z-toast: 400;
}

/* Mobile-specific durations */
@media (max-width: 768px) {
  :root {
    --duration-instant: 75ms;
    --duration-fast: 150ms;
    --duration-normal: 250ms;
    --duration-moderate: 350ms;
    --duration-slow: 500ms;
    --duration-slower: 700ms;
    --duration-slowest: 1000ms;
  }
}
```

---

## 📱 Responsividade

### Breakpoints

| Token | Valor | Uso |
|-------|-------|-----|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Desktop wide |
| `2xl` | 1536px | Desktop ultra-wide |

### Media Queries Úteis

```css
/* Preferência por movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  :root {
    --border-default: 1px solid hsl(0 0% 100% / 0.3);
  }
}

/* Touch devices */
@media (hover: none) and (pointer: coarse) {
  .btn-primary:hover,
  .btn-secondary:hover {
    transform: none;
  }
}
```

---

## ✅ Checklist de Implementação

- [ ] Configurar variáveis CSS no `:root`
- [ ] Configurar `tailwind.config.ts` com tokens
- [ ] Criar classes utilitárias em `globals.css`
- [ ] Implementar componentes base (Button, Card, Input)
- [ ] Configurar animações e keyframes
- [ ] Testar em diferentes breakpoints
- [ ] Verificar acessibilidade (contraste, motion)
- [ ] Documentar padrões de uso

---

*Design System v1.0 — SegurePix*

