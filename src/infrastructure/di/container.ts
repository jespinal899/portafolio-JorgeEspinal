import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'
import { GetFeaturedProjectsUseCase } from '@/core/use-cases/get-featured-projects.use-case'
import { GetProfileUseCase } from '@/core/use-cases/get-profile.use-case'
import { StaticPortfolioRepository } from '@/infrastructure/repositories/static-portfolio.repository'

/**
 * Composition root: único lugar donde se eligen las implementaciones concretas.
 */
const portfolioRepository: PortfolioRepository = new StaticPortfolioRepository()

export const container = {
  getProfile: new GetProfileUseCase(portfolioRepository),
  getFeaturedProjects: new GetFeaturedProjectsUseCase(portfolioRepository),
} as const
