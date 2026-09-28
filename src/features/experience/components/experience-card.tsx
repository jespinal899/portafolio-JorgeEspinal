import type { Experience } from '@/core/entities'
import { TagList } from '@/shared/components/common/tag-list'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { formatDateRange } from '@/shared/lib/format-date'

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h3>{experience.role}</h3>
        </CardTitle>
        <CardDescription className="flex flex-col gap-1 sm:flex-row sm:justify-between">
          <span>{experience.company}</span>
          <time dateTime={experience.startDate}>
            {formatDateRange(experience.startDate, experience.endDate)}
          </time>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>{experience.description}</p>
        <TagList items={experience.technologies} label={`Tecnologías en ${experience.company}`} />
      </CardContent>
    </Card>
  )
}
