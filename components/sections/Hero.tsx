'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { hero } from '@/lib/content';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ButtonLink } from '@/components/ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-dark pt-32 pb-24 md:pt-40 md:pb-32"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-radial"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs text-text-muted backdrop-blur"
          >
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {hero.badge}
          </motion.span>

          <motion.h1
            id="hero-title"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-6xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-2xl text-pretty text-base text-text-muted md:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <WhatsAppButton size="lg" source="hero" />
            <ButtonLink
              href="#servicos"
              size="lg"
              variant="secondary"
              className="group"
            >
              {hero.ctaSecondary}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
