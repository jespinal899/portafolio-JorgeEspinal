import type { SocialLink } from './social-link.entity'

export interface Profile {
  readonly fullName: string
  /** Lo que haces, en orden de importancia. Es lo primero que lee un reclutador. */
  readonly roles: readonly string[]
  /** Dato complementario que se muestra debajo de los roles (p. ej. los estudios en curso). */
  readonly tagline: string
  readonly summary: string
  readonly location: string
  readonly avatarUrl?: string
  readonly socialLinks: readonly SocialLink[]
}
