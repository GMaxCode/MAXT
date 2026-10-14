import { ImageResponse } from 'next/og';
import { site } from '@/lib/content';

export const runtime = 'edge';
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(180deg, #0A0A0A 0%, #171717 100%)',
          color: '#FAFAFA',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          <span>MAXT</span>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: '#FAFAFA',
              marginTop: -8,
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              border: '1px solid #262626',
              borderRadius: 999,
              fontSize: 18,
              color: '#A1A1AA',
              width: 'fit-content',
            }}
          >
            Construção · Execução · Resultado
          </div>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              fontWeight: 600,
              maxWidth: 900,
            }}
          >
            Sites que vendem, não só que existem.
          </div>
          <div style={{ fontSize: 22, color: '#A1A1AA', maxWidth: 800 }}>
            Desenvolvimento web profissional com performance absurda e SEO de fábrica.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 18,
            color: '#A1A1AA',
            borderTop: '1px solid #262626',
            paddingTop: 24,
          }}
        >
          <span>{site.url.replace('https://', '')}</span>
          <span>Hortolândia · SP</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
