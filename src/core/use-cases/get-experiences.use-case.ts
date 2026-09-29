import type { Experience, Locale } from '@/core/entities'
import { sortByMostRecent } from '@/core/lib/sort-by-most-recent'
import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'

/** Devuelve la experiencia laboral ordenada de la más reciente a la más antigua. */
export class GetExperiencesUseCase {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  async execute(locale: Locale): Promise<readonly Experience[]> {
    return sortByMostRecent(await this.repository.getExperiences(locale))
  }
}
