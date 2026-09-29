import type { Education } from '@/core/entities'
import type { Translatable } from '@/infrastructure/i18n/localize'

/** Fechas en formato ISO 8601 (`YYYY-MM-DD`). Sin `endDate` = estudios en curso. */
export const educationData: Translatable<readonly Education[]> = [
  {
    id: 'ceutec-ingenieria-informatica',
    institution: 'Centro Universitario Tecnológico (CEUTEC)',
    degree: { es: 'Ingeniería en Informática', en: 'B.S. in Computer Engineering' },
    location: 'San Pedro Sula, Honduras',
    startDate: '2022-01-01',
  },
]
