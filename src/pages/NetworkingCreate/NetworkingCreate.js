import { useEffect } from 'react'
// import { useMutation } from '@tanstack/react-query'
import { Networking } from '../Networking'
import classes from './NetworkingCreate.module.css'

export const NetworkingCreate = () => {
  const mutate = () => null

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [])

  return (
    <div className={classes.networkingCreate}>
      <Networking />
      <div className={classes.ncBackdrop}>
        <div className={classes.ncbText}>Для просмотра карточек экспертов необходимо зарегистрироваться</div>
        <button className={classes.ncbButton} onClick={() => mutate()}>Создать свою карточку</button>
      </div>
    </div>
  )
}
