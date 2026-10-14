import Link from 'next/link';
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'whatsapp' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text ' +
  'disabled:pointer-events-none disabled:opacity-50 select-none whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-text text-background hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(250,250,250,0.18)]',
  secondary:
    'border border-border bg-transparent text-text hover:border-text hover:-translate-y-0.5',
  whatsapp:
    'bg-whatsapp text-white hover:bg-[#1ebe5b] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)]',
  ghost: 'bg-transparent text-text-muted hover:text-text',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
};

function classes(variant: Variant, size: Size, extra?: string) {
  return cn(base, variants[variant], sizes[size], extra);
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className, type = 'button', ...rest },
  ref,
) {
  return <button ref={ref} type={type} className={classes(variant, size, className)} {...rest} />;
});

type ButtonLinkProps = {
  variant?: Variant;
  size?: Size;
  href: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  href,
  external,
  className,
  ...rest
}: ButtonLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes(variant, size, className)}
        {...rest}
      />
    );
  }
  return <Link href={href} className={classes(variant, size, className)} {...rest} />;
}
