import { useEffect, useRef } from 'react'

export const Marquee = ({ speed, text, offset }) => {
  const ref = useRef()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')

    let width = canvas.width = window.innerWidth
    const height = canvas.height = 20

    const resizeHandler = () => {
      width = canvas.width = window.innerWidth
    }

    let ts = new Date()
    let startOffset = 0

    const draw = () => {
      const now = new Date()
      const dt = now - ts
      ts = now
      startOffset = startOffset + speed * (dt / 1000)

      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0,0, width, height)

      const textWidth = ctx.measureText(text).width
      const times = Math.ceil(width / textWidth)

      for (let i=0; i<times; i++) {
        ctx.fillStyle = '#f25353'
        ctx.font = 'bold 14px Gilroy'

        ctx.fillText(
          text,
          (textWidth * i) + (offset * i) - (startOffset % (textWidth + offset)),
          15
        )
      }

      requestAnimationFrame(draw)
    }

    const afd = requestAnimationFrame(draw)
    window.addEventListener('resize', resizeHandler, { passive: true })

    return () => {
      cancelAnimationFrame(afd)
      window.removeEventListener('resize', resizeHandler)
    }
  }, [ref])

  return <canvas ref={ref} />
}