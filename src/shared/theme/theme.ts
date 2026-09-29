import { readStorage, writeStorage } from '@/shared/lib/safe-storage'

export type Theme = 'light' | 'dark'

/**
 * Clave de almacenamiento. El script en línea de `index.html` usa esta misma clave para
 * aplicar el tema antes de que React cargue y evitar un parpadeo de color.
 */
const STORAGE_KEY = 'portfolio.theme'

const isTheme = (value: unknown): value is Theme => value === 'light' || value === 'dark'

/** Prioridad: la elección guardada del visitante y, si no hay, la preferencia de su sistema. */
export function detectTheme(storedTheme: string | null, prefersDark: boolean): Theme {
  if (isTheme(storedTheme)) return storedTheme
  return prefersDark ? 'dark' : 'light'
}

export const readStoredTheme = (): string | null => readStorage(STORAGE_KEY)

export const storeTheme = (theme: Theme): void => writeStorage(STORAGE_KEY, theme)

export const systemPrefersDark = (): boolean =>
  window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
