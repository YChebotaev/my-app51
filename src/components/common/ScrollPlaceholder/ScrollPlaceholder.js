import { useRef, useMemo, useEffect } from 'react'

export const ScrollPlaceholder = ({ onEnter, disabled }) => {
  const ref = useRef(null)
  const observer = useMemo(() => {
    return new IntersectionObserver(
      (entries) => {
        const { isIntersecting } = entries[0]

        if (isIntersecting && !disabled) {
          onEnter()
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0,
      },
    )
  }, [onEnter, disabled])

  useEffect(() => {
    const { current } = ref

    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [ref, observer])

  return <div ref={ref} />
}
