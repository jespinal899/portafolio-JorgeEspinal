import { GlobeIcon, MailIcon } from 'lucide-react'
import type { ComponentType } from 'react'
import type { SocialPlatform } from '@/core/entities'
import { GithubIcon, LinkedinIcon } from '@/shared/components/icons/brand-icons'

/** `Record` obliga a asignar un ícono a cada plataforma nueva que se agregue al dominio. */
const PLATFORM_ICONS: Record<SocialPlatform, ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
  website: GlobeIcon,
}

interface PlatformIconProps {
  platform: SocialPlatform
  className?: string
}

export function PlatformIcon({ platform, className }: PlatformIconProps) {
  const Icon = PLATFORM_ICONS[platform]
  return <Icon aria-hidden="true" className={className} />
}
