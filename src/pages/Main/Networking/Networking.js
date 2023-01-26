import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { Skeleton } from '../../../components/common/Skeleton'
import classes from './Networking.module.css'

export const Networking = forwardRef(
  (_, ref) => (
    <Link ref={ref} to="/networking" className={classes.networking}>
      <div className={classes.supertitle}>Нетворкинг</div>
      <div className={classes.cards}>
        <div className={classes.card}>
          <Skeleton className={classes.cardAvatar} />
          <div className={classes.cardTitle}>Вася Пупкин 🧑🏻‍🏫</div>
          <div className={classes.cardSubtitle}>Преподаватель чего-то там</div>
        </div>
        <div className={classes.card}>
          <Skeleton className={classes.cardAvatar} />
          <div className={classes.cardTitle}>Вася Пупкин 🧑🏻‍🏫</div>
          <div className={classes.cardSubtitle}>Преподаватель чего-то там</div>
        </div>
        <div className={classes.card}>
          <Skeleton className={classes.cardAvatar} />
          <div className={classes.cardTitle}>Вася Пупкин 🧑🏻‍🏫</div>
          <div className={classes.cardSubtitle}>Преподаватель чего-то там</div>
        </div>
      </div>
    </Link>
  )
)
