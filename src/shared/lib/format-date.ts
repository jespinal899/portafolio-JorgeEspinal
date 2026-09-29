import type { Locale } from '@/core/entities'

const formatters = new Map<Locale, Intl.DateTimeFormat>()

const getMonthYearFormatter = (locale: Locale) => {
  let formatter = formatters.get(locale)
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' })
    formatters.set(locale, formatter)
  }
  return formatter
}

/**
 * Convierte una fecha ISO (`YYYY-MM-DD`) a "jul 2025" / "Jul 2025".
 * Se construye con la zona horaria local para evitar el desfase de un día que produce
 * `new Date('YYYY-MM-DD')`, que interpreta la fecha en UTC.
 */
export function formatMonthYear(isoDate: string, locale: Locale): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  return getMonthYearFormatter(locale).format(new Date(year, month - 1, day))
}

interface DateRangeOptions {
  locale: Locale
  /** Texto para un periodo sin fecha de fin, p. ej. "Actualidad" / "Present". */
  presentLabel: string
}

/** Rango legible, p. ej. "jul 2025 – Actualidad". */
export function formatDateRange(
  startDate: string,
  endDate: string | undefined,
  { locale, presentLabel }: DateRangeOptions,
): string {
  const end = endDate ? formatMonthYear(endDate, locale) : presentLabel
  return `${formatMonthYear(startDate, locale)} – ${end}`
}
