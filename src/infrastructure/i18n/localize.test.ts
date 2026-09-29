import { localize, type Translatable } from './localize'

interface Job {
  role: string
  company: string
  endDate?: string
  tags: readonly string[]
}

const job: Translatable<Job> = {
  role: { es: 'Auxiliar Contable', en: 'Accounting Assistant' },
  company: 'Grupo Elcatex',
  tags: ['SAP', { es: 'Auditoría interna', en: 'Internal audit' }],
}

describe('localize', () => {
  it('picks the requested language for every translatable field', () => {
    // Arrange
    const locale = 'en'

    // Act
    const result = localize<Job>(job, locale)

    // Assert
    expect(result).toEqual({
      role: 'Accounting Assistant',
      company: 'Grupo Elcatex',
      tags: ['SAP', 'Internal audit'],
    })
  })

  it('keeps fixed values untouched in any language', () => {
    // Arrange
    const locale = 'es'

    // Act
    const result = localize<Job>(job, locale)

    // Assert
    expect(result.company).toBe('Grupo Elcatex')
    expect(result.tags[0]).toBe('SAP')
  })

  it('resolves translations inside lists of records', () => {
    // Arrange
    const jobs: Translatable<readonly Job[]> = [job, { ...job, role: 'Contador' }]

    // Act
    const result = localize<readonly Job[]>(jobs, 'es')

    // Assert
    expect(result.map((item) => item.role)).toEqual(['Auxiliar Contable', 'Contador'])
  })
})
