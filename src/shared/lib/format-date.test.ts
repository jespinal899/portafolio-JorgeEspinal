import { formatDateRange, formatMonthYear } from './format-date'

describe('formatMonthYear', () => {
  it('formats an ISO date as abbreviated month and year in Spanish', () => {
    // Arrange
    const isoDate = '2025-07-17'

    // Act
    const result = formatMonthYear(isoDate)

    // Assert
    expect(result).toMatch(/jul.*2025/)
  })

  it('keeps the first day of the month in the same month', () => {
    // Arrange
    const isoDate = '2025-07-01'

    // Act
    const result = formatMonthYear(isoDate)

    // Assert
    expect(result).toMatch(/jul/)
  })
})

describe('formatDateRange', () => {
  it('uses "Actualidad" when there is no end date', () => {
    // Arrange
    const startDate = '2025-07-17'

    // Act
    const result = formatDateRange(startDate)

    // Assert
    expect(result).toMatch(/2025 – Actualidad$/)
  })

  it('formats both dates when an end date is provided', () => {
    // Arrange
    const startDate = '2020-01-15'
    const endDate = '2022-06-30'

    // Act
    const result = formatDateRange(startDate, endDate)

    // Assert
    expect(result).toMatch(/ene.*2020 – jun.*2022/)
  })
})
