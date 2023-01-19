import { Editor } from 'slate'

export const isFormatActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n[format] === true,
    mode: 'all'
  })

  return Boolean(match)
}
