import cn from 'classnames'
import classes from './Skeleton.module.css'

export const Skeleton = ({ className, style }) => {
  return (
    <div className={cn(classes.skeleton, className)} style={style} />
  )
}
