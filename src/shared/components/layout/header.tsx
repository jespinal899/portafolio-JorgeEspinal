import { NAV_ITEMS } from '@/shared/config/navigation'
import { SECTION_IDS } from '@/shared/config/sections'
import { siteConfig } from '@/shared/config/site.config'
import { DesktopNav } from './desktop-nav'
import { MobileNav } from './mobile-nav'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
        <a href={`#${SECTION_IDS.hero}`} className="font-heading text-lg font-semibold tracking-tight">
          {siteConfig.title}
        </a>
        <DesktopNav items={NAV_ITEMS} />
        <MobileNav items={NAV_ITEMS} title={siteConfig.title} />
      </div>
    </header>
  )
}
