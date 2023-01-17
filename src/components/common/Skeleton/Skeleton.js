import cn from 'classnames'
import classes from './Skeleton.module.css'
import { KIND_UPDATING, KIND_FETCHING } from './constants'

export const Skeleton = ({ kind = KIND_FETCHING, className, style }) => {
  switch (kind) {
    case KIND_FETCHING: return (
      <div className={cn(classes.fetchingSkeleton, className)} style={style} />
    )
    case KIND_UPDATING: return (
      <div className={cn(classes.updatingSkeleton, className)} style={style}>
        <div className={classes.usCards}>
          <div className={classes.usCard} />
          <div className={classes.usCard} />
          <div className={classes.usCard} />
        </div>
      </div>
    )
    default: return null
  }
}
