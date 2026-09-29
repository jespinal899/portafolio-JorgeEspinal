import { LOCALES, type Locale } from '@/core/entities/locale.entity'

export const DEFAULT_LOCALE: Locale = 'es'

const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && (LOCALES as readonly string[]).includes(value)

/**
 * Elige el idioma inicial: primero la preferencia guardada del visitante, luego el idioma
 * de su navegador (`en-US` → `en`) y, si ninguno es soportado, el idioma por defecto.
 */
export function detectLocale(
  storedLocale: string | null,
  browserLanguages: readonly string[],
): Locale {
  if (isLocale(storedLocale)) return storedLocale

  const browserLocale = browserLanguages
    .map((language) => language.toLowerCase().split('-')[0])
    .find(isLocale)

  return browserLocale ?? DEFAULT_LOCALE
}
