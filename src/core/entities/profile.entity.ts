import type { SocialLink } from './social-link.entity'

export interface Profile {
  readonly fullName: string
  readonly headline: string
  readonly summary: string
  readonly location: string
  readonly avatarUrl?: string
  readonly socialLinks: readonly SocialLink[]
}
