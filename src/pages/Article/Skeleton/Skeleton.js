import { Skeleton as BaseSkeleton } from '../../../components/common/Skeleton'
import classes from './Skeleton.module.css'

export const Skeleton = () => (
  <div className={classes.skeleton}>
    <div className={classes.headerTitle}>Moove</div>
    <div className={classes.header} />
    <div className={classes.whatToRead}>
      <BaseSkeleton className={classes.wtrTitle} />
      <div className={classes.wtrContainer}>
        <div className={classes.wtrContent}>
          <BaseSkeleton className={classes.wtrContentBox} />
          <div className={classes.wtrLikesCountWrapper}>
            <BaseSkeleton className={classes.wtrLikesCount} />
          </div>
        </div>
        <div className={classes.wtrContent}>
          <BaseSkeleton className={classes.wtrContentBox} />
          <div className={classes.wtrLikesCountWrapper}>
            <BaseSkeleton className={classes.wtrLikesCount} />
          </div>
        </div>
        <div className={classes.wtrContent}>
          <BaseSkeleton className={classes.wtrContentBox} />
          <div className={classes.wtrLikesCountWrapper}>
            <BaseSkeleton className={classes.wtrLikesCount} />
          </div>
        </div>
      </div>
    </div>
    <div className={classes.leaderboardButtonWrapper}>
      <BaseSkeleton className={classes.leaderboardButton} />
    </div>
    <div className={classes.articlesWrapper}>
      <div className={classes.articles}>
        <div className={classes.articlesTabs}>
          <BaseSkeleton className={classes.articlesTab} />
          <BaseSkeleton className={classes.articlesTab} />
          <BaseSkeleton className={classes.articlesTab} />
        </div>
        <div className={classes.article}>
          <BaseSkeleton className={classes.articleFirstBox} />
          <BaseSkeleton className={classes.articleSecondBox} />
          <BaseSkeleton className={classes.articleLikesCount} />
        </div>
        <div className={classes.article}>
          <BaseSkeleton className={classes.articleFirstBox} />
          <BaseSkeleton className={classes.articleSecondBox} />
          <BaseSkeleton className={classes.articleLikesCount} />
        </div>
        <div className={classes.article}>
          <BaseSkeleton className={classes.articleFirstBox} />
          <BaseSkeleton className={classes.articleSecondBox} />
          <BaseSkeleton className={classes.articleLikesCount} />
        </div>
        <div className={classes.article}>
          <BaseSkeleton className={classes.articleFirstBox} />
          <BaseSkeleton className={classes.articleSecondBox} />
          <BaseSkeleton className={classes.articleLikesCount} />
        </div>
        <BaseSkeleton className={classes.fullSizeArticle} />
      </div>
    </div>
  </div>
)
