import { ArrowUpRightIcon } from 'lucide-react'
import type { SocialLink } from '@/core/entities'
import { Card } from '@/shared/components/ui/card'
import { useI18n } from '@/shared/i18n/use-i18n'
import { displayUrl } from '@/shared/lib/display-url'
import { PlatformIcon } from './platform-icon'

interface ContactLinkCardProps {
  link: SocialLink
}

export function ContactLinkCard({ link }: ContactLinkCardProps) {
  const { t } = useI18n()
  // Los perfiles externos se abren en otra pestaña; un `mailto:` abre el cliente de correo.
  const isExternal = /^https?:\/\//.test(link.url)

  return (
    <a
      href={link.url}
      {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
      className="group block h-full rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Card className="h-full flex-row items-center gap-4 px-4 transition-shadow group-hover:ring-primary sm:px-5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
          <PlatformIcon platform={link.platform} className="size-5" />
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="font-heading text-base font-semibold">{link.label}</span>
          <span className="truncate text-sm text-muted-foreground">{displayUrl(link.url)}</span>
        </span>
        <ArrowUpRightIcon
          aria-hidden="true"
          className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
        {isExternal && <span className="sr-only">{t.contact.opensInNewTab}</span>}
      </Card>
    </a>
  )
}
