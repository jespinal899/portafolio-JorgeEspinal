import { AsyncContent } from '@/shared/components/common/async-content'
import { Section } from '@/shared/components/common/section'
import { SECTION_IDS } from '@/shared/config/sections'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { useI18n } from '@/shared/i18n/use-i18n'
import { useContactLinks } from '../hooks/use-contact-links'
import { ContactLinkCard } from './contact-link-card'

export function ContactSection() {
  const { t } = useI18n()
  const state = useContactLinks()

  return (
    <Section id={SECTION_IDS.contact} title={t.contact.title}>
      <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg">
        {t.contact.description}
      </p>
      <AsyncContent state={state} fallback={<Skeleton className="h-20 w-full" />}>
        {(links) => (
          <ul aria-label={t.contact.linksLabel} className="grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <li key={link.platform}>
                <ContactLinkCard link={link} />
              </li>
            ))}
          </ul>
        )}
      </AsyncContent>
    </Section>
  )
}
