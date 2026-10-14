import { MessageCircle } from 'lucide-react';
import { site } from '@/lib/content';
import { whatsappUrl } from '@/lib/utils';
import { ButtonLink } from './Button';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
  source?: string;
};

export function WhatsAppButton({
  size = 'md',
  className,
  label = 'Falar no WhatsApp',
  source,
}: Props) {
  const baseMessage = site.whatsapp.message;
  const message = source ? `[${source}] ${baseMessage}` : baseMessage;
  const href = whatsappUrl(site.whatsapp.number, message);

  return (
    <ButtonLink
      href={href}
      external
      variant="whatsapp"
      size={size}
      aria-label={label}
      className={className}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </ButtonLink>
  );
}
