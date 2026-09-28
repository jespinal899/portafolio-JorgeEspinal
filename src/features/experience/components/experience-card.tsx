import type { Experience } from '@/core/entities'
import { TagList } from '@/shared/components/common/tag-list'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card'

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
        <CardDescription>{experience.company}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>{experience.description}</p>
        <TagList items={experience.technologies} label={`Tecnologías en ${experience.company}`} />
      </CardContent>
    </Card>
  )
}
