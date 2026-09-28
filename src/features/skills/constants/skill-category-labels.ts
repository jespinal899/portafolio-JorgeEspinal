import type { SkillCategory } from '@/core/entities'

/** `Record` obliga a definir una etiqueta por cada categoría nueva que se agregue al dominio. */
export const SKILL_CATEGORY_LABELS: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Móvil',
  database: 'Bases de datos',
  infrastructure: 'Infraestructura',
  analytics: 'Análisis de datos',
}
