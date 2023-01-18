import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './BlockedBackdrop.module.css'

export const BlockedBackdrop = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [])

  return (
    <div className={classes.blockedBackdrop}>
      <div className={classes.bbText}>
        Для просмотра карточек экспертов необходимо зарегистрироваться
      </div>
      <button
        className={classes.bbButton}
        onClick={() => navigate('/networking/create')}
      >Создать свою карточку</button>
    </div>
  )
}
