import type { Locale } from '@/core/entities'
import { readStorage, writeStorage } from '@/shared/lib/safe-storage'

const STORAGE_KEY = 'portfolio.locale'

export const readStoredLocale = (): string | null => readStorage(STORAGE_KEY)

export const storeLocale = (locale: Locale): void => writeStorage(STORAGE_KEY, locale)
