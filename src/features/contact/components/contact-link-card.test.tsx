import { screen } from '@testing-library/react'
import type { SocialLink } from '@/core/entities'
import { renderWithProviders } from '@/test/render-with-providers'
import { ContactLinkCard } from './contact-link-card'

describe('ContactLinkCard', () => {
  it('links to the profile and shows a readable version of its url', () => {
    // Arrange
    const link: SocialLink = {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jorgeespinal/',
    }
    renderWithProviders(<ContactLinkCard link={link} />)

    // Act
    const anchor = screen.getByRole('link', { name: /LinkedIn/ })

    // Assert
    expect(anchor).toHaveAttribute('href', 'https://www.linkedin.com/in/jorgeespinal/')
    expect(anchor).toHaveTextContent('linkedin.com/in/jorgeespinal')
  })

  it('opens external profiles in a new tab and announces it', () => {
    // Arrange
    const link: SocialLink = { platform: 'github', label: 'GitHub', url: 'https://github.com/ada' }
    renderWithProviders(<ContactLinkCard link={link} />)

    // Act
    const anchor = screen.getByRole('link', { name: /GitHub/ })

    // Assert
    expect(anchor).toHaveAttribute('target', '_blank')
    expect(anchor).toHaveAccessibleName(/se abre en una pestaña nueva/)
  })

  it('keeps email links in the same tab', () => {
    // Arrange
    const link: SocialLink = { platform: 'email', label: 'Correo', url: 'mailto:ada@example.com' }
    renderWithProviders(<ContactLinkCard link={link} />)

    // Act
    const anchor = screen.getByRole('link', { name: /Correo/ })

    // Assert
    expect(anchor).not.toHaveAttribute('target')
    expect(anchor).toHaveTextContent('ada@example.com')
  })
})
