import type { Experience } from '@/core/entities'
import { useDateFormat } from '@/shared/i18n/use-date-format'
import { cn } from '@/shared/lib/utils'
import { ExperienceCard } from './experience-card'

interface ExperienceTimelineItemProps {
  experience: Experience
}

/**
 * Un punto en la línea de tiempo. La línea vertical la dibuja el `<ol>` contenedor;
 * aquí solo se posiciona el marcador sobre ella y la fecha a su izquierda (en escritorio)
 * o encima de la tarjeta (en móvil).
 */
export function ExperienceTimelineItem({ experience }: ExperienceTimelineItemProps) {
  const formatDate = useDateFormat()
  const isCurrent = !experience.endDate

  return (
    <li className="relative pl-6 sm:pl-8" aria-current={isCurrent ? 'step' : undefined}>
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-1 -left-2 size-4 rounded-full border-2 border-primary',
          isCurrent ? 'bg-primary ring-4 ring-primary/20' : 'bg-background',
        )}
      />
      <time
        dateTime={experience.startDate}
        className="mb-3 block text-sm font-medium text-muted-foreground md:absolute md:top-0.5 md:right-full md:mr-10 md:mb-0 md:w-40 md:text-right md:text-[0.9375rem]"
      >
        {formatDate.range(experience.startDate, experience.endDate)}
      </time>
      <ExperienceCard experience={experience} />
    </li>
  )
}
