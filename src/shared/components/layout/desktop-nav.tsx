import type { NavItem } from '@/shared/types/nav-item'
import { Button } from '@/shared/components/ui/button'

interface DesktopNavProps {
  items: readonly NavItem[]
}

export function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav aria-label="Principal" className="hidden md:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => (
          <li key={item.href}>
            <Button variant="ghost" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
