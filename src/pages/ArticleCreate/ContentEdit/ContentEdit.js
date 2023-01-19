import { useMemo } from 'react'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import { useController } from 'react-hook-form'
import { HoveringToolbar } from './HoveringToolbar'
import { Leaf } from './Leaf'
import { toggleFormat } from './toggleFormat'
import classes from './ContentEdit.module.css'

export const ContentEdit = ({ control }) => {
  const { field } = useController({ control, name: 'content' })
  const editor = useMemo(() => withReact(createEditor()), [])

  return (
    <div className={classes.contentEdit} >
      <Slate
        editor={editor}
        value={[{
          type: 'paragraph',
          children: [
            {
              text:
                '',
            }],
        }]}
      >
        <HoveringToolbar />
        <Editable
          onChange={(nodes) => {
            console.log('nodes =', nodes)
          }}
          style={{ color: '#ffffff' }}
          renderLeaf={props => <Leaf {...props} />}
          placeholder="Текст статьи"
          onDOMBeforeInput={(event) => {
            switch (event.inputType) {
              case 'formatBold':
                event.preventDefault()

                return toggleFormat(editor, 'bold')
              case 'formatItalic':
                event.preventDefault()

                return toggleFormat(editor, 'italic')
              case 'formatUnderline':
                event.preventDefault()

                return toggleFormat(editor, 'underlined')
              default: break
            }
          }}
        />
      </Slate>
    </div>
  )
}
