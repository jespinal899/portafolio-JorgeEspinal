import { RouterProvider } from 'react-router-dom'
import { appRouter } from '@/app.router'
import { I18nProvider } from '@/shared/i18n/i18n-provider'

/** Punto único para registrar providers globales (tema, i18n, etc.). */
export function AppProviders() {
  return (
    <I18nProvider>
      <RouterProvider router={appRouter} />
    </I18nProvider>
  )
}
