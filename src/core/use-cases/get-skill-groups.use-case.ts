import type { SkillGroup } from '@/core/entities'
import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'

/** Agrupa las habilidades por categoría, respetando el orden en que aparece cada categoría. */
export class GetSkillGroupsUseCase {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  async execute(): Promise<readonly SkillGroup[]> {
    const skills = await this.repository.getSkills()
    const groups = Map.groupBy(skills, (skill) => skill.category)

    return Array.from(groups, ([category, groupSkills]) => ({ category, skills: groupSkills }))
  }
}
