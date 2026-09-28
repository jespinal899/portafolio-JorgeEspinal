export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'tools' | 'soft'

export interface Skill {
  readonly name: string
  readonly category: SkillCategory
}
