export interface Education {
  readonly id: string
  readonly institution: string
  readonly degree: string
  readonly location: string
  readonly startDate: string
  /** `undefined` indica que los estudios están en curso. */
  readonly endDate?: string
}
