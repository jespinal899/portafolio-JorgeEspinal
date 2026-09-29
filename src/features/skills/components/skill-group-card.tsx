import type { SkillGroup } from '@/core/entities'
import { TagList } from '@/shared/components/common/tag-list'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { useI18n } from '@/shared/i18n/use-i18n'

interface SkillGroupCardProps {
  group: SkillGroup
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  const { t } = useI18n()
  const label = t.skills.categories[group.category]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <h3>{label}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TagList items={group.skills.map((skill) => skill.name)} label={t.skills.skillsIn(label)} />
      </CardContent>
    </Card>
  )
}
