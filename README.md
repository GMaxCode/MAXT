# MAXT — Landing Page

Landing page profissional da [MAXT](https://maxt.com), marca de desenvolvimento web. Construída com Next.js 15 (App Router), TypeScript estrito, Tailwind 4 e Framer Motion — performance absurda, SEO técnico de fábrica e pronta pra deploy na Vercel.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss) ![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)

## ✨ Features

- **Performance**: Core Web Vitals nota A, imagens otimizadas, fontes Geist via `next/font`, bundle enxuto.
- **SEO técnico**: metadata completa, Open Graph dinâmico (1200×630 via `next/og`), sitemap.xml, robots.txt, JSON-LD `ProfessionalService`.
- **Acessibilidade**: HTML semântico, contraste AA, foco visível, `prefers-reduced-motion` respeitado, ARIA labels.
- **Mobile-first**: header com drawer, grid responsivo, FAB WhatsApp com aparição no scroll.
- **Dark mode nativo** sem flash (color-scheme dark + tema fixo).
- **API route** `/api/contact` para gerar URL `wa.me` server-side (Edge runtime).

## 🧱 Stack

- Next.js 15 (App Router, RSC, Edge runtime no OG e na API)
- TypeScript com `strict`, `noUnusedLocals`, `noUnusedParameters`
- Tailwind CSS 4 (via `@tailwindcss/postcss`)
- Framer Motion (animações sutis, com `whileInView` para entrada de seções)
- Lucide React (ícones)
- `geist` (fontes Geist Sans + Geist Mono)
- ESLint + Prettier

## 📁 Estrutura de pastas

```
maxt-landing/
├── app/
│   ├── layout.tsx            # Metadata, fontes, JsonLd, layout raiz
│   ├── page.tsx              # Página inicial
│   ├── globals.css           # Tailwind 4 + design tokens
│   ├── sitemap.ts            # sitemap.xml automático
│   ├── robots.ts             # robots.txt com bloqueio de /api
│   ├── opengraph-image.tsx   # OG 1200×630 via next/og (Edge)
│   └── api/contact/route.ts  # Endpoint para gerar URL wa.me
├── components/
│   ├── sections/             # Hero, Services, Differentials, Process, SocialProof, CTA
│   ├── ui/                   # Button, WhatsAppButton, SectionTitle
│   ├── layout/               # Header, Footer, FloatingWhatsApp
│   └── seo/JsonLd.tsx        # Schema.org ProfessionalService
├── lib/
│   ├── content.ts            # Toda a copy e dados (single source of truth)
│   └── utils.ts              # cn, whatsappUrl, env, currentYear
├── public/
│   ├── favicon.ico
│   └── images/               # Assets estáticos
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## ⚙️ Pré-requisitos

- Node.js 20+ (testado em 24)
- npm 10+ (ou pnpm/yarn)

## 🚀 Instalação local

```bash
git clone <seu-repo> maxt-landing
cd maxt-landing
npm install
cp .env.example .env
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## 🔐 Variáveis de ambiente

Todas as variáveis são públicas (`NEXT_PUBLIC_*`) — o site não usa segredos server-side.

| Variável | Descrição | Exemplo |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número do WhatsApp com DDI, só dígitos | `5569993597000` |
| `NEXT_PUBLIC_WHATSAPP_MESSAGE` | Mensagem padrão enviada pelo botão | `Olá! Vim pelo site…` |
| `NEXT_PUBLIC_CITY` | Cidade exibida no footer e no JSON-LD | `Hortolândia - São Paulo` |
| `NEXT_PUBLIC_INSTAGRAM` | URL completa do Instagram | `https://instagram.com/seuuser` |
| `NEXT_PUBLIC_LINKEDIN` | URL completa do LinkedIn | `https://linkedin.com/in/seuuser` |
| `NEXT_PUBLIC_GITHUB` | URL completa do GitHub | `https://github.com/seuuser` |
| `NEXT_PUBLIC_SITE_URL` | URL canônica do site (usada em OG e JSON-LD) | `https://maxt.com` |

> **Nunca** comite o `.env` real. Ele já está no `.gitignore`.

## ✏️ Customização

Toda a copy (textos, títulos, CTAs, depoimentos, processo) está centralizada em [`lib/content.ts`](./lib/content.ts). Para ajustar o visual (paleta, espaçamentos, animações), edite:

- [`tailwind.config.ts`](./tailwind.config.ts) — paleta `background`, `surface`, `border`, `text`, `text-muted`, `whatsapp`.
- [`app/globals.css`](./app/globals.css) — tokens `@theme`, keyframes (`pulse-soft`, `fade-up`), resets.
- [`app/layout.tsx`](./app/layout.tsx) — `metadata` (title, description, OG, Twitter, robots).

Para adicionar ou trocar ícones, use [`lucide-react`](https://lucide.dev) e atualize o `iconMap` dentro de cada seção.

## ☁️ Deploy na Vercel

1. Suba o código para um repositório Git (GitHub/GitLab/Bitbucket).
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. A Vercel detecta Next.js automaticamente. Em **Environment Variables**, adicione cada `NEXT_PUBLIC_*` do `.env.example`.
4. Clique em **Deploy**. Em ~1 minuto o site estará no subdomínio `*.vercel.app`.

### Apontar o domínio `maxt.com`

1. Na Vercel, vá em **Settings → Domains**.
2. Adicione `maxt.com` e `www.maxt.com`.
3. A Vercel vai mostrar os registros DNS a configurar no seu provedor (Registro.br, Cloudflare, Namecheap, etc.):
   - **Apex (`maxt.com`)**: registro `A` apontando para `76.76.21.21`.
   - **Subdomínio (`www`)**: registro `CNAME` apontando para `cname.vercel-dns.com`.
4. Aguarde a propagação (5 min a 48 h) — a Vercel renova o certificado SSL automaticamente.
5. Ative **Redirect** para forçar `www → apex` (ou o contrário, sua escolha).

### Após o deploy

- Submeta o `sitemap.xml` no [Google Search Console](https://search.google.com/search-console) e peça a indexação da URL principal.
- O Open Graph gerado por `app/opengraph-image.tsx` aparece em compartilhamentos no WhatsApp, LinkedIn, Twitter, etc.
- Use a aba **Speed Insights** da Vercel para monitorar Core Web Vitals em produção.

## 📜 Scripts

| Script | O que faz |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento (Turbopack) |
| `npm run build` | Gera o build de produção |
| `npm run start` | Sobe o servidor de produção (após `build`) |
| `npm run lint` | Roda ESLint |

## 📄 Licença

MIT — veja [LICENSE](./LICENSE).

---

Construído com café e Next.js por **Guilherme Gomes · MAXT**.
