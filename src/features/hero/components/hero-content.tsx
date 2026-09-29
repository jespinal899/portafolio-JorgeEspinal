import { ArrowRightIcon, GraduationCapIcon, MapPinIcon } from 'lucide-react'
import type { Profile } from '@/core/entities'
import { Section } from '@/shared/components/common/section'
import { SECTION_IDS } from '@/shared/config/sections'
import { Button } from '@/shared/components/ui/button'
import { useI18n } from '@/shared/i18n/use-i18n'

interface HeroContentProps {
  profile: Profile
}

/**
 * Primer bloque de la página: en pocos segundos debe responder quién eres y qué haces.
 * Orden de lectura: nombre → roles → estudios → resumen → llamada a la acción.
 */
export function HeroContent({ profile }: HeroContentProps) {
  const { t } = useI18n()

  return (
    <Section id={SECTION_IDS.hero} className="flex flex-col gap-4 py-16 sm:gap-5 sm:py-24 lg:py-28">
      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {profile.fullName}
      </h1>

      {/* Los separadores "|" son decorativos: un lector de pantalla anuncia una lista de roles. */}
      <ul
        aria-label={t.hero.rolesLabel}
        className="flex flex-wrap gap-x-3 gap-y-1 text-lg font-semibold text-primary sm:text-2xl"
      >
        {profile.roles.map((role) => (
          <li
            key={role}
            className="after:ml-3 after:font-normal after:text-muted-foreground after:content-['|'] last:after:content-none"
          >
            {role}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-1.5 text-sm text-muted-foreground sm:flex-row sm:gap-5 sm:text-base">
        <p className="flex items-center gap-2">
          <GraduationCapIcon aria-hidden="true" className="size-4 shrink-0" />
          {profile.tagline}
        </p>
        <p className="flex items-center gap-2">
          <MapPinIcon aria-hidden="true" className="size-4 shrink-0" />
          {profile.location}
        </p>
      </div>

      <p className="max-w-2xl text-base leading-relaxed sm:text-lg">{profile.summary}</p>

      <div className="pt-2">
        <Button size="lg" className="h-11 px-5 text-base" asChild>
          <a href={`#${SECTION_IDS.contact}`}>
            {t.hero.contactCta}
            <ArrowRightIcon aria-hidden="true" />
          </a>
        </Button>
      </div>
    </Section>
  )
}
