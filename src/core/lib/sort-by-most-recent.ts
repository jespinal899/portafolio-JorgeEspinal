interface Dated {
  readonly startDate: string
}

/**
 * Ordena de la fecha de inicio más reciente a la más antigua sin mutar la lista original.
 * Las fechas ISO (`YYYY-MM-DD`) se ordenan correctamente como texto.
 */
export function sortByMostRecent<T extends Dated>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => b.startDate.localeCompare(a.startDate))
}
