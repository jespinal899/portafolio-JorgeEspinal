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

interface MobileNavProps {
  items: readonly NavItem[]
  title: string
}

export function MobileNav({ items, title }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menú">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription className="sr-only">Navegación entre las secciones</SheetDescription>
        </SheetHeader>
        <nav aria-label="Menú móvil" className="px-4">
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
