import { useState, useEffect } from 'react'

export const useWindowMeasure = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const resizeHandler = () => {
      const { innerWidth, innerHeight } = window

      setWidth(innerWidth)
      setHeight(innerHeight)
    }

    window.addEventListener('resize', resizeHandler, { passive: true })

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return [width, height]
}
