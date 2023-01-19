import { useState } from 'react'
import cn from 'classnames'
// import { useMutation } from '@tanstack/react-query'
import TextareaAutosize from 'react-textarea-autosize'
import { useController } from 'react-hook-form'
import classes from './Description.module.css'
// import { useApiClient } from '../../../../hooks'

export const Description = ({ control }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const { field } = useController({ control, name: 'description' })

  if (isEditMode) {
    return (
      <div className={cn(classes.description, classes.editDescription)} onClick={() => setIsEditMode(true)}>
        <TextareaAutosize
          {...field}
          autoFocus
          className={classes.descriptionInput}
          placeholder='Введите описание'
          onBlur={(e) => {
            setIsEditMode(false)
            field.onBlur(e)
          }}
        />
      </div>
    )
  } else {
    return (
      <div className={classes.description} onClick={() => setIsEditMode(true)}>
        <div className={classes.descriptionText}>{field.value ? field.value : 'Введите описание'}</div>
        <button className={classes.descriptionEditButton} onClick={() => setIsEditMode(true)} />
      </div>
    )
  }
}
