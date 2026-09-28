export interface Project {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly technologies: readonly string[]
  readonly repositoryUrl?: string
  readonly demoUrl?: string
  readonly imageUrl?: string
  readonly featured: boolean
}
