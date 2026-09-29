import { screen, within } from '@testing-library/react'
import type { Profile } from '@/core/entities'
import { renderWithProviders } from '@/test/render-with-providers'
import { HeroContent } from './hero-content'

const profile: Profile = {
  fullName: 'Ada Lovelace',
  roles: ['Administradora de Sistemas', 'Soporte TI', 'Desarrollo de Software'],
  tagline: 'Estudiante de Ingeniería',
  summary: 'Resumen',
  location: 'Londres',
  socialLinks: [{ platform: 'github', label: 'GitHub', url: 'https://github.com/ada' }],
}

describe('HeroContent', () => {
  it('renders the full name as the main heading', () => {
    // Arrange
    renderWithProviders(<HeroContent profile={profile} />)

    // Act
    const heading = screen.getByRole('heading', { level: 1 })

    // Assert
    expect(heading).toHaveTextContent('Ada Lovelace')
  })

  it('lists every professional role, in order', () => {
    // Arrange
    renderWithProviders(<HeroContent profile={profile} />)

    // Act
    const roles = within(screen.getByRole('list', { name: 'Roles profesionales' }))
      .getAllByRole('listitem')
      .map((item) => item.textContent)

    // Assert
    expect(roles).toEqual(['Administradora de Sistemas', 'Soporte TI', 'Desarrollo de Software'])
  })

  it('shows the studies as secondary information', () => {
    // Arrange
    renderWithProviders(<HeroContent profile={profile} />)

    // Act
    const tagline = screen.getByText('Estudiante de Ingeniería')

    // Assert
    expect(tagline).toBeInTheDocument()
  })

  it('offers a call to action that leads to the contact section', () => {
    // Arrange
    renderWithProviders(<HeroContent profile={profile} />)

    // Act
    const cta = screen.getByRole('link', { name: 'Contactarme' })

    // Assert
    expect(cta).toHaveAttribute('href', '#contacto')
  })

  it('leaves the social links to the contact section', () => {
    // Arrange
    renderWithProviders(<HeroContent profile={profile} />)

    // Act
    const githubLink = screen.queryByRole('link', { name: /GitHub/ })

    // Assert
    expect(githubLink).not.toBeInTheDocument()
  })
})
