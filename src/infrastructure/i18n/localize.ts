import { LOCALES, type Locale } from '@/core/entities/locale.entity'

/** Un mismo valor escrito en cada idioma soportado. */
export type Translations<T> = Readonly<Record<Locale, T>>

/**
 * Versión "traducible" de una entidad: cualquier texto puede escribirse fijo (`'SAP'`)
 * o por idioma (`{ es: 'Auxiliar Contable', en: 'Accounting Assistant' }`).
 * Así fechas, enlaces y nombres propios se escriben una sola vez.
 */
export type Translatable<T> = T extends string
  ? T | Translations<T>
  : T extends readonly (infer Item)[]
    ? readonly Translatable<Item>[]
    : T extends object
      ? { readonly [Key in keyof T]: Translatable<T[Key]> }
      : T

function isTranslations(value: unknown): value is Translations<unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false
  const keys = Object.keys(value)
  return keys.length === LOCALES.length && LOCALES.every((locale) => keys.includes(locale))
}

/** Resuelve recursivamente todos los textos traducibles al idioma indicado. */
export function localize<T>(value: Translatable<T>, locale: Locale): T {
  if (isTranslations(value)) return value[locale] as T
  if (Array.isArray(value)) return value.map((item) => localize<unknown>(item, locale)) as T
  if (typeof value === 'object' && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize<unknown>(item, locale)]),
    ) as T
  }
  return value as T
}
