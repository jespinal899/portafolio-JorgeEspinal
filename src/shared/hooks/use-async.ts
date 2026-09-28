import { useEffect, useState } from 'react'

type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error }

/** Resuelve una promesa y expone su estado de forma declarativa. */
export function useAsync<T>(factory: () => Promise<T>): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false

    factory()
      .then((data) => !cancelled && setState({ status: 'success', data }))
      .catch((error: unknown) => {
        if (cancelled) return
        setState({ status: 'error', error: error instanceof Error ? error : new Error(String(error)) })
      })

    return () => {
      cancelled = true
    }
    // `factory` debe ser estable (función de módulo o memoizada).
  }, [factory])

  return state
}
