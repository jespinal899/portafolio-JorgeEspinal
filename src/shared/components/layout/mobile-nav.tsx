import { MenuIcon } from 'lucide-react'
import type { NavItem } from '@/shared/types/nav-item'
import { Button } from '@/shared/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet'
import { useI18n } from '@/shared/i18n/use-i18n'

interface MobileNavProps {
  items: readonly NavItem[]
  title: string
}

export function MobileNav({ items, title }: MobileNavProps) {
  const { t } = useI18n()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={t.nav.openMenu}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription className="sr-only">{t.nav.menuDescription}</SheetDescription>
        </SheetHeader>
        <nav aria-label={t.nav.mobile} className="px-4">
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                {/* SheetClose cierra el menú al elegir una sección. */}
                <SheetClose asChild>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href={item.href}>{item.label}</a>
                  </Button>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
