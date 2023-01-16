import { Skeleton } from '../../../components/common/Skeleton'
import classes from './ListSkeleton.module.css'

export const ListSkeleton = ({ count = 7}) => (
  <div className={classes.listSkeleton}>
    {new Array(count).fill(0).map((_, i) => (
      <Skeleton key={i} className={classes.lsSkeleton} />
    ))}
  </div>
)
