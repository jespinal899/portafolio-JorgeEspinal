import type { Experience, Profile, Project, Skill } from '@/core/entities'
import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'
import { experienceData } from '@/infrastructure/data/experience.data'
import { profileData } from '@/infrastructure/data/profile.data'
import { projectsData } from '@/infrastructure/data/projects.data'
import { skillsData } from '@/infrastructure/data/skills.data'

/** Implementación basada en datos locales. Cambiable por una API sin tocar el dominio. */
export class StaticPortfolioRepository implements PortfolioRepository {
  getProfile(): Promise<Profile> {
    return Promise.resolve(profileData)
  }

  getExperiences(): Promise<readonly Experience[]> {
    return Promise.resolve(experienceData)
  }

  getProjects(): Promise<readonly Project[]> {
    return Promise.resolve(projectsData)
  }

  getSkills(): Promise<readonly Skill[]> {
    return Promise.resolve(skillsData)
  }
}
