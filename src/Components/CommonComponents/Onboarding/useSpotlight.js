import { useEffect, useCallback } from 'react'
import { useOnboardingInternal } from './useOnboardingInternal'

export const useSpotlight = () => {
  const { page, spotlightRef, spotlightedRef } = useOnboardingInternal()

  const recalculateStyles = useCallback(() => {
    const spotlightDiv = spotlightRef.current
    const spotlightedEl = spotlightedRef.current
    const spotlightedRect = spotlightedEl?.getBoundingClientRect()

    if (spotlightedEl) {
      Object.assign(spotlightDiv.style, {
        position: 'relative',
        display: 'block',
        top: `${spotlightedRect.top}px`,
        left: `${spotlightedRect.left}px`,
        width: `${spotlightedRect.width}px`,
        height: `${spotlightedRect.height}px`
      })
    }

    return { spotlightedEl, spotlightDiv }
  }, [spotlightRef, spotlightedRef])

  useEffect(() => {
    const { spotlightedEl, spotlightDiv } = recalculateStyles()
    const resizeHandler = () => recalculateStyles()

    window.addEventListener('resize', resizeHandler, { passive: true })

    return () => {
      window.removeEventListener('resize', resizeHandler)

      if (spotlightedEl) {
        spotlightDiv.style.display = 'none'
        spotlightDiv.style.removeProperty('position')
        spotlightDiv.style.removeProperty('top')
        spotlightDiv.style.removeProperty('left')
        spotlightDiv.style.removeProperty('width')
        spotlightDiv.style.removeProperty('height')
      }
    }
  }, [page, spotlightRef, spotlightedRef, recalculateStyles])
}