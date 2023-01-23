import { Skeleton as BaseSkeleton } from '../../../components/common/Skeleton'
import classes from './Skeleton.module.css'

export const Skeleton = () => (
  <div className={classes.skeleton}>
    <div className={classes.headerTitle}>Moove</div>
    <div className={classes.header} />
    <div className={classes.explanation}>
      <div className={classes.explanationLeft}>
        <BaseSkeleton className={classes.explanationLeftBox} />
      </div>
      <div className={classes.explanationRight}>
        <BaseSkeleton className={classes.explanationRightBox1} />
        <BaseSkeleton className={classes.explanationRightBox2} />
      </div>
    </div>
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
    <div className={classes.networkingWrapper}>
      <div className={classes.networking}>
        <BaseSkeleton className={classes.networkingTitle} />
        <div className={classes.networkingContent}>
          <BaseSkeleton className={classes.networkingContentBox} />
          <BaseSkeleton className={classes.networkingContentBox} />
          <BaseSkeleton className={classes.networkingContentBox} />
        </div>
      </div>
    </div>
    <div className={classes.chats}>
      <BaseSkeleton className={classes.chatsTitle} />
      <div className={classes.chatsContent}>
        <div className={classes.chat}>
          <div className={classes.chatLeft}>
            <BaseSkeleton className={classes.chatLeftBox} />
          </div>
          <div className={classes.chatRight}>
            <BaseSkeleton className={classes.chatRightBox} />
          </div>
        </div>
        <div className={classes.chat}>
          <div className={classes.chatLeft}>
            <BaseSkeleton className={classes.chatLeftBox} />
          </div>
          <div className={classes.chatRight}>
            <BaseSkeleton className={classes.chatRightBox} />
          </div>
        </div>
        <div className={classes.chat}>
          <div className={classes.chatLeft}>
            <BaseSkeleton className={classes.chatLeftBox} />
          </div>
          <div className={classes.chatRight}>
            <BaseSkeleton className={classes.chatRightBox} />
          </div>
        </div>
        <div className={classes.chat}>
          <div className={classes.chatLeft}>
            <BaseSkeleton className={classes.chatLeftBox} />
          </div>
          <div className={classes.chatRight}>
            <BaseSkeleton className={classes.chatRightBox} />
          </div>
        </div>
        <div className={classes.chat}>
          <div className={classes.chatLeft}>
            <BaseSkeleton className={classes.chatLeftBox} />
          </div>
          <div className={classes.chatRight}>
            <BaseSkeleton className={classes.chatRightBox} />
          </div>
        </div>
      </div>
    </div>
  </div>
)
