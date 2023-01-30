import { getBackendUrl } from '../../../../utils'
import { useLoadImage } from '../../../../hooks'
import classes from './CardImage.module.css'
import { Skeleton } from '../../../../components/common/Skeleton'

export const CardImage = ({ src }) => {
  const { data, isLoading } = useLoadImage(['card_profile_img', src], getBackendUrl() + src)

  if (isLoading) {
    return <Skeleton className={classes.cardImage} />
  }

  return (
    <div className={classes.cardImage} style={{ backgroundImage: `url("${data}")` }} />
  )
}
