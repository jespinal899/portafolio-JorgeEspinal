import type { Experience } from '@/core/entities'
import { GetExperiencesUseCase } from '../get-experiences.use-case'
import { buildRepositoryMock } from './portfolio-repository.mock'

const buildExperience = (overrides: Partial<Experience> = {}): Experience => ({
  id: 'experience-1',
  company: 'Empresa',
  role: 'Rol',
  startDate: '2024-01-01',
  description: 'Descripción',
  technologies: [],
  ...overrides,
})

describe('GetExperiencesUseCase', () => {
  it('returns experiences sorted from most recent to oldest', async () => {
    // Arrange
    const oldest = buildExperience({ id: 'oldest', startDate: '2020-03-01' })
    const newest = buildExperience({ id: 'newest', startDate: '2025-07-17' })
    const middle = buildExperience({ id: 'middle', startDate: '2022-11-15' })
    const repository = buildRepositoryMock({
      getExperiences: vi.fn().mockResolvedValue([oldest, newest, middle]),
    })
    const useCase = new GetExperiencesUseCase(repository)

    // Act
    const result = await useCase.execute()

    // Assert
    expect(result.map((experience) => experience.id)).toEqual(['newest', 'middle', 'oldest'])
  })

  it('does not mutate the list provided by the repository', async () => {
    // Arrange
    const source = Object.freeze([
      buildExperience({ id: 'a', startDate: '2020-01-01' }),
      buildExperience({ id: 'b', startDate: '2021-01-01' }),
    ])
    const useCase = new GetExperiencesUseCase(
      buildRepositoryMock({ getExperiences: vi.fn().mockResolvedValue(source) }),
    )

    // Act
    await useCase.execute()

    // Assert
    expect(source.map((experience) => experience.id)).toEqual(['a', 'b'])
  })
})
