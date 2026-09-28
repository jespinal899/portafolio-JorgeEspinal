import type { NavItem } from '@/shared/types/nav-item'
import { SECTION_IDS } from './sections'

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Inicio', href: `#${SECTION_IDS.hero}` },
  { label: 'Experiencia', href: `#${SECTION_IDS.experience}` },
  { label: 'Habilidades', href: `#${SECTION_IDS.skills}` },
]
