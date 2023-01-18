import { useState, useMemo } from 'react'
import classes from './Popup.module.css'

export const Popup = ({ items, onAdd, onClose }) => {
  const [searchString, setSearchString] = useState('')
  const foundItems = useMemo(() => {
    return items.filter(it => it.toLowerCase().includes(searchString.toLowerCase()))
  }, [searchString, items])

  return (
    <div className={classes.popup}>
      <div className={classes.popupInputWrapper}>
        <input
          autoFocus
          className={classes.popupInput}
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
        />
      </div>
      <div className={classes.popupListWrapper}>
        {foundItems.map(name => (
          <button
            key={name}
            className={classes.popupListItem}
            onClick={(e) => {
              e.preventDefault()

              onAdd(name)
              onClose()
            }}
          >{name}</button>
        ))}
      </div>
    </div>
  )
}
