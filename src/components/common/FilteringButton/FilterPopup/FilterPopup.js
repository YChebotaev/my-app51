import { useEffect, useCallback, useRef } from 'react'
import classes from './FilterPopup.module.css'

export const FilterPopup = ({
  filterButtonRef,
  possibleFilters,
  onFilterPopupClose,
  onAddFilter
}) => {
  const ref = useRef()
  const recalculateStyles = useCallback(() => {
    const el = ref.current
    const targetEl = filterButtonRef.current

    if (el && targetEl) {
      const targetRect = targetEl.getBoundingClientRect()

      Object.assign(el.style, {
        left: `${targetRect.left}px`,
        top: `${targetRect.top + targetRect.height}px`,
        width: `calc(100vw - ${targetRect.left * 4}px)`
      })
    }
  }, [filterButtonRef])

  useEffect(() => {
    recalculateStyles()

    const handleResize = () => recalculateStyles()
    const handleScroll = () => recalculateStyles()
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onFilterPopupClose()
      }
    }

    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    setTimeout(() => {
      document.addEventListener('click', handleClickOutside, { passive: true })
    }, 0)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [filterButtonRef, onFilterPopupClose, recalculateStyles])

  return (
    <div ref={ref} className={classes.filterPopup}>
      {possibleFilters.length === 0 ? (
        <p style={{ color: '#ffffff' }}>Нет фильтров для выбора</p>
      ) : (
        possibleFilters.map(filter => (
          <button key={filter} className={classes.fpFilter} onClick={() => onAddFilter(filter)}>
            <div className={classes.fpfLeft}>
              {filter}
            </div>
            <div className={classes.fpfRight}>+</div>
          </button>
        ))
      )}
    </div>
  )
}
