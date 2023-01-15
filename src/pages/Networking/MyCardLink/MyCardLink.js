import { Link } from 'react-router-dom'
import { useProfilePictureUrl } from '../../../hooks'
import { Skeleton } from '../../../components/common/Skeleton'
import classes from './MyCardLink.module.css'

export const MyCardLink = () => {
  const { data, isLoading } = useProfilePictureUrl()

  return (
    <div className={classes.myCardLink}>
      <div className={classes.mclLeft}>
        <Link to="/networking/me" className={classes.mclLink}>Моя карточка</Link>
      </div>
      <div className={classes.mclRight}>
        {isLoading ? (
          <Skeleton className={classes.mclAvatarSkeleton} />
        ) : (
          <img
            src={data}
            alt=""
            className={classes.mclAvatar}
          />
        )}
      </div>
    </div>
  )
}
