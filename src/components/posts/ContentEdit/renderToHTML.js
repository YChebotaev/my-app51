export const renderToHTML = (nodes) => {
  return nodes.map(({ type, children }) => {
    switch (type) {
      case 'paragraph':
        return children.map(({ text, bold, italic, underlined }) => {
          let result = text

          if (bold) result = `<b>${result}</b>`
          if (italic) result = `<i>${result}</i>`
          if (underlined) result = `<u>${result}</u>`

          return result
        })
          .join('')
      default: return undefined
    }
  })
    .filter(Boolean)
    .join('\n')
}
