import { closestIndexTo, format } from 'date-fns'

export const formatArticleDate = (date) => {
  const today = new Date()
  const closestDayIndex = closestIndexTo(date, [
    new Date(today.getFullYear(), today.getMonth(), today.getDay(), today.getHours(), today.getMinutes(), today.getSeconds()), // Сегодня
    new Date(today.getFullYear(), today.getMonth(), today.getDay() - 1, today.getHours(), today.getMinutes(), today.getSeconds()), // Вчера
    new Date(today.getFullYear(), today.getMonth(), today.getDay() - 2, today.getHours(), today.getMinutes(), today.getSeconds()), // Позавчера
    new Date(today.getFullYear(), today.getMonth(), today.getDay() - 3, today.getHours(), today.getMinutes(), today.getSeconds()), // Плейсхолдер
  ])

  if (closestDayIndex <= 2) {
    switch (closestDayIndex) {
      case 0: return 'Сегодня ' + format(date, 'HH:mm')
      case 1: return 'Вчера ' + format(date, 'HH:mm')
      case 2: return 'Позавчера ' + format(date, 'HH:mm')
      default: return ''
    }
  } else {
    return format(date, 'd.M.yyyy HH:mm')
  }
}
