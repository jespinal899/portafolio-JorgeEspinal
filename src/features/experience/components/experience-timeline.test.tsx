import { render, screen, within } from '@testing-library/react'
import type { Experience } from '@/core/entities'
import { ExperienceTimeline } from './experience-timeline'

const buildExperience = (overrides: Partial<Experience> = {}): Experience => ({
  id: 'acme-dev',
  company: 'Acme',
  role: 'Desarrollador',
  startDate: '2025-07-17',
  description: 'Descripción del puesto',
  technologies: [],
  ...overrides,
})

const current = buildExperience({ id: 'current', role: 'Administrador de Sistemas' })
const previous = buildExperience({
  id: 'previous',
  role: 'Auxiliar Contable',
  startDate: '2022-11-01',
  endDate: '2024-04-01',
})

describe('ExperienceTimeline', () => {
  it('renders one timeline entry per experience, keeping the given order', () => {
    // Arrange
    render(<ExperienceTimeline experiences={[current, previous]} />)

    // Act
    const entries = within(screen.getByRole('list', { name: 'Trayectoria laboral' }))
      .getAllByRole('heading')
      .map((heading) => heading.textContent)

    // Assert
    expect(entries).toEqual(['Administrador de Sistemas', 'Auxiliar Contable'])
  })

  it('marks only the current position as the current step', () => {
    // Arrange
    const { container } = render(<ExperienceTimeline experiences={[current, previous]} />)

    // Act
    const currentEntries = container.querySelectorAll('[aria-current="step"]')

    // Assert
    expect(currentEntries).toHaveLength(1)
    expect(currentEntries[0]).toHaveTextContent('Administrador de Sistemas')
  })

  it('shows "Actualidad" for the current position and the full range for past ones', () => {
    // Arrange
    render(<ExperienceTimeline experiences={[current, previous]} />)

    // Act
    const currentPeriod = screen.getByText(/Actualidad/)
    const pastPeriod = screen.getByText(/nov.*2022 – abr.*2024/)

    // Assert
    expect(currentPeriod).toBeInTheDocument()
    expect(pastPeriod).toBeInTheDocument()
  })
})
