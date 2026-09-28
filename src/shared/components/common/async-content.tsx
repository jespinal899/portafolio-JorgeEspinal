import type { ReactNode } from 'react'
import type { AsyncState } from '@/shared/hooks/use-async'

interface AsyncContentProps<T> {
  state: AsyncState<T>
  fallback: ReactNode
  errorMessage?: string
  children: (data: T) => ReactNode
}

/** Resuelve los tres estados de una carga asíncrona en un único lugar. */
export function AsyncContent<T>({
  state,
  fallback,
  errorMessage = 'No se pudo cargar esta sección.',
  children,
}: AsyncContentProps<T>) {
  if (state.status === 'loading') return fallback
  if (state.status === 'error') {
    return (
      <p role="alert" className="text-destructive">
        {errorMessage}
      </p>
    )
  }
  return children(state.data)
}
