import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import classes from './Networking.module.css'
import { getFullName, getBackendUrl } from '../../../utils'

export const Networking = forwardRef(
  (_, ref) => {
    const { data = [] } = useQuery(['cards', 'three_last_cards'])

    console.log('data =', data)

    return (
      <Link ref={ref} to="/networking" className={classes.networking}>
        <div className={classes.supertitle}>Нетворкинг</div>
        <div className={classes.cards}>
          {data.map(({ id, author_username, first_name, surname, description, card_profile_img }) => (
            <div key={id} className={classes.card}>
              <div className={classes.cardAvatar} style={{ backgroundImage: `url("${getBackendUrl() + card_profile_img}")` }} />
              <div className={classes.cardTitle}>{getFullName(first_name, surname) ?? author_username}</div>
              <div className={classes.cardSubtitle}>{description}</div>
            </div>
          ))}
        </div>
      </Link>
    )
  }
)
