import type { Education, Locale } from '@/core/entities'
import { sortByMostRecent } from '@/core/lib/sort-by-most-recent'
import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'

/** Devuelve la formación académica ordenada de la más reciente a la más antigua. */
export class GetEducationUseCase {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  async execute(locale: Locale): Promise<readonly Education[]> {
    return sortByMostRecent(await this.repository.getEducation(locale))
  }
}
