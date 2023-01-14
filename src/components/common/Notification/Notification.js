import { useSpring, animated } from '@react-spring/web'
import classes from './Notification.module.css'

export const Notification = ({ isOpen, icon, text }) => {
  const style = useSpring({
    from: { opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? 'none' : 'auto' },
    to: { opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }
  })

  return (
    <animated.div style={style} className={classes.notification}>
      {icon && (
        <div>
          {icon}
        </div>
      )}
      {text && <div className={classes.notificationText}>{text}</div>}
    </animated.div>
  )
}
