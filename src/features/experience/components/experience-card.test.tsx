import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/test/render-with-providers'
import type { Experience } from '@/core/entities'
import { ExperienceCard } from './experience-card'

const buildExperience = (overrides: Partial<Experience> = {}): Experience => ({
  id: 'acme-dev',
  company: 'Acme',
  role: 'Desarrollador',
  startDate: '2025-07-17',
  description: 'Descripción del puesto',
  technologies: ['React', 'Node.js'],
  ...overrides,
})

describe('ExperienceCard', () => {
  it('renders the role as a heading', () => {
    // Arrange
    renderWithProviders(<ExperienceCard experience={buildExperience()} />)

    // Act
    const heading = screen.getByRole('heading', { name: 'Desarrollador' })

    // Assert
    expect(heading).toBeInTheDocument()
  })

  it('shows the company name', () => {
    // Arrange
    renderWithProviders(<ExperienceCard experience={buildExperience()} />)

    // Act
    const company = screen.getByText('Acme')

    // Assert
    expect(company).toBeInTheDocument()
  })

  it('lists every technology', () => {
    // Arrange
    renderWithProviders(<ExperienceCard experience={buildExperience()} />)

    // Act
    const technologies = screen.getByRole('list', { name: 'Tecnologías en Acme' })

    // Assert
    expect(technologies).toHaveTextContent('React')
    expect(technologies).toHaveTextContent('Node.js')
  })
})
