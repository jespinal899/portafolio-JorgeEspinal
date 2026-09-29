import { detectTheme } from './theme'

describe('detectTheme', () => {
  it('prefers the theme the visitor chose before', () => {
    // Arrange
    const stored = 'light'
    const prefersDark = true

    // Act
    const result = detectTheme(stored, prefersDark)

    // Assert
    expect(result).toBe('light')
  })

  it('follows the operating system when nothing was chosen', () => {
    // Arrange
    const prefersDark = true

    // Act
    const result = detectTheme(null, prefersDark)

    // Assert
    expect(result).toBe('dark')
  })

  it('ignores an invalid stored value', () => {
    // Arrange
    const stored = 'sepia'

    // Act
    const result = detectTheme(stored, false)

    // Assert
    expect(result).toBe('light')
  })
})
