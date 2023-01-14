import { Skeleton as SkeletonBase } from '../../Skeleton'
import classes from './Skeleton.module.css'

export const Skeleton = () => (
  <div className={classes.skeleton}>
    <SkeletonBase className={classes.skeletonItem} />
    <SkeletonBase className={classes.skeletonItem} />
    <SkeletonBase className={classes.skeletonItem} />
  </div>
)
