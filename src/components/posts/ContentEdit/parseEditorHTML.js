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
        case 'b':
          last.bold = true
        break
        case 'em':
        case 'i':
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

const isEmptyParagraphShape = ({ type, children }) => {
  if (type === 'paragraph') {
    return Array.isArray(children) ? children.length === 0 : false
  }
}

export const parseEditorHTML = (html) => {
  if (html === '') return undefined

  return html
    .trim()
    .split('\n')
    .filter(line => line.trim())
    .map((line) => ({
      text: line,
      data: parseLine(line)
    }))
    .map(({ text, data }) => {
      if (isEmptyParagraphShape(data)) {
        const { children } = data
    
        children[0] = { text }
      }
  
      return { text, data }
    })
    .map(({ data }) => data)
}
