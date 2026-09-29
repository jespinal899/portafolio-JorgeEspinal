import type {
  Certification,
  Education,
  Experience,
  Locale,
  Profile,
  Project,
  Skill,
} from '@/core/entities'

/**
 * Contrato de acceso a datos del portafolio (Dependency Inversion).
 * El dominio depende de esta abstracción, nunca de una implementación concreta
 * (datos estáticos, API REST, CMS, etc.). Cada método entrega el contenido ya traducido
 * al idioma solicitado.
 */
export interface PortfolioRepository {
  getProfile(locale: Locale): Promise<Profile>
  getExperiences(locale: Locale): Promise<readonly Experience[]>
  getEducation(locale: Locale): Promise<readonly Education[]>
  getCertifications(locale: Locale): Promise<readonly Certification[]>
  getProjects(locale: Locale): Promise<readonly Project[]>
  getSkills(locale: Locale): Promise<readonly Skill[]>
}
