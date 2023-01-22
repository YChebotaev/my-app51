import { useNavigate } from 'react-router-dom'
import cn from 'classnames'
import { getFullName, trimAtSymbol } from '../../../../utils'
import { Profession } from '../../../../components/networking/Profession'
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
  showActions = true,
  onAddFilter
}) => {
  const navigate = useNavigate()
  const fullName = getFullName(first_name, surname)

  return (
    <div className={classes.cardWrapper}>
      <div className={cn(classes.cardBackground, proffesion === 'profesor' && classes.cbRare)}>
        <div className={classes.card}>
          <div className={classes.cardLeft}>
            <CardAvatar src={card_profile_img} />
          </div>
          <div className={classes.cardRight}>
            <div className={classes.cardDetails}>
              <div className={classes.cardName}>
                <div className={classes.cnName}>{fullName}</div>
                {proffesion && <Profession profession={proffesion} />}
              </div>
              <div className={classes.cardBio}>{description}</div>
              <CardTags
                firstTag={first_tag}
                secondTag={second_tag}
                thirdTag={third_tag}
                onClick={onAddFilter}
              />
              {showActions && (
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
