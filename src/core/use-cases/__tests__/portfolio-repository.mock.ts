import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'

/** Crea un repositorio falso; cada método puede sobrescribirse por prueba. */
export const buildRepositoryMock = (
  overrides: Partial<PortfolioRepository> = {},
): PortfolioRepository => ({
  getProfile: vi.fn(),
  getExperiences: vi.fn().mockResolvedValue([]),
  getEducation: vi.fn().mockResolvedValue([]),
  getCertifications: vi.fn().mockResolvedValue([]),
  getProjects: vi.fn().mockResolvedValue([]),
  getSkills: vi.fn().mockResolvedValue([]),
  ...overrides,
})
