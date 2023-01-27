import cn from 'classnames'
import { useLoadImage } from '../../../hooks'
import { Skeleton } from '../../common/Skeleton'
import { getBackendUrl } from '../../../utils'
import classes from './CardAvatar.module.css'

export const CardAvatar = ({ src, skeletonClassName, className, style }) => {
  const { data, isLoading } = useLoadImage(['card_profile_img', src], getBackendUrl() + src)

  if (isLoading) {
    return <Skeleton className={cn(classes.caSkeleton, skeletonClassName)} />
  } else {
    return (
      <div className={cn(classes.cardAvatar, className)} style={{ backgroundImage: `url("${data}")`, ...style }} />
    )
  }
}
