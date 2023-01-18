import { useController } from 'react-hook-form'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { $generateHtmlFromNodes } from '@lexical/html'
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import classes from './ContentEditor.module.css'
import { RootNode } from 'lexical';

export const ContentEditor = ({ control, name }) => {
  const { field } = useController({ control, name })

  return (
    <div className={classes.ceWrapper}>
      <LexicalComposer
        initialConfig={{
          namespace: 'ArticleCreate',
          nodes: [RootNode],
          onError(e) { console.error(e) }
        }}
      >
        <PlainTextPlugin
          placeholder={(
            <div className={classes.cePlaceholder}>Текст статьи</div>
          )}
          contentEditable={
            <ContentEditable className={classes.contentEditor} />
          }
          ErrorBoundary={LexicalErrorBoundary}
          onFocus={() => console.log('1234')}
        />
        <OnChangePlugin onChange={(state, editor) => {
          const html = $generateHtmlFromNodes(editor)

          field.onChange(html)
        }} />
      </LexicalComposer>
    </div>
  )
}
