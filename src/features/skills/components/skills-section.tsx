import { AsyncContent } from '@/shared/components/common/async-content'
import { Section } from '@/shared/components/common/section'
import { SECTION_IDS } from '@/shared/config/sections'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { useSkillGroups } from '../hooks/use-skill-groups'
import { SkillGroupCard } from './skill-group-card'

export function SkillsSection() {
  const state = useSkillGroups()

  return (
    <Section id={SECTION_IDS.skills} title="Habilidades">
      <AsyncContent state={state} fallback={<Skeleton className="h-40 w-full" />}>
        {(groups) => (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <li key={group.category}>
                <SkillGroupCard group={group} />
              </li>
            ))}
          </ul>
        )}
      </AsyncContent>
    </Section>
  )
}
