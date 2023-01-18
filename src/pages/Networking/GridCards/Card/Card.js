import { useNavigate } from 'react-router-dom'
import { Profession } from '../../../../components/networking/Profession'
import { getFullName, trimAtSymbol } from '../../../../utils'
import { CardAvatar } from '../../../../components/networking/CardAvatar'
import classes from './Card.module.css'

export const Card = ({ card: {
  id,
  author_username,
  first_name,
  surname,
  raiting,
  description,
  aprroval_status,
  role,
  proffesion,
  first_tag,
  second_tag,
  third_tag,
  chat_open,
  card_profile_img,
}}) => {
  const navigate = useNavigate()
  const fullName = getFullName(first_name, surname)

  return (
    <div className={classes.cardWrapper}>
      <div className={classes.card}>
        <CardAvatar
          src={card_profile_img}
          className={classes.cardAvatar}
          skeletonClassName={classes.cardAvatarSkeleton}
        />
        <div className={classes.cardDetails}>
          <div className={classes.cardName}>{fullName}</div>
          <Profession profession={proffesion} />
          <div className={classes.cardBio}>{description}</div>
          <div className={classes.cardTags}>
            {first_tag && <div className={classes.cardTag}>{first_tag}</div>}
            {second_tag && <div className={classes.cardTag}>{second_tag}</div>}
            {third_tag && <div className={classes.cardTag}>{third_tag}</div>}
          </div>
          <div className={classes.cardActions}>
              <button
                className={classes.cardAction}
                onClick={(e) => {
                  e.preventDefault()

                  navigate(`/networking/${trimAtSymbol(author_username)}`)
                }}
              >Написать письмо</button>
              {chat_open === 'available' && (
                <button
                  className={classes.cardAction}
                  onClick={(e) => {
                    e.preventDefault()

                    window.open(`https://t.me/${trimAtSymbol(author_username)}`, '_blank')
                  }}
                >Начать чат</button>
              )}
            </div>
        </div>
      </div>
      <div className={classes.cardPlace}>#{raiting}</div>
    </div>
  )
}
