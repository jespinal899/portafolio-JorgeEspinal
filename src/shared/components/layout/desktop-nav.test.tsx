import { screen, within } from '@testing-library/react'
import { renderWithProviders } from '@/test/render-with-providers'
import type { NavItem } from '@/shared/types/nav-item'
import { DesktopNav } from './desktop-nav'

describe('DesktopNav', () => {
  it('renders one link per navigation item, in order', () => {
    // Arrange
    const items: NavItem[] = [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Habilidades', href: '#habilidades' },
    ]
    renderWithProviders(<DesktopNav items={items} />)

    // Act
    const links = within(screen.getByRole('navigation', { name: 'Principal' })).getAllByRole('link')

    // Assert
    expect(links.map((link) => link.getAttribute('href'))).toEqual(['#inicio', '#habilidades'])
  })
})
