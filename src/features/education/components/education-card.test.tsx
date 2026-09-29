import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/test/render-with-providers'
import type { Education } from '@/core/entities'
import { EducationCard } from './education-card'

const buildEducation = (overrides: Partial<Education> = {}): Education => ({
  id: 'ceutec',
  institution: 'CEUTEC',
  degree: 'Ingeniería en Informática',
  location: 'San Pedro Sula, Honduras',
  startDate: '2022-01-01',
  ...overrides,
})

describe('EducationCard', () => {
  it('renders the degree as a heading and the institution', () => {
    // Arrange
    renderWithProviders(<EducationCard education={buildEducation()} />)

    // Act
    const heading = screen.getByRole('heading', { name: 'Ingeniería en Informática' })
    const institution = screen.getByText('CEUTEC')

    // Assert
    expect(heading).toBeInTheDocument()
    expect(institution).toBeInTheDocument()
  })

  it('flags studies without end date as "En curso"', () => {
    // Arrange
    renderWithProviders(<EducationCard education={buildEducation({ endDate: undefined })} />)

    // Act
    const badge = screen.getByText('En curso')
    const period = screen.getByText(/Actualidad/)

    // Assert
    expect(badge).toBeInTheDocument()
    expect(period).toBeInTheDocument()
  })

  it('does not flag finished studies as "En curso"', () => {
    // Arrange
    renderWithProviders(<EducationCard education={buildEducation({ endDate: '2026-12-01' })} />)

    // Act
    const badge = screen.queryByText('En curso')

    // Assert
    expect(badge).not.toBeInTheDocument()
  })
})
