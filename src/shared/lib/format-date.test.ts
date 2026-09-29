import { formatDateRange, formatMonthYear } from './format-date'

describe('formatMonthYear', () => {
  it('formats an ISO date as abbreviated month and year in Spanish', () => {
    // Arrange
    const isoDate = '2025-07-17'

    // Act
    const result = formatMonthYear(isoDate, 'es')

    // Assert
    expect(result).toMatch(/jul.*2025/)
  })

  it('formats an ISO date as abbreviated month and year in English', () => {
    // Arrange
    const isoDate = '2022-11-01'

    // Act
    const result = formatMonthYear(isoDate, 'en')

    // Assert
    expect(result).toBe('Nov 2022')
  })

  it('keeps the first day of the month in the same month', () => {
    // Arrange
    const isoDate = '2025-07-01'

    // Act
    const result = formatMonthYear(isoDate, 'es')

    // Assert
    expect(result).toMatch(/jul/)
  })
})

describe('formatDateRange', () => {
  it('uses the present label when there is no end date', () => {
    // Arrange
    const options = { locale: 'en', presentLabel: 'Present' } as const

    // Act
    const result = formatDateRange('2025-07-17', undefined, options)

    // Assert
    expect(result).toBe('Jul 2025 – Present')
  })

  it('formats both dates when an end date is provided', () => {
    // Arrange
    const options = { locale: 'es', presentLabel: 'Actualidad' } as const

    // Act
    const result = formatDateRange('2020-01-15', '2022-06-30', options)

    // Assert
    expect(result).toMatch(/ene.*2020 – jun.*2022/)
  })
})
