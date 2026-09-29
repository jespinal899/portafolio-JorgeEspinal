import { DEFAULT_LOCALE, detectLocale } from './detect-locale'

describe('detectLocale', () => {
  it('prefers the locale the visitor chose before', () => {
    // Arrange
    const stored = 'en'
    const browserLanguages = ['es-HN']

    // Act
    const result = detectLocale(stored, browserLanguages)

    // Assert
    expect(result).toBe('en')
  })

  it('falls back to the first supported browser language, ignoring the region', () => {
    // Arrange
    const browserLanguages = ['fr-FR', 'en-US', 'es-HN']

    // Act
    const result = detectLocale(null, browserLanguages)

    // Assert
    expect(result).toBe('en')
  })

  it('ignores an invalid stored value', () => {
    // Arrange
    const stored = 'de'

    // Act
    const result = detectLocale(stored, ['es-ES'])

    // Assert
    expect(result).toBe('es')
  })

  it('uses the default locale when no language is supported', () => {
    // Arrange
    const browserLanguages = ['fr-FR', 'pt-BR']

    // Act
    const result = detectLocale(null, browserLanguages)

    // Assert
    expect(result).toBe(DEFAULT_LOCALE)
  })
})
