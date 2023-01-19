import { Text, Transforms } from 'slate'
import { isFormatActive } from './isFormatActive'

export const toggleFormat = (editor, format) => {
  const isActive = isFormatActive(editor, format)

  Transforms.setNodes(
    editor,
    { [format]: isActive ? null : true },
    { match: Text.isText, split: true }
  )
}
