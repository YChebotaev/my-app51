export const trimFirstImage = (html) => {
  if (html.startsWith('<img')) {
    const closeTagIndex = html.indexOf('>')

    return html.slice(closeTagIndex + 1).trim()
  }

  return html
}
