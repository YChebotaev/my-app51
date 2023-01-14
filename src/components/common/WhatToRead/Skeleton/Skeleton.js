import classes from './Skeleton.module.css'

export const Skeleton = () => (
  <div className={classes.skeleton}>
    <div className={classes.skeletonItem} />
    <div className={classes.skeletonItem} />
    <div className={classes.skeletonItem} />
  </div>
)
