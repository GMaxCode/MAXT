'use client';

import { motion } from 'framer-motion';
import {
  Rocket,
  Building2,
  UserRound,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { services } from '@/lib/content';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Check } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Building2,
  UserRound,
  Wrench,
};

export function Services() {
  return (
    <section
      id="servicos"
      className="border-t border-border bg-background py-20 md:py-32"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Serviços"
          title={services.title}
          subtitle={services.subtitle}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-text/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-text">
                  {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-text">{service.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{service.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-text-muted"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-text"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
