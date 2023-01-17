import cn from 'classnames'
import { useLoadImage } from '../../../hooks'
import { Skeleton } from '../../common/Skeleton'
import classes from './CardAvatar.module.css'

export const CardAvatar = ({ src, className, style }) => {
  const { data, isLoading } = useLoadImage(['card_profile_img', src], src)

  if (isLoading) {
    return <Skeleton className={classes.caSkeleton} />
  } else {
    return (
      <div className={cn(classes.cardAvatar, className)} style={{ backgroundImage: `url("${data}")`, ...style }} />
    )
  }
}
