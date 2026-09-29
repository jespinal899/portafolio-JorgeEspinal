import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/test/render-with-providers'
import userEvent from '@testing-library/user-event'
import type { NavItem } from '@/shared/types/nav-item'
import { MobileNav } from './mobile-nav'

const items: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Experiencia', href: '#experiencia' },
]

describe('MobileNav', () => {
  it('keeps the menu closed until the hamburger button is pressed', () => {
    // Arrange
    renderWithProviders(<MobileNav items={items} title="Jorge Espinal" />)

    // Act
    const menu = screen.queryByRole('navigation', { name: 'Menú móvil' })

    // Assert
    expect(menu).not.toBeInTheDocument()
  })

  it('shows every section link after opening the menu', async () => {
    // Arrange
    const user = userEvent.setup()
    renderWithProviders(<MobileNav items={items} title="Jorge Espinal" />)

    // Act
    await user.click(screen.getByRole('button', { name: 'Abrir menú' }))

    // Assert
    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '#inicio')
    expect(screen.getByRole('link', { name: 'Experiencia' })).toHaveAttribute('href', '#experiencia')
  })

  it('closes the menu after choosing a section', async () => {
    // Arrange
    const user = userEvent.setup()
    renderWithProviders(<MobileNav items={items} title="Jorge Espinal" />)
    await user.click(screen.getByRole('button', { name: 'Abrir menú' }))

    // Act
    await user.click(screen.getByRole('link', { name: 'Experiencia' }))

    // Assert
    expect(screen.queryByRole('navigation', { name: 'Menú móvil' })).not.toBeInTheDocument()
  })
})
