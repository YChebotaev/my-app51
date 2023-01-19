import { useMemo } from 'react'
import classes from './MyCard.module.css'
import cn from 'classnames'
import { Description } from './Description'
import { Tags } from './Tags'
import { ProfileImage } from './ProfileImage'
import { ChatOpenToggle } from './ChatOpenToggle'
import { Profession } from '../../../components/networking/Profession'
import { getFullName } from '../../../utils'

export const MyCard = ({
  usernameLink,
  firstName,
  surname,
  profession,
  description,
  rating,
  profileImg,
  forceShowDescription,
  control
}) => {
  const card = useMemo(() => {
    const fullName = getFullName(firstName, surname)

    return (
      <div className={classes.myCard}>
        <div className={classes.mcLeft}>
          <ProfileImage src={profileImg} />
        </div>
        <div className={classes.mcRight}>
          <div className={classes.mcDetails}>
            {fullName ? (
              <>
                <div className={classes.mcName}>
                  <div className={classes.mcnName}>{fullName}</div>
                  {profession && <Profession profession={profession} />}
                </div>
                {usernameLink && <div className={classes.mcnUsername}>{usernameLink}</div>}
              </>
            ) : (
              <div className={classes.mcName}>
                <div className={cn(classes.mcnUsername, classes.mcnOnlyUsername)}>
                  {usernameLink}
                </div>
                {profession && <Profession profession={profession} />}
              </div>
            )}
            {(description || forceShowDescription) && (
              <div className={classes.mcBioWrapper}>
                <Description control={control} />
              </div>
            )}
            <div className={classes.mcTagsWrapper}>
              <Tags control={control} />
            </div>
            <div className={classes.mcAvailability}>
              <div className={classes.mcaText}>Доступен для чата</div>
              <div className={classes.mcaToggleWrapper}>
                <ChatOpenToggle control={control} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }, [control, usernameLink, firstName, surname, profession, profileImg, description, forceShowDescription])

  return rating == null ? card : (
    <div className={classes.mcWrapper}>
      {card}
      <div className={classes.mcRating}>#{rating}</div>
    </div>
  )
}
