import type { Profile } from '@/core/entities'
import { Section } from '@/shared/components/common/section'
import { SECTION_IDS } from '@/shared/config/sections'
import { Button } from '@/shared/components/ui/button'

interface HeroContentProps {
  profile: Profile
}

export function HeroContent({ profile }: HeroContentProps) {
  return (
    <Section id={SECTION_IDS.hero} className="flex flex-col gap-4 py-16 sm:gap-5 sm:py-24 lg:py-28">
      <p className="text-sm text-muted-foreground sm:text-base">{profile.location}</p>
      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {profile.fullName}
      </h1>
      <p className="text-lg text-muted-foreground sm:text-xl">{profile.headline}</p>
      <p className="max-w-2xl text-base leading-relaxed sm:text-lg">{profile.summary}</p>
      <div className="flex flex-wrap gap-3 pt-2">
        {profile.socialLinks.map((link) => (
          <Button key={link.platform} variant="outline" size="lg" asChild>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </Button>
        ))}
      </div>
    </Section>
  )
}
