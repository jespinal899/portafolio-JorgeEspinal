import { render, screen } from '@testing-library/react'
import type { Profile } from '@/core/entities'
import { HeroContent } from './hero-content'

const profile: Profile = {
  fullName: 'Ada Lovelace',
  headline: 'Software Developer',
  summary: 'Resumen',
  location: 'Londres',
  socialLinks: [{ platform: 'github', label: 'GitHub', url: 'https://github.com/ada' }],
}

describe('HeroContent', () => {
  it('renders the full name as the main heading', () => {
    // Arrange
    render(<HeroContent profile={profile} />)

    // Act
    const heading = screen.getByRole('heading', { level: 1 })

    // Assert
    expect(heading).toHaveTextContent('Ada Lovelace')
  })

  it('renders each social link pointing to its url', () => {
    // Arrange
    render(<HeroContent profile={profile} />)

    // Act
    const link = screen.getByRole('link', { name: 'GitHub' })

    // Assert
    expect(link).toHaveAttribute('href', 'https://github.com/ada')
  })
})
