import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Locale } from '@/core/entities'
import { detectLocale } from './detect-locale'
import { en } from './dictionaries/en'
import { es, type Dictionary } from './dictionaries/es'
import { I18nContext } from './i18n-context'
import { readStoredLocale, storeLocale } from './locale-storage'

const DICTIONARIES: Record<Locale, Dictionary> = { es, en }

interface I18nProviderProps {
  children: ReactNode
  /** Fuerza un idioma (útil en pruebas); si se omite, se detecta automáticamente. */
  initialLocale?: Locale
}

export function I18nProvider({ children, initialLocale }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(
    () => initialLocale ?? detectLocale(readStoredLocale(), navigator.languages),
  )
  const t = DICTIONARIES[locale]

  // Mantiene sincronizados el idioma del documento (lectores de pantalla, SEO) y sus metadatos.
  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [locale, t])

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
    storeLocale(nextLocale)
  }, [])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <I18nContext value={value}>{children}</I18nContext>
}
