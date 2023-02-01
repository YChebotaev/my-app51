import { SaxParser } from 'sax-parser'

const parseLine = (html) => {
  let root

  const parser = new SaxParser(cb => {
    cb.onStartDocument(() => {
      root = {
        type: 'paragraph',
        children: []
      }
    })
    cb.onCharacters((text) => {
      root.children.push({ text })
    })
    cb.onEndElementNS((el) => {
      const last = root.children[root.children.length - 1]

      if (!last) return

      switch (el) {
        case 'strong':
          last.bold = true
        break
        case 'em':
          last.italic = true
        break
        case 'u':
          last.underlined = true
        break
        default: break
      }
    })
  })

  parser.parseString(html)

  return root
}

export const parseEditorHTML = (html) => {
  if (html === '') return undefined

  return html.split('\n').map(parseLine)
}
