import type { Certification } from '@/core/entities'
import type { Translatable } from '@/infrastructure/i18n/localize'

export const certificationsData: Translatable<readonly Certification[]> = [
  {
    id: 'power-bi-intermedio',
    name: { es: 'Power BI Intermedio', en: 'Power BI – Intermediate' },
    // TODO: completar `issuer` (institución), `issueDate` (YYYY-MM-DD) y `credentialUrl` si existe.
  },
]
