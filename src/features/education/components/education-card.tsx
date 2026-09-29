import { GraduationCapIcon } from 'lucide-react'
import type { Education } from '@/core/entities'
import { Badge } from '@/shared/components/ui/badge'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { useDateFormat } from '@/shared/i18n/use-date-format'
import { useI18n } from '@/shared/i18n/use-i18n'

interface EducationCardProps {
  education: Education
}

export function EducationCard({ education }: EducationCardProps) {
  const { t } = useI18n()
  const formatDate = useDateFormat()
  const inProgress = !education.endDate

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCapIcon aria-hidden="true" className="size-5 text-primary" />
          <h3>{education.degree}</h3>
        </CardTitle>
        <CardDescription>{education.institution}</CardDescription>
        {inProgress && (
          <CardAction>
            <Badge>{t.education.inProgress}</Badge>
          </CardAction>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-1 text-sm text-muted-foreground">
        <span>{education.location}</span>
        <time dateTime={education.startDate}>
          {formatDate.range(education.startDate, education.endDate)}
        </time>
      </CardContent>
    </Card>
  )
}
