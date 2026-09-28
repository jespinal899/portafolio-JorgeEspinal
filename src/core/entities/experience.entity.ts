export interface Experience {
  readonly id: string
  readonly company: string
  readonly role: string
  readonly startDate: string
  /** `undefined` indica que es el puesto actual. */
  readonly endDate?: string
  readonly description: string
  readonly technologies: readonly string[]
}
