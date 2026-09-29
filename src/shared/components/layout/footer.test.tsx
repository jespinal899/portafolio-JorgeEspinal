import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/test/render-with-providers'
import { Footer } from './footer'

describe('Footer', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(new Date(2026, 8, 28))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the copyright notice with the current year', () => {
    // Arrange
    renderWithProviders(<Footer />)

    // Act
    const notice = screen.getByRole('contentinfo')

    // Assert
    expect(notice).toHaveTextContent('© 2026 Jorge Espinal. Todos los derechos reservados.')
  })

  it('translates the notice to English', () => {
    // Arrange
    renderWithProviders(<Footer />, { locale: 'en' })

    // Act
    const notice = screen.getByRole('contentinfo')

    // Assert
    expect(notice).toHaveTextContent('© 2026 Jorge Espinal. All rights reserved.')
  })
})
