import { useMemo } from 'react'
import { formatDateRange, formatMonthYear } from '@/shared/lib/format-date'
import { useI18n } from './use-i18n'

/** Formateadores de fecha ligados al idioma activo. */
export function useDateFormat() {
  const { locale, t } = useI18n()

  return useMemo(
    () => ({
      monthYear: (isoDate: string) => formatMonthYear(isoDate, locale),
      range: (startDate: string, endDate?: string) =>
        formatDateRange(startDate, endDate, { locale, presentLabel: t.common.present }),
    }),
    [locale, t],
  )
}
