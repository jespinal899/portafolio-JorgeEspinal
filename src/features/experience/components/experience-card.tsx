import type { Experience } from '@/core/entities'
import { TagList } from '@/shared/components/common/tag-list'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { useI18n } from '@/shared/i18n/use-i18n'

interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { t } = useI18n()

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
        <TagList
          items={experience.technologies}
          label={t.experience.technologiesAt(experience.company)}
        />
      </CardContent>
    </Card>
  )
}
