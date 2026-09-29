import type {
  Certification,
  Education,
  Experience,
  Locale,
  Profile,
  Project,
  Skill,
} from '@/core/entities'
import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'
import { certificationsData } from '@/infrastructure/data/certifications.data'
import { educationData } from '@/infrastructure/data/education.data'
import { experienceData } from '@/infrastructure/data/experience.data'
import { profileData } from '@/infrastructure/data/profile.data'
import { projectsData } from '@/infrastructure/data/projects.data'
import { skillsData } from '@/infrastructure/data/skills.data'
import { localize } from '@/infrastructure/i18n/localize'

/** Implementación basada en datos locales. Cambiable por una API sin tocar el dominio. */
export class StaticPortfolioRepository implements PortfolioRepository {
  getProfile(locale: Locale): Promise<Profile> {
    return Promise.resolve(localize<Profile>(profileData, locale))
  }

  getExperiences(locale: Locale): Promise<readonly Experience[]> {
    return Promise.resolve(localize<readonly Experience[]>(experienceData, locale))
  }

  getEducation(locale: Locale): Promise<readonly Education[]> {
    return Promise.resolve(localize<readonly Education[]>(educationData, locale))
  }

  getCertifications(locale: Locale): Promise<readonly Certification[]> {
    return Promise.resolve(localize<readonly Certification[]>(certificationsData, locale))
  }

  getProjects(locale: Locale): Promise<readonly Project[]> {
    return Promise.resolve(localize<readonly Project[]>(projectsData, locale))
  }

  getSkills(locale: Locale): Promise<readonly Skill[]> {
    return Promise.resolve(localize<readonly Skill[]>(skillsData, locale))
  }
}
