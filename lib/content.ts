// Toda a copy e dados estruturados da landing ficam aqui.
// Edite este arquivo para mudar textos, sem precisar caçar nos componentes.

import { env } from './utils';

export const site = {
  name: 'MAXT',
  tagline: 'Construção · Execução · Resultado',
  description:
    'Desenvolvimento web profissional com performance absurda e SEO de fábrica. Landing pages, sites institucionais e portfólios que convertem.',
  url: env('NEXT_PUBLIC_SITE_URL', 'https://maxt.com'),
  city: env('NEXT_PUBLIC_CITY', 'Hortolândia - São Paulo'),
  whatsapp: {
    number: env('NEXT_PUBLIC_WHATSAPP_NUMBER', '5569993597000'),
    message: env(
      'NEXT_PUBLIC_WHATSAPP_MESSAGE',
      'Olá! Vim pelo site da MAXT e gostaria de conversar sobre um projeto.',
    ),
  },
  social: {
    instagram: env('NEXT_PUBLIC_INSTAGRAM', 'https://www.instagram.com/guigmaxx/'),
    linkedin: env(
      'NEXT_PUBLIC_LINKEDIN',
      'https://www.linkedin.com/in/guilherme-gomes-max01/',
    ),
    github: env('NEXT_PUBLIC_GITHUB', 'https://github.com/GMaxCode'),
  },
} as const;

export const hero = {
  badge: 'Construção · Execução · Resultado',
  headline: 'Sites que vendem, não só que existem.',
  subheadline:
    'Desenvolvimento web profissional para quem quer presença digital que converte. Da landing page ao site institucional, com performance e SEO de fábrica.',
  ctaPrimary: 'Chamar no WhatsApp',
  ctaSecondary: 'Ver serviços',
} as const;

export const services = {
  title: 'O que a MAXT entrega',
  subtitle: 'Soluções sob medida para cada momento do seu negócio',
  items: [
    {
      icon: 'Rocket' as const,
      title: 'Landing Pages',
      description:
        'Páginas de alta conversão para campanhas, lançamentos e captação de leads.',
      bullets: [
        'Design orientado a uma única ação',
        'Copy persuasiva com foco em conversão',
        'Pixel, analytics e testes A/B prontos',
        'Carregamento sub-1,5s mesmo no 4G',
      ],
    },
    {
      icon: 'Building2' as const,
      title: 'Sites Institucionais',
      description:
        'Presença online sólida para empresas que querem transmitir credibilidade.',
      bullets: [
        'Até 7 páginas estratégicas',
        'CMS simples para o time editar',
        'SEO técnico on-page desde o deploy',
        'Identidade visual consistente',
      ],
    },
    {
      icon: 'UserRound' as const,
      title: 'Sites para Profissionais',
      description:
        'Portfólios e sites pessoais para autônomos, médicos, advogados, consultores.',
      bullets: [
        'Posicionamento claro e objetivo',
        'Galeria de cases ou serviços',
        'Agendamento e contato direto',
        'Domínio e e-mail profissional',
      ],
    },
    {
      icon: 'Wrench' as const,
      title: 'Manutenção & Suporte',
      description:
        'Atualizações, correções, melhorias contínuas e suporte técnico.',
      bullets: [
        'Backups automáticos semanais',
        'Atualizações de segurança e plugins',
        'Suporte por WhatsApp em horário comercial',
        'Pequenas melhorias incluídas no plano',
      ],
    },
  ],
} as const;

export const differentials = {
  title: 'Por que escolher a MAXT',
  items: [
    {
      icon: 'Timer' as const,
      title: 'Entrega rápida',
      description:
        'Prazo claro desde a proposta, sem enrolação. Seu site no ar no tempo combinado.',
    },
    {
      icon: 'Gauge' as const,
      title: 'Performance absurda',
      description:
        'Core Web Vitals nota A. Site carrega em menos de 1,5 segundo, mesmo no 4G.',
    },
    {
      icon: 'SearchCheck' as const,
      title: 'SEO de fábrica',
      description:
        'Estrutura técnica otimizada para o Google desde o primeiro deploy.',
    },
  ],
} as const;

export const process = {
  title: 'Como funciona',
  items: [
    {
      number: '01',
      title: 'Briefing',
      description:
        'Você conta o que precisa. Sem formulários chatos, só uma boa conversa.',
    },
    {
      number: '02',
      title: 'Proposta',
      description:
        'Escopo, prazo e valor claro por escrito. Sem surpresa.',
    },
    {
      number: '03',
      title: 'Desenvolvimento',
      description:
        'Código limpo, revisões incluídas, você acompanha em tempo real.',
    },
    {
      number: '04',
      title: 'Entrega',
      description:
        'Site no ar com domínio, SSL, SEO configurado e suporte pós-entrega.',
    },
  ],
} as const;

export const socialProof = {
  // Reservado para quando a MAXT tiver clientes reais.
  // Mantido aqui para reativar a seção "Quem confiou na MAXT" sem precisar
  // recriar componente nem imports — basta plugar de volta no app/page.tsx.
  title: 'Quem confiou na MAXT',
  items: [] as Array<{
    initials: string;
    name: string;
    role: string;
    text: string;
    placeholder?: boolean;
  }>,
} as const;

export const cta = {
  id: 'contato',
  headline: 'Pronto pra colocar seu site no ar?',
  sub: 'Chama no WhatsApp e a gente conversa sobre seu projeto. Orçamento sem compromisso.',
  button: 'Falar no WhatsApp agora',
} as const;

export const footer = {
  blurb: 'Construção web profissional. Sites que performam, vendem e duram.',
  copyright: (year: number) => `© ${year} MAXT. Todos os direitos reservados.`,
} as const;

export const nav = {
  links: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ],
  cta: 'Falar no WhatsApp',
} as const;

export const seo = {
  title: 'MAXT — Desenvolvimento Web Profissional | Sites que Vendem',
  description:
    'Desenvolvimento web profissional com performance absurda e SEO de fábrica. Landing pages, sites institucionais e portfólios que convertem.',
  keywords: [
    'desenvolvimento web',
    'criação de sites',
    'landing page',
    'site institucional',
    'sites profissionais',
    'MAXT',
    'Hortolândia',
  ],
  author: 'Guilherme Gomes · MAXT',
} as const;

// Schema.org JSON-LD — ProfessionalService
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/opengraph-image`,
  telephone: `+${site.whatsapp.number}`,
  priceRange: '$$',
  areaServed: {
    '@type': 'Place',
    name: 'Brasil',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hortolândia',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  sameAs: [site.social.instagram, site.social.linkedin, site.social.github].filter(
    (url) => url.length > 0,
  ),
  knowsAbout: [
    'Next.js',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'SEO técnico',
    'Core Web Vitals',
    'Landing pages de alta conversão',
    'Sites institucionais',
    'Vercel',
  ],
} as const;
