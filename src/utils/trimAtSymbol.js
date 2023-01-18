export const trimAtSymbol = (username) => {
  if (username.startsWith('@')) return username.slice(1)

  return username
}
