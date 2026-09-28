const monthYearFormatter = new Intl.DateTimeFormat('es', { month: 'short', year: 'numeric' })

/**
 * Convierte una fecha ISO (`YYYY-MM-DD`) a "jul 2025".
 * Se construye con la zona horaria local para evitar el desfase de un día que produce
 * `new Date('YYYY-MM-DD')`, que interpreta la fecha en UTC.
 */
export function formatMonthYear(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  return monthYearFormatter.format(new Date(year, month - 1, day))
}

/** Rango legible, p. ej. "jul 2025 – Actualidad". */
export function formatDateRange(startDate: string, endDate?: string): string {
  const end = endDate ? formatMonthYear(endDate) : 'Actualidad'
  return `${formatMonthYear(startDate)} – ${end}`
}
