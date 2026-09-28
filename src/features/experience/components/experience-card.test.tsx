import { render, screen } from '@testing-library/react'
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
    render(<ExperienceCard experience={buildExperience()} />)

    // Act
    const heading = screen.getByRole('heading', { name: 'Desarrollador' })

    // Assert
    expect(heading).toBeInTheDocument()
  })

  it('shows "Actualidad" for a current position', () => {
    // Arrange
    render(<ExperienceCard experience={buildExperience({ endDate: undefined })} />)

    // Act
    const period = screen.getByText(/Actualidad/)

    // Assert
    expect(period).toBeInTheDocument()
  })

  it('lists every technology', () => {
    // Arrange
    render(<ExperienceCard experience={buildExperience()} />)

    // Act
    const technologies = screen.getByRole('list', { name: 'Tecnologías en Acme' })

    // Assert
    expect(technologies).toHaveTextContent('React')
    expect(technologies).toHaveTextContent('Node.js')
  })
})
