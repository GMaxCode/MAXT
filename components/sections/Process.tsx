'use client';

import { motion } from 'framer-motion';
import { process } from '@/lib/content';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function Process() {
  return (
    <section
      id="processo"
      className="border-t border-border bg-background py-20 md:py-32"
      aria-labelledby="process-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Processo"
          title={process.title}
          align="left"
        />

        <ol className="mt-14 relative grid gap-10 md:grid-cols-4">
          {/* Linha conectora horizontal no desktop, vertical no mobile. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-0 h-full w-px bg-border md:left-0 md:top-4 md:h-px md:w-full"
          />

          {process.items.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative pl-12 md:pl-0 md:pt-10"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background font-mono text-xs text-text md:left-0 md:top-0 md:relative md:mb-4 md:inline-flex"
              >
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
