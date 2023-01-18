import { useState } from 'react'
import cn from 'classnames'
import { useMutation } from '@tanstack/react-query'
import TextareaAutosize from 'react-textarea-autosize'
import classes from './Bio.module.css'
import { useApiClient } from '../../../../hooks'

export const Bio = ({ initialValue }) => {
  const apiClient = useApiClient()
  const [isEditMode, setIsEditMode] = useState(false)
  const [value, setValue] = useState(initialValue)
  const { mutate, isLoading } = useMutation(['cards', 'update_card'], async ({ description }) => {
    const data = await apiClient.post('/cards/update_card', { description })

    return data
  }, {
    onSettled() {
      setIsEditMode(false)
    }
  })

  if (isEditMode) {
    return (
      <div className={cn(classes.bio, classes.editBio)} onClick={() => setIsEditMode(true)}>
        <TextareaAutosize
          autoFocus
          disabled={isLoading}
          className={classes.bioInput}
          placeholder='Введите описание'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        {isLoading ? null : (
          <div className={classes.ebActions}>
            <button className={cn(classes.ebAction, classes.ebaSave)} onClick={() => {
              mutate({ description: value })
            }} />
            <button className={cn(classes.ebAction, classes.ebaCancel)} onClick={() => {
              setIsEditMode(false)
              setValue(initialValue)
            }} />
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div className={classes.bio} onClick={() => setIsEditMode(true)}>
        <div className={classes.bioText}>{initialValue}</div>
        <button className={classes.bioEditButton} onClick={() => setIsEditMode(true)} />
      </div>
    )
  }
}
