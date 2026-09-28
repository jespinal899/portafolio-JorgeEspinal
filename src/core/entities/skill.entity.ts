export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'mobile'
  | 'database'
  | 'infrastructure'
  | 'analytics'

export interface Skill {
  readonly name: string
  readonly category: SkillCategory
}

export interface SkillGroup {
  readonly category: SkillCategory
  readonly skills: readonly Skill[]
}
