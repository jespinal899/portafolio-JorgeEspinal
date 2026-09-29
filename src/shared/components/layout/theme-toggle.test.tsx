import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@/test/render-with-providers'
import { ThemeToggle } from './theme-toggle'

describe('ThemeToggle', () => {
  it('turns the page dark when pressed in light mode', async () => {
    // Arrange
    const user = userEvent.setup()
    renderWithProviders(<ThemeToggle />, { theme: 'light' })

    // Act
    await user.click(screen.getByRole('button', { name: 'Activar tema oscuro' }))

    // Assert
    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: 'Activar tema claro' })).toBeInTheDocument()
  })

  it('turns the page light again when pressed in dark mode', async () => {
    // Arrange
    const user = userEvent.setup()
    renderWithProviders(<ThemeToggle />, { theme: 'dark' })

    // Act
    await user.click(screen.getByRole('button', { name: 'Activar tema claro' }))

    // Assert
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('remembers the chosen theme for the next visit', async () => {
    // Arrange
    const user = userEvent.setup()
    renderWithProviders(<ThemeToggle />, { theme: 'light' })

    // Act
    await user.click(screen.getByRole('button', { name: 'Activar tema oscuro' }))

    // Assert
    expect(window.localStorage.getItem('portfolio.theme')).toBe('dark')
  })
})
