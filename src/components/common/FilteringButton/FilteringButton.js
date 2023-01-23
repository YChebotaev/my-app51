import { useRef, useState } from 'react'
import cn from 'classnames'
import { FilterPopup } from './FilterPopup'
import { Filtering } from './Filtering'
import classes from './FilteringButton.module.css'

export const FilteringButton = ({
  activeFilters,
  possibleFilters,
  className,
  onDeleteFilter,
  onAddFilter,
}) => {
  const filterButtonRef = useRef()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cn(classes.wrapper, className)}>
      <Filtering
        filterButtonRef={filterButtonRef}
        activeFilters={activeFilters}
        onDeleteFilter={onDeleteFilter}
        onFilterPopupOpen={() => setIsOpen(true)}
      />
      {isOpen && (
        <FilterPopup
          filterButtonRef={filterButtonRef}
          possibleFilters={possibleFilters}
          onAddFilter={onAddFilter}
          onFilterPopupClose={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
