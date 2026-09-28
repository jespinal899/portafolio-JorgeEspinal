import { AsyncContent } from '@/shared/components/common/async-content'
import { Section } from '@/shared/components/common/section'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { useExperiences } from '../hooks/use-experiences'
import { ExperienceCard } from './experience-card'

export function ExperienceSection() {
  const state = useExperiences()

  return (
    <Section id="experiencia" title="Experiencia">
      <AsyncContent state={state} fallback={<Skeleton className="h-48 w-full" />}>
        {(experiences) => (
          <ol className="flex flex-col gap-6">
            {experiences.map((experience) => (
              <li key={experience.id}>
                <ExperienceCard experience={experience} />
              </li>
            ))}
          </ol>
        )}
      </AsyncContent>
    </Section>
  )
}
