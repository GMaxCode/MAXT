'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '@/lib/content';
import { whatsappUrl } from '@/lib/utils';

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const href = whatsappUrl(site.whatsapp.number, site.whatsapp.message);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          key="fab"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 animate-pulse-soft hover:scale-105 focus-visible:scale-105"
        >
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
