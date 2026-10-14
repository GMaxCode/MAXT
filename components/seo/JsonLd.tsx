import { jsonLd } from '@/lib/content';

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // O conteúdo é determinístico e gerado em build a partir de lib/content.ts
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
