import { useMemo } from 'react'
import classes from './MyCard.module.css'
import cn from 'classnames'
// import { Bio } from './Bio'
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
            {/* <div className={classes.mcBioWrapper}>
                <Bio initialValue={data?.description} />
              </div> */}
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
  }, [control, usernameLink, firstName, surname, profession, profileImg])

  return rating
    ? (
      <div className={classes.mcWrapper}>
        {card}
      </div>
    )
    : card
}
