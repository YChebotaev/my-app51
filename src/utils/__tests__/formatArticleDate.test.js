import { formatArticleDate } from '../formatArticleDate'

describe('formatArticleDate()', () => {
  const today = new Date()

  it('should return result for today', () => {
    const testDate = new Date(today.getFullYear(), today.getMonth(), today.getDay(), today.getHours(), today.getMinutes(), today.getSeconds())
    const result = formatArticleDate(testDate)

    expect(result).toBe(`Сегодня ${String(today.getHours()).padStart('0')}:${String(today.getMinutes()).padStart('0')}`)
  })

  it('should return result for yesterday', () => {
    const testDate = new Date(today.getFullYear(), today.getMonth(), today.getDay() - 1, today.getHours(), today.getMinutes(), today.getSeconds())
    const result = formatArticleDate(testDate)

    expect(result).toBe(`Вчера ${String(today.getHours()).padStart('0')}:${String(today.getMinutes()).padStart('0')}`)
  })

  it('should return result for day before yesterday', () => {
    const testDate = new Date(today.getFullYear(), today.getMonth(), today.getDay() - 2, today.getHours(), today.getMinutes(), today.getSeconds())
    const result = formatArticleDate(testDate)

    expect(result).toBe(`Позавчера ${String(today.getHours()).padStart('0')}:${String(today.getMinutes()).padStart('0')}`)
  })
})
