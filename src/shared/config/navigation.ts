import type { SECTION_IDS } from './sections'

export type SectionKey = keyof typeof SECTION_IDS

/** Secciones que aparecen en el menú, en orden. El texto de cada una sale del diccionario activo. */
export const NAV_SECTIONS: readonly SectionKey[] = [
  'hero',
  'experience',
  'education',
  'skills',
  'contact',
]
