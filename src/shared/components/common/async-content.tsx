import type { ReactNode } from 'react'
import type { AsyncState } from '@/shared/hooks/use-async'
import { useI18n } from '@/shared/i18n/use-i18n'

interface AsyncContentProps<T> {
  state: AsyncState<T>
  fallback: ReactNode
  /** Por defecto, el mensaje de error genérico del idioma activo. */
  errorMessage?: string
  children: (data: T) => ReactNode
}

/** Resuelve los tres estados de una carga asíncrona en un único lugar. */
export function AsyncContent<T>({ state, fallback, errorMessage, children }: AsyncContentProps<T>) {
  const { t } = useI18n()

  if (state.status === 'loading') return fallback
  if (state.status === 'error') {
    return (
      <p role="alert" className="text-destructive">
        {errorMessage ?? t.common.loadError}
      </p>
    )
  }
  return children(state.data)
}
