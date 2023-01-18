import { useState, useMemo } from 'react'
import { Popup } from './Popup'
import classes from './AddButton.module.css'

export const AddButton = ({ onAdd }) => {
  const items = useMemo(() => ['Дизайн', 'Финтех'], [])
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <div className={classes.abWrapper}>
      <button className={classes.addButton} onClick={() => setIsPopupOpen(true)}>+</button>
      {isPopupOpen && (
        <div className={classes.abPopupWrapper}>
          <Popup
            items={items}
            onAdd={onAdd}
            onClose={() => setIsPopupOpen(false)}
          />
        </div>
      )}
    </div>
  )
}
