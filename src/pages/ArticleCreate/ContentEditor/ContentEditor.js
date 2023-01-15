import { useController } from 'react-hook-form'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import classes from './ContentEditor.module.css'
import { RootNode } from 'lexical';

export const ContentEditor = ({ control, name }) => {
  const { field } = useController({ control, name })

  return (
    <LexicalComposer
      initialConfig={{
        namespace: 'ArticleCreate',
        nodes: [RootNode],
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
