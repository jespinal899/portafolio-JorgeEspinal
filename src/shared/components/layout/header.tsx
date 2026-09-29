import { NAV_SECTIONS } from '@/shared/config/navigation'
import { SECTION_IDS } from '@/shared/config/sections'
import { siteConfig } from '@/shared/config/site.config'
import { useI18n } from '@/shared/i18n/use-i18n'
import type { NavItem } from '@/shared/types/nav-item'
import { DesktopNav } from './desktop-nav'
import { LanguageSwitcher } from './language-switcher'
import { MobileNav } from './mobile-nav'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  const { t } = useI18n()
  const navItems: NavItem[] = NAV_SECTIONS.map((section) => ({
    label: t.nav.sections[section],
    href: `#${SECTION_IDS[section]}`,
  }))

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-2 px-4">
        <a href={`#${SECTION_IDS.hero}`} className="font-heading text-lg font-semibold tracking-tight">
          {siteConfig.title}
        </a>
        <div className="flex items-center gap-1">
          <DesktopNav items={navItems} />
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileNav items={navItems} title={siteConfig.title} />
        </div>
      </div>
    </header>
  )
}
