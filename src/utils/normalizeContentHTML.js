import { trimFirstImage } from './trimFirstImage'

export const normalizeContentHTML = (html, { paragraphClassName = 'paragraph' } = {}) => {
  html = trimFirstImage(html)

  return html
    .split('\n')
    .map(line => {
      return `<p class="${paragraphClassName}">${line}</p>`
    })
    .join('\n')
}
