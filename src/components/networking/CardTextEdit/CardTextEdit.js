import TextareaAutosize from 'react-textarea-autosize'
import { useController } from 'react-hook-form'
import classes from './CardTextEdit.module.css'

export const CardTextEdit = ({ control, name, title, inputPlaceholder }) => {
  const { field } = useController({ control, name })

  return (
    <div className={classes.cardTextEdit}>
      <div className={classes.cteHeader}>{title}</div>
      <TextareaAutosize className={classes.cteTextarea} {...field} placeholder={inputPlaceholder} />
    </div>
  )
}
