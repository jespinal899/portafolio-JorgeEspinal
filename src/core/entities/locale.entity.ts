/** Idiomas en los que se puede presentar el contenido del portafolio. */
export const LOCALES = ['es', 'en'] as const

export type Locale = (typeof LOCALES)[number]
