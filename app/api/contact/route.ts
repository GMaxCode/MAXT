import { NextResponse } from 'next/server';
import { site } from '@/lib/content';

export const runtime = 'edge';

// Endpoint de contato. Recebe um POST com { name, message } e devolve
// a URL `wa.me` pronta para abrir conversa com a mensagem já preenchida.
// Mantém o número fora do bundle do cliente (a UI usa NEXT_PUBLIC_*,
// mas a API existe para integrações server-side futuras, como CRM).
type ContactPayload = {
  name?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 80) : '';
  const userMessage =
    typeof body.message === 'string' ? body.message.trim().slice(0, 500) : '';

  if (!userMessage) {
    return NextResponse.json({ error: 'message_required' }, { status: 400 });
  }

  const composed = [
    name ? `Olá, sou ${name}.` : 'Olá!',
    userMessage,
    `— Enviado pelo site da ${site.name}.`,
  ].join('\n\n');

  const number = site.whatsapp.number.replace(/\D/g, '');
  const url = `https://wa.me/${number}?text=${encodeURIComponent(composed)}`;

  return NextResponse.json({ url });
}

export async function GET() {
  return NextResponse.json(
    { ok: true, contact: 'POST { message, name? } para gerar URL wa.me' },
    { status: 200 },
  );
}
