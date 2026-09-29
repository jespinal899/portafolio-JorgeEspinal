import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/test/render-with-providers'
import { LanguageSwitcher } from './language-switcher'

describe('LanguageSwitcher', () => {
  it('offers English while the page is in Spanish', () => {
    // Arrange
    renderWithProviders(<LanguageSwitcher />, { locale: 'es' })

    // Act
    const button = screen.getByRole('button', { name: 'Cambiar idioma a inglés' })

    // Assert
    expect(button).toHaveTextContent('EN')
  })

  it('switches the page to English when pressed', async () => {
    // Arrange
    const user = userEvent.setup()
    renderWithProviders(<LanguageSwitcher />, { locale: 'es' })

    // Act
    await user.click(screen.getByRole('button', { name: 'Cambiar idioma a inglés' }))

    // Assert
    expect(screen.getByRole('button', { name: 'Switch language to Spanish' })).toHaveTextContent('ES')
    expect(document.documentElement.lang).toBe('en')
  })

  it('remembers the chosen language for the next visit', async () => {
    // Arrange
    const user = userEvent.setup()
    renderWithProviders(<LanguageSwitcher />, { locale: 'es' })

    // Act
    await user.click(screen.getByRole('button', { name: 'Cambiar idioma a inglés' }))

    // Assert
    expect(window.localStorage.getItem('portfolio.locale')).toBe('en')
  })
})
