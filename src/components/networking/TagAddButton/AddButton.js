import { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Popup } from './Popup'
import classes from './AddButton.module.css'
import { useApiClient } from '../../../hooks'

export const AddButton = ({ onAdd }) => {
  const apiClient = useApiClient()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const { data } = useQuery(['cards', 'tags'], async () => {
    const { data } = await apiClient.get('/cards/tags')

    return data
  })

  return (
    <div className={classes.abWrapper}>
      <button
        className={classes.addButton}
        onClick={(e) => {
          e.preventDefault()
          setIsPopupOpen(true)
        }}
      >+</button>
      {isPopupOpen && (
        <div className={classes.abPopupWrapper}>
          <Popup
            items={data}
            onAdd={onAdd}
            onClose={() => setIsPopupOpen(false)}
          />
        </div>
      )}
    </div>
  )
}
