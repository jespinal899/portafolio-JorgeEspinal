import type { Locale, Profile } from '@/core/entities'
import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'

export class GetProfileUseCase {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  execute(locale: Locale): Promise<Profile> {
    return this.repository.getProfile(locale)
  }
}
