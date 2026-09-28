import type { SkillGroup } from '@/core/entities'
import { TagList } from '@/shared/components/common/tag-list'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { SKILL_CATEGORY_LABELS } from '../constants/skill-category-labels'

interface SkillGroupCardProps {
  group: SkillGroup
}

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  const label = SKILL_CATEGORY_LABELS[group.category]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <h3>{label}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TagList items={group.skills.map((skill) => skill.name)} label={`Habilidades de ${label}`} />
      </CardContent>
    </Card>
  )
}
