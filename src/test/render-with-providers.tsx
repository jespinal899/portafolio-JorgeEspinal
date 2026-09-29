import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'
import type { Locale } from '@/core/entities'
import { I18nProvider } from '@/shared/i18n/i18n-provider'
import type { Theme } from '@/shared/theme/theme'
import { ThemeProvider } from '@/shared/theme/theme-provider'

interface Options extends Omit<RenderOptions, 'wrapper'> {
  locale?: Locale
  theme?: Theme
}

/** Renderiza con los providers globales de la app; por defecto en español y tema claro. */
export function renderWithProviders(
  ui: ReactElement,
  { locale = 'es', theme = 'light', ...options }: Options = {},
) {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider initialTheme={theme}>
      <I18nProvider initialLocale={locale}>{children}</I18nProvider>
    </ThemeProvider>
  )
  return render(ui, { wrapper: Wrapper, ...options })
}
