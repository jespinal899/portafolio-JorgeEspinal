import { sortByMostRecent } from './sort-by-most-recent'

describe('sortByMostRecent', () => {
  it('orders items from the most recent start date to the oldest', () => {
    // Arrange
    const items = [
      { id: 'oldest', startDate: '2020-03-01' },
      { id: 'newest', startDate: '2025-07-17' },
      { id: 'middle', startDate: '2022-11-15' },
    ]

    // Act
    const result = sortByMostRecent(items)

    // Assert
    expect(result.map((item) => item.id)).toEqual(['newest', 'middle', 'oldest'])
  })

  it('does not mutate the original list', () => {
    // Arrange
    const items = Object.freeze([
      { id: 'a', startDate: '2020-01-01' },
      { id: 'b', startDate: '2021-01-01' },
    ])

    // Act
    sortByMostRecent(items)

    // Assert
    expect(items.map((item) => item.id)).toEqual(['a', 'b'])
  })
})
