import { Skeleton } from '../../../components/common/Skeleton'
import classes from './GridSkeleton.module.css'

export const GridSkeleton = ({ count = 7 }) => (
  <div className={classes.gridSkeleton}>
    {new Array(count).fill(0).map((_, i) => (
      <Skeleton key={i} className={classes.gsSkeleton} />
    ))}
  </div>
)
