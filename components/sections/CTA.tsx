'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { cta } from '@/lib/content';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function CTA() {
  return (
    <section
      id="contato"
      className="border-t border-border bg-background py-20 md:py-32"
      aria-labelledby="cta-title"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span
            aria-hidden="true"
            className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface text-whatsapp"
          >
            <MessageCircle className="h-8 w-8" />
          </span>

          <h2
            id="cta-title"
            className="mt-8 text-balance text-3xl font-semibold tracking-tight text-text md:text-5xl"
          >
            {cta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-text-muted md:text-lg">
            {cta.sub}
          </p>

          <div className="mt-10 flex justify-center">
            <WhatsAppButton size="lg" label={cta.button} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
