import { Skeleton as BaseSkeleton } from '../../../../../components/common/Skeleton'
import classes from './Skeleton.module.css'

export const Skeleton = ({ count }) => (
  <div className={classes.skeleton}>
    {new Array(count).fill(0).map((_, i) => (
      <BaseSkeleton key={i} className={classes.skeletonItem} />
    ))}
  </div>
)
