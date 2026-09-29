import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { detectTheme, readStoredTheme, storeTheme, systemPrefersDark, type Theme } from './theme'
import { ThemeContext } from './theme-context'

interface ThemeProviderProps {
  children: ReactNode
  /** Fuerza un tema (útil en pruebas); si se omite, se detecta automáticamente. */
  initialTheme?: Theme
}

export function ThemeProvider({ children, initialTheme }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => initialTheme ?? detectTheme(readStoredTheme(), systemPrefersDark()),
  )

  // shadcn activa las variables del tema oscuro con la clase `.dark` en <html>.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    storeTheme(next)
  }, [theme])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext value={value}>{children}</ThemeContext>
}
