export const getFullName = (firstName, surname) => {
  if (firstName && surname) {
    return `${firstName} ${surname}`
  } else
    if (firstName) {
      return firstName
    } else
      if (surname) {
        return surname
      } else {
        return null
      }
}
