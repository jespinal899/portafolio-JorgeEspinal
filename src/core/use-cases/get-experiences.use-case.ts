import type { Experience } from '@/core/entities'
import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'

/** Devuelve la experiencia laboral ordenada de la más reciente a la más antigua. */
export class GetExperiencesUseCase {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  async execute(): Promise<readonly Experience[]> {
    const experiences = await this.repository.getExperiences()
    return [...experiences].sort((a, b) => b.startDate.localeCompare(a.startDate))
  }
}
