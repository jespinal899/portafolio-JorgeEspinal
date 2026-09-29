import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/test/render-with-providers'
import type { Certification } from '@/core/entities'
import { CertificationCard } from './certification-card'

describe('CertificationCard', () => {
  it('renders issuer and date when they are provided', () => {
    // Arrange
    const certification: Certification = {
      id: 'power-bi',
      name: 'Power BI Intermedio',
      issuer: 'Academia',
      issueDate: '2024-03-01',
    }
    renderWithProviders(<CertificationCard certification={certification} />)

    // Act
    const details = screen.getByText(/Academia · mar.*2024/)

    // Assert
    expect(details).toBeInTheDocument()
  })

  it('renders only the name when issuer and date are missing', () => {
    // Arrange
    renderWithProviders(<CertificationCard certification={{ id: 'power-bi', name: 'Power BI Intermedio' }} />)

    // Act
    const heading = screen.getByRole('heading', { name: 'Power BI Intermedio' })
    const credentialLink = screen.queryByRole('link', { name: /Ver credencial/ })

    // Assert
    expect(heading).toBeInTheDocument()
    expect(credentialLink).not.toBeInTheDocument()
  })

  it('links to the credential when a url is provided', () => {
    // Arrange
    const certification: Certification = {
      id: 'power-bi',
      name: 'Power BI Intermedio',
      credentialUrl: 'https://example.com/credential',
    }
    renderWithProviders(<CertificationCard certification={certification} />)

    // Act
    const link = screen.getByRole('link', { name: /Ver credencial/ })

    // Assert
    expect(link).toHaveAttribute('href', 'https://example.com/credential')
  })
})
