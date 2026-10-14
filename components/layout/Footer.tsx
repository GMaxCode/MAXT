import { Camera, Briefcase, Code2, MapPin, type LucideIcon } from 'lucide-react';
import { footer, site } from '@/lib/content';
import { currentYear } from '@/lib/utils';

type SocialItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const socials: SocialItem[] = [
  { label: 'Instagram', href: site.social.instagram, icon: Camera },
  { label: 'LinkedIn', href: site.social.linkedin, icon: Briefcase },
  { label: 'GitHub', href: site.social.github, icon: Code2 },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="font-mono text-lg font-bold tracking-tight text-text">
              {site.name}
              <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-text" />
            </p>
            <p className="mt-4 max-w-md text-sm text-text-muted">{footer.blurb}</p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-text-muted">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {site.city}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Redes
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-text-muted">
          <p>{footer.copyright(currentYear())}</p>
        </div>
      </div>
    </footer>
  );
}
