import { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import classes from './Notification.module.css'

export const Notification = ({ isOpen, icon, text, onClose }) => {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const style = useSpring({
    immediate: isFirstRender,
    from: isOpen ? {
      opacity: 0,
      pointerEvents: 'none'
    } : {
      opacity: 1,
      pointerEvents: 'auto'
    },
    to: isOpen ? {
      opacity: 1,
      pointerEvents: 'auto'
    } : {
      opacity: 0,
      pointerEvents: 'none'
    }
  })

  useEffect(() => {
    setIsFirstRender(false)
  }, [])

  return (
    <animated.div style={style} className={classes.notification} onClick={isOpen ? onClose : null}>
      {icon && (
        <div>
          {icon}
        </div>
      )}
      {text && <div className={classes.notificationText}>{text}</div>}
    </animated.div>
  )
}
