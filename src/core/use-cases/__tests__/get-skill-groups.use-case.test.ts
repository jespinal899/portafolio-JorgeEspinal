import type { Skill } from '@/core/entities'
import { GetSkillGroupsUseCase } from '../get-skill-groups.use-case'
import { buildRepositoryMock } from './portfolio-repository.mock'

describe('GetSkillGroupsUseCase', () => {
  it('groups skills by category preserving first-appearance order', async () => {
    // Arrange
    const skills: Skill[] = [
      { name: 'React', category: 'frontend' },
      { name: 'SQL Server', category: 'database' },
      { name: 'Next.js', category: 'frontend' },
    ]
    const useCase = new GetSkillGroupsUseCase(
      buildRepositoryMock({ getSkills: vi.fn().mockResolvedValue(skills) }),
    )

    // Act
    const result = await useCase.execute('es')

    // Assert
    expect(result).toEqual([
      { category: 'frontend', skills: [skills[0], skills[2]] },
      { category: 'database', skills: [skills[1]] },
    ])
  })

  it('returns no groups when there are no skills', async () => {
    // Arrange
    const useCase = new GetSkillGroupsUseCase(buildRepositoryMock())

    // Act
    const result = await useCase.execute('es')

    // Assert
    expect(result).toEqual([])
  })
})
