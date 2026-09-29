import type { Skill } from '@/core/entities'
import type { Translatable } from '@/infrastructure/i18n/localize'

export const skillsData: Translatable<readonly Skill[]> = [
  { name: 'React', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'NestJS', category: 'backend' },
  { name: 'Flutter', category: 'mobile' },
  { name: 'SQL Server', category: 'database' },
  { name: 'Windows Server', category: 'infrastructure' },
  { name: 'Ubuntu Server', category: 'infrastructure' },
  { name: { es: 'Soporte IT', en: 'IT Support' }, category: 'infrastructure' },
  { name: 'Power BI', category: 'analytics' },
]
