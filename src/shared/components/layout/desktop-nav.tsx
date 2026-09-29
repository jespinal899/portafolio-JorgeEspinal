import type { NavItem } from '@/shared/types/nav-item'
import { Button } from '@/shared/components/ui/button'
import { useI18n } from '@/shared/i18n/use-i18n'

interface DesktopNavProps {
  items: readonly NavItem[]
}

export function DesktopNav({ items }: DesktopNavProps) {
  const { t } = useI18n()

  return (
    <nav aria-label={t.nav.main} className="hidden md:block">
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
