import { Skeleton as BaseSkeleton } from '../../common/Skeleton'
import classes from './PostPreview.module.css'

export const Skeleton = () => {
  return (
    <div className={classes.postPreview}>
      <div className={classes.titleWrapper}>
        <BaseSkeleton className={classes.titleSkeleton} />
      </div>
      <div className={classes.authorWrapper}>
        <BaseSkeleton className={classes.authorSkeleton} />
      </div>
      <div className={classes.imageWrapper}>
        <BaseSkeleton className={classes.imageSkeleton} />
      </div>
      <div className={classes.content}>
        <BaseSkeleton className={classes.contentSkeleton} />
      </div>
      <div className={classes.buttonWrapper}>
        <BaseSkeleton className={classes.buttonSkeleton} />
      </div>
    </div>
  )
}
