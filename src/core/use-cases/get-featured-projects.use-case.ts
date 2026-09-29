import type { Locale, Project } from '@/core/entities'
import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'

export class GetFeaturedProjectsUseCase {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  async execute(locale: Locale): Promise<readonly Project[]> {
    const projects = await this.repository.getProjects(locale)
    return projects.filter((project) => project.featured)
  }
}
