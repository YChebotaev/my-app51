import TextareaAutosize from 'react-textarea-autosize'
import { useController } from 'react-hook-form'
import classes from './BioEdit.module.css'

export const BioEdit = ({ control }) => {
  const { field } = useController({ control, name: 'description' })

  return (
    <div className={classes.bioEdit}>
      <div className={classes.beHeader}>Описание профиля (био)</div>
      <TextareaAutosize className={classes.beTextarea} {...field} placeholder="Описание профиля" />
    </div>
  )
}
