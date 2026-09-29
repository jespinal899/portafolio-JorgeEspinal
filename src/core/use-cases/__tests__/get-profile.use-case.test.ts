import type { Profile } from '@/core/entities'
import { GetProfileUseCase } from '../get-profile.use-case'
import { buildRepositoryMock } from './portfolio-repository.mock'

describe('GetProfileUseCase', () => {
  it('requests the profile in the given locale', async () => {
    // Arrange
    const profile = { fullName: 'Ada Lovelace' } as Profile
    const getProfile = vi.fn().mockResolvedValue(profile)
    const useCase = new GetProfileUseCase(buildRepositoryMock({ getProfile }))

    // Act
    const result = await useCase.execute('en')

    // Assert
    expect(getProfile).toHaveBeenCalledWith('en')
    expect(result).toBe(profile)
  })
})
