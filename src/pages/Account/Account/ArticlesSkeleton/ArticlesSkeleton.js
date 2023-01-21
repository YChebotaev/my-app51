import { Skeleton } from '../../../../components/common/Skeleton'
import classes from './ArticlesSkeleton.module.css'

export const ArticlesSkeleton = ({ count }) => (
  <div className={classes.articlesSkeleton}>
    {new Array(count).fill(0).map((_, i) => <Skeleton key={i} className={classes.asSkeleton} />)}
  </div>
)
