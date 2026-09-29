import { displayUrl } from './display-url'

describe('displayUrl', () => {
  it('removes the protocol, the www prefix and the trailing slash', () => {
    // Arrange
    const url = 'https://www.linkedin.com/in/jorgeespinal/'

    // Act
    const result = displayUrl(url)

    // Assert
    expect(result).toBe('linkedin.com/in/jorgeespinal')
  })

  it('keeps only the address of a mailto link', () => {
    // Arrange
    const url = 'mailto:hola@example.com'

    // Act
    const result = displayUrl(url)

    // Assert
    expect(result).toBe('hola@example.com')
  })
})
