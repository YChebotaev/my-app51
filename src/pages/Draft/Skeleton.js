import { Skeleton as BaseSkeleton } from '../../components/common/Skeleton'
import classes from './Draft.module.css'

export const Skeleton = () => {
  return (
    <div className={classes.draft}>
      <div className={classes.draftTitleWrapper}>
        <BaseSkeleton className={classes.titleSkeleton} />
      </div>
      <div className={classes.draftAuthorWrapper}>
        <BaseSkeleton className={classes.authorSkeleton} />
      </div>
      <div className={classes.draftImageWrapper}>
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
