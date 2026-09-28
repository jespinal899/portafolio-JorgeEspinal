import type { Profile } from '@/core/entities'
import { Section } from '@/shared/components/common/section'
import { SECTION_IDS } from '@/shared/config/sections'
import { Button } from '@/shared/components/ui/button'

interface HeroContentProps {
  profile: Profile
}

export function HeroContent({ profile }: HeroContentProps) {
  return (
    <Section id={SECTION_IDS.hero} className="flex flex-col gap-4 py-24">
      <p className="text-muted-foreground">{profile.location}</p>
      <h1 className="font-heading text-5xl font-bold tracking-tight">{profile.fullName}</h1>
      <p className="text-xl text-muted-foreground">{profile.headline}</p>
      <p className="max-w-2xl">{profile.summary}</p>
      <div className="flex gap-2">
        {profile.socialLinks.map((link) => (
          <Button key={link.platform} variant="outline" asChild>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </Button>
        ))}
      </div>
    </Section>
  )
}
