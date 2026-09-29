import { useCallback } from 'react'
import type { Locale } from '@/core/entities'
import { useAsync } from '@/shared/hooks/use-async'
import { useI18n } from './use-i18n'

/**
 * Carga datos en el idioma activo y los vuelve a pedir cuando el visitante cambia de idioma.
 * `fetcher` debe ser estable (una función declarada a nivel de módulo).
 */
export function useLocalizedAsync<T>(fetcher: (locale: Locale) => Promise<T>) {
  const { locale } = useI18n()
  const factory = useCallback(() => fetcher(locale), [fetcher, locale])
  return useAsync(factory)
}
