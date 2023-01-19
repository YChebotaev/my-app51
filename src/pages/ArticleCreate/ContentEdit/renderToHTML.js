export const renderToHTML = (nodes) => {
  return nodes.map(({ type, children }) => {
    switch (type) {
      case 'paragraph':
        return children.map(({ text, bold, italic, underlined }) => {
          let result = text

          if (bold) result = `<strong>${result}</strong>`

          if (italic) result = `<em>${result}</em>`

          if (underlined) result = `<u>${result}</u>`

          return result
        }).join('')
      default: return '<br />'
    }
  }).join('\n')
}
