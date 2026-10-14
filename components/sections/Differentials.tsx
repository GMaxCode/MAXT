'use client';

import { motion } from 'framer-motion';
import { Timer, Gauge, SearchCheck, type LucideIcon } from 'lucide-react';
import { differentials } from '@/lib/content';
import { SectionTitle } from '@/components/ui/SectionTitle';

const iconMap: Record<string, LucideIcon> = {
  Timer,
  Gauge,
  SearchCheck,
};

export function Differentials() {
  return (
    <section
      className="border-t border-border bg-gradient-dark py-20 md:py-32"
      aria-labelledby="differentials-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title={differentials.title} />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {differentials.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-text">
                  {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
