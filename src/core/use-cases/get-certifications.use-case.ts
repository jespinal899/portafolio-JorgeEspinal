import type { Certification, Locale } from '@/core/entities'
import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'

/**
 * Devuelve las certificaciones de la más reciente a la más antigua.
 * Las que no tienen fecha van al final, en el orden en que se registraron.
 */
export class GetCertificationsUseCase {
  private readonly repository: PortfolioRepository

  constructor(repository: PortfolioRepository) {
    this.repository = repository
  }

  async execute(locale: Locale): Promise<readonly Certification[]> {
    const certifications = await this.repository.getCertifications(locale)

    return [...certifications].sort((a, b) => {
      if (!a.issueDate || !b.issueDate) return Number(!a.issueDate) - Number(!b.issueDate)
      return b.issueDate.localeCompare(a.issueDate)
    })
  }
}
