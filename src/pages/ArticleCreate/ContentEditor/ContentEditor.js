import { useController } from 'react-hook-form'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import classes from './ContentEditor.module.css'

export const ContentEditor = ({ control, name }) => {
  const { field } = useController({ control, name })

  return (
    <LexicalComposer
      initialConfig={{
        namespace: 'ArticleCreate',
        onError(e) { console.error(e) }
      }}
    >
      <PlainTextPlugin
        contentEditable={
          <ContentEditable className={classes.contentEditor} />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
    </LexicalComposer>
  )
}
