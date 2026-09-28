import type { Experience } from '@/core/entities'
import { ExperienceTimelineItem } from './experience-timeline-item'

interface ExperienceTimelineProps {
  experiences: readonly Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    // `border-l` es la línea vertical; en escritorio se deja espacio a la izquierda para las fechas.
    <ol aria-label="Trayectoria laboral" className="ml-2 flex flex-col gap-10 border-l md:ml-48">
      {experiences.map((experience) => (
        <ExperienceTimelineItem key={experience.id} experience={experience} />
      ))}
    </ol>
  )
}
