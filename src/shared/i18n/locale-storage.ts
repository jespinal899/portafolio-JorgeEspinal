import type { Locale } from '@/core/entities'

const STORAGE_KEY = 'portfolio.locale'

/** El almacenamiento puede no estar disponible (modo privado, bloqueado): nunca debe romper la app. */
export function readStoredLocale(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function storeLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Sin persistencia: el idioma se mantiene solo durante la visita.
  }
}
