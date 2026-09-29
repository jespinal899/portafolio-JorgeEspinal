export interface Certification {
  readonly id: string
  readonly name: string
  readonly issuer?: string
  readonly issueDate?: string
  /** Enlace para verificar la credencial. */
  readonly credentialUrl?: string
}
