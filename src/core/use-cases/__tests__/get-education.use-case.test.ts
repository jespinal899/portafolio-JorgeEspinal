import type { Education } from '@/core/entities'
import { GetEducationUseCase } from '../get-education.use-case'
import { buildRepositoryMock } from './portfolio-repository.mock'

const buildEducation = (overrides: Partial<Education> = {}): Education => ({
  id: 'education-1',
  institution: 'Universidad',
  degree: 'Licenciatura',
  location: 'Ciudad',
  startDate: '2020-01-01',
  ...overrides,
})

describe('GetEducationUseCase', () => {
  it('returns education sorted from most recent to oldest', async () => {
    // Arrange
    const highSchool = buildEducation({ id: 'high-school', startDate: '2016-02-01' })
    const university = buildEducation({ id: 'university', startDate: '2022-01-01' })
    const useCase = new GetEducationUseCase(
      buildRepositoryMock({ getEducation: vi.fn().mockResolvedValue([highSchool, university]) }),
    )

    // Act
    const result = await useCase.execute('es')

    // Assert
    expect(result.map((education) => education.id)).toEqual(['university', 'high-school'])
  })
})
