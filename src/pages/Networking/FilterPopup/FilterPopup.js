import { useEffect, useCallback, useRef } from 'react'
import { useNetworkingContext } from '../useNetworkingContext'
import classes from './FilterPopup.module.css'

export const FilterPopup = () => {
  const {
    filterButtonRef,
    possibleFilters,
    onFilterPopupClose,
    onAddFilter
  } = useNetworkingContext()
  const ref = useRef()
  const recalculateStyles = useCallback(() => {
    const el = ref.current
    const targetEl = filterButtonRef.current

    console.log({el, targetEl})

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
    document.addEventListener('click', handleClickOutside, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [filterButtonRef, onFilterPopupClose, recalculateStyles])

  return (
    <div ref={ref} className={classes.filterPopup}>
      {possibleFilters.map(filter => (
        <button key={filter.id} className={classes.fpFilter} onClick={() => onAddFilter(filter)}>
          <div className={classes.fpfLeft}>
            {filter.name}
          </div>
          <div className={classes.fpfRight}>+</div>
        </button>
      ))}
    </div>
  )
}
