import { AsyncContent } from '@/shared/components/common/async-content'
import { Section } from '@/shared/components/common/section'
import { SECTION_IDS } from '@/shared/config/sections'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { useExperiences } from '../hooks/use-experiences'
import { ExperienceTimeline } from './experience-timeline'

export function ExperienceSection() {
  const state = useExperiences()

  return (
    <Section id={SECTION_IDS.experience} title="Experiencia">
      <AsyncContent state={state} fallback={<Skeleton className="h-48 w-full" />}>
        {(experiences) => <ExperienceTimeline experiences={experiences} />}
      </AsyncContent>
    </Section>
  )
}
