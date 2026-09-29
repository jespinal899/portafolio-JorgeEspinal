import { createContext } from 'react'
import type { Locale } from '@/core/entities'
import type { Dictionary } from './dictionaries/es'

export interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  /** Diccionario del idioma activo; el acceso es tipado (`t.nav.openMenu`). */
  t: Dictionary
}

export const I18nContext = createContext<I18nContextValue | null>(null)
