import { StaticPortfolioRepository } from './static-portfolio.repository'

describe('StaticPortfolioRepository', () => {
  it('returns the profile headline in English when requested', async () => {
    // Arrange
    const repository = new StaticPortfolioRepository()

    // Act
    const profile = await repository.getProfile('en')

    // Assert
    expect(profile.headline).toMatch(/Systems Administrator/)
  })

  it('returns the profile headline in Spanish when requested', async () => {
    // Arrange
    const repository = new StaticPortfolioRepository()

    // Act
    const profile = await repository.getProfile('es')

    // Assert
    expect(profile.headline).toMatch(/Administrador de Sistemas/)
  })

  it('never leaks untranslated `{ es, en }` objects into the entities', async () => {
    // Arrange
    const repository = new StaticPortfolioRepository()

    // Act
    const content = await Promise.all([
      repository.getProfile('en'),
      repository.getExperiences('en'),
      repository.getEducation('en'),
      repository.getCertifications('en'),
      repository.getSkills('en'),
    ])

    // Assert
    expect(JSON.stringify(content)).not.toMatch(/"es":/)
  })
})
