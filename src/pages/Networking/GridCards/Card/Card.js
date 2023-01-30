import { Link, useNavigate } from 'react-router-dom'
import cn from 'classnames'
import { Profession } from '../../../../components/networking/Profession'
import { getFullName, trimAtSymbol } from '../../../../utils'
import { CardAvatar } from '../../../../components/networking/CardAvatar'
import { CardTags } from '../../../../components/networking/CardTags'
import classes from './Card.module.css'

export const Card = ({
  card: {
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
  },
  onAddFilter
}) => {
  const navigate = useNavigate()
  const fullName = getFullName(first_name, surname)

  return (
    <div className={classes.cardWrapper}>
      <div className={cn(classes.cardBackground, proffesion === 'profesor' && classes.cbRare)}>
        <div className={classes.card}>
          <CardAvatar
            src={card_profile_img}
            className={classes.cardAvatar}
            skeletonClassName={classes.cardAvatarSkeleton}
          />
          <div className={classes.cardDetails}>
            <Link to={`/networking/${trimAtSymbol(author_username)}`} className={classes.cardName}>{fullName}</Link>
            {proffesion && <Profession profession={proffesion} />}
            <div className={classes.cardBio}>{description}</div>
            <CardTags
              firstTag={first_tag}
              secondTag={second_tag}
              thirdTag={third_tag}
              onClick={onAddFilter}
            />
            <div className={classes.cardActions}>
              {chat_open === 'not_available' && <button
                className={classes.cardAction}
                onClick={(e) => {
                  e.preventDefault()

                  navigate(`/networking/${trimAtSymbol(author_username)}/mail`)
                }}
              >Написать письмо</button>}
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
      </div>
      {proffesion != null && <div
        className={cn(
          classes.cardIcon,
          proffesion === 'profesor' && classes.cardIconProfessor,
          proffesion === 'student' && classes.cardIconStudent,
        )}
      />}
    </div>
  )
}
