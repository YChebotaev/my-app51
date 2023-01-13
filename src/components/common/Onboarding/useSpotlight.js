import { useEffect, useCallback } from 'react'
import { useOnboardingInternal } from './useOnboardingInternal'

export const useSpotlight = ({ mainWrapperRef, translateY } = {}) => {
  const { page, spotlightRef, spotlightedRef } = useOnboardingInternal()

  const recalculateStyles = useCallback(() => {
    const spotlightDiv = spotlightRef.current
    const spotlightedEl = spotlightedRef.current
    const spotlightedRect = spotlightedEl?.getBoundingClientRect()

    if (spotlightedEl) {
      Object.assign(spotlightDiv.style, {
        position: 'relative',
        display: 'block',
        top: `${spotlightedRect.top + (translateY ?? 0)}px`,
        left: `${spotlightedRect.left}px`,
        width: `${spotlightedRect.width}px`,
        height: `${spotlightedRect.height}px`
      })
    }

    return { spotlightedEl, spotlightDiv }
  }, [spotlightRef, spotlightedRef, translateY])

  useEffect(() => {
    const mainWrapperEl = mainWrapperRef?.current
    const { spotlightedEl, spotlightDiv } = recalculateStyles()
    const resizeHandler = () => recalculateStyles()
    const scrollHandler = () => recalculateStyles()

    window.addEventListener('resize', resizeHandler, { passive: true })
    window.addEventListener('scroll', scrollHandler, { passive: true })

    if (mainWrapperEl) {
      mainWrapperEl.style.transform = `translate(0, ${translateY}px)`;
    }

    return () => {
      window.removeEventListener('resize', resizeHandler)
      window.removeEventListener('scroll', scrollHandler)

      if (spotlightedEl) {
        spotlightDiv.style.display = 'none'
        spotlightDiv.style.removeProperty('position')
        spotlightDiv.style.removeProperty('top')
        spotlightDiv.style.removeProperty('left')
        spotlightDiv.style.removeProperty('width')
        spotlightDiv.style.removeProperty('height')
      }

      if (mainWrapperEl) {
        mainWrapperEl.style.removeProperty('transform')
      }
    }
  }, [page, spotlightRef, spotlightedRef, mainWrapperRef, translateY, recalculateStyles])
}