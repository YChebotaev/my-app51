import { useRef, useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Popup } from './Popup'
import classes from './AddButton.module.css'
import { useApiClient } from '../../../hooks'

export const AddButton = ({ onAdd }) => {
  const popupWrapperRef = useRef()
  const apiClient = useApiClient()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const { data } = useQuery(['cards', 'tags'], async () => {
    const { data } = await apiClient.get('/cards/tags')

    return data
  })

  useEffect(() => {
    const popupWrapper = popupWrapperRef.current

    if (!popupWrapper) return

    const handleClickOutside = (e) => {
      if (!popupWrapper.contains(e.target)) {
        setIsPopupOpen(false)
      }
    }

    setTimeout(() => {
      document.addEventListener('click', handleClickOutside, { passive: true })
    }, 0)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [popupWrapperRef, isPopupOpen])

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
        <div ref={popupWrapperRef} className={classes.abPopupWrapper}>
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
