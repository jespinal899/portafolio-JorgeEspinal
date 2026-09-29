import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/test/render-with-providers'
import type { SkillGroup } from '@/core/entities'
import { SkillGroupCard } from './skill-group-card'

const group: SkillGroup = {
  category: 'database',
  skills: [{ name: 'SQL Server', category: 'database' }],
}

describe('SkillGroupCard', () => {
  it('renders the translated category label as heading', () => {
    // Arrange
    renderWithProviders(<SkillGroupCard group={group} />)

    // Act
    const heading = screen.getByRole('heading', { name: 'Bases de datos' })

    // Assert
    expect(heading).toBeInTheDocument()
  })

  it('lists the skills of the group', () => {
    // Arrange
    renderWithProviders(<SkillGroupCard group={group} />)

    // Act
    const skills = screen.getByRole('list', { name: 'Habilidades de Bases de datos' })

    // Assert
    expect(skills).toHaveTextContent('SQL Server')
  })

  it('translates the category label to English', () => {
    // Arrange
    renderWithProviders(<SkillGroupCard group={group} />, { locale: 'en' })

    // Act
    const heading = screen.getByRole('heading', { name: 'Databases' })

    // Assert
    expect(heading).toBeInTheDocument()
  })
})
