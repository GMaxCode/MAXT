// Utility helpers compartilhados entre componentes.
// Mantenha funções puras, sem dependência de React/Next.

import { clsx, type ClassValue } from 'clsx';

/**
 * Encadeia classes condicionalmente. Substituto leve para `clsx`.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Monta URL `wa.me` com a mensagem padrão codificada.
 */
export function whatsappUrl(
  number: string,
  message: string = 'Olá! Vim pelo site da MAXT e gostaria de conversar sobre um projeto.',
): string {
  const cleanedNumber = number.replace(/\D/g, '');
  return `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Lê uma env com fallback seguro para a UI nunca quebrar.
 */
export function env(name: string, fallback = ''): string {
  const value = process.env[name];
  return value && value.length > 0 ? value : fallback;
}

/**
 * Retorna o ano corrente (usado no copyright do footer).
 */
export function currentYear(): number {
  return new Date().getFullYear();
}
