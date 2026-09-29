import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'
import type { Locale } from '@/core/entities'
import { I18nProvider } from '@/shared/i18n/i18n-provider'

interface Options extends Omit<RenderOptions, 'wrapper'> {
  locale?: Locale
}

/** Renderiza con los providers globales de la app; por defecto en español. */
export function renderWithProviders(ui: ReactElement, { locale = 'es', ...options }: Options = {}) {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <I18nProvider initialLocale={locale}>{children}</I18nProvider>
  )
  return render(ui, { wrapper: Wrapper, ...options })
}
