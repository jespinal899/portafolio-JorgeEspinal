import type { Experience, Profile, Project, Skill } from '@/core/entities'

/**
 * Contrato de acceso a datos del portafolio (Dependency Inversion).
 * El dominio depende de esta abstracción, nunca de una implementación concreta
 * (datos estáticos, API REST, CMS, etc.).
 */
export interface PortfolioRepository {
  getProfile(): Promise<Profile>
  getExperiences(): Promise<readonly Experience[]>
  getProjects(): Promise<readonly Project[]>
  getSkills(): Promise<readonly Skill[]>
}
