import type { Project } from '@/core/entities'
import type { PortfolioRepository } from '@/core/repositories/portfolio.repository'
import { GetFeaturedProjectsUseCase } from '../get-featured-projects.use-case'

const buildProject = (overrides: Partial<Project> = {}): Project => ({
  id: 'project-1',
  title: 'Proyecto',
  description: 'Descripción',
  technologies: ['React'],
  featured: false,
  ...overrides,
})

const buildRepository = (projects: readonly Project[]): PortfolioRepository => ({
  getProfile: vi.fn(),
  getExperiences: vi.fn(),
  getSkills: vi.fn(),
  getProjects: vi.fn().mockResolvedValue(projects),
})

describe('GetFeaturedProjectsUseCase', () => {
  it('returns only featured projects', async () => {
    // Arrange
    const featured = buildProject({ id: 'featured', featured: true })
    const regular = buildProject({ id: 'regular', featured: false })
    const useCase = new GetFeaturedProjectsUseCase(buildRepository([featured, regular]))

    // Act
    const result = await useCase.execute()

    // Assert
    expect(result).toEqual([featured])
  })

  it('returns an empty list when no project is featured', async () => {
    // Arrange
    const useCase = new GetFeaturedProjectsUseCase(buildRepository([buildProject()]))

    // Act
    const result = await useCase.execute()

    // Assert
    expect(result).toHaveLength(0)
  })
})
