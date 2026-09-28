export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'website'

export interface SocialLink {
  readonly platform: SocialPlatform
  readonly label: string
  readonly url: string
}
