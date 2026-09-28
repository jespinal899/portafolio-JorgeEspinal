import { RouterProvider } from 'react-router-dom'
import { appRouter } from '@/app.router'

/** Punto único para registrar providers globales (tema, i18n, etc.). */
export function AppProviders() {
  return <RouterProvider router={appRouter} />
}
