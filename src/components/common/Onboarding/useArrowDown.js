import { useEffect, useCallback } from 'react'

export const useArrowDown = ({
  left,
  spotlightRef,
  textWrapperRef,
  arrowRef
}) => {
  const recalculateStyles = useCallback(() => {
    const spotlightDiv = spotlightRef.current
    const textWrapperEl = textWrapperRef.current
    const arrowEl = arrowRef.current

    if (spotlightDiv && textWrapperEl && arrowEl) {
      const spotlightRect = spotlightDiv.getBoundingClientRect()
      const textWrapperRect = textWrapperEl.getBoundingClientRect()
      const height = spotlightRect.top - (textWrapperRect.top + textWrapperRect.height) + 40
      const width = height * 1.0970149254

      Object.assign(arrowEl.style, {
        position: 'absolute',
        top: `${textWrapperRect.top + textWrapperRect.height - 20}px`,
        left,
        width: `${width}px`,
        height: `${height}px`
      })
    }
  }, [spotlightRef, textWrapperRef, arrowRef, left])

  useEffect(() => {
    recalculateStyles()
    const resizeHandler = () => recalculateStyles()

    window.addEventListener('resize', resizeHandler, { passive: true })

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [spotlightRef, textWrapperRef, arrowRef, left, recalculateStyles])
}
