import { format, parseISO } from 'date-fns'
import { PostAuthor } from '../../articles/PostAuthor'
import { Skeleton } from './Skeleton'
import { trimFirstImage } from '../../../utils'
import classes from './PostPreview.module.css'

export const PostPreview = ({
  title,
  firstName,
  surname,
  usernameLink,
  avatarUrl,
  isLoadingAvatarUrl,
  isProfileLoading,
  isLoading,
  createdAt,
  postImage,
  subtitle,
  content,
  telegraphUrl
}) => (
  <div className={classes.postPreview}>
    {title != null && (
      <div className={classes.titleWrapper}>
        <div className={classes.title}>{title}</div>
      </div>
    )}
    <div className={classes.authorWrapper}>
      <PostAuthor
        firstName={firstName}
        surname={surname}
        usernameLink={usernameLink}
        avatarUrl={avatarUrl}
        isLoadingAvatarUrl={isLoadingAvatarUrl}
        isProfileLoading={isProfileLoading}
      />
      {!isLoading && <div className={classes.pubDate}>
        {format(parseISO(createdAt), 'd.M.yyyy')}
      </div>}
    </div>
    {postImage != null && (
      <div className={classes.imageWrapper}>
        <img src={postImage} className={classes.image} alt="" />
      </div>
    )}
    <div className={classes.subtitleWrapper}>
      <div className={classes.subtitle}>{subtitle}</div>
    </div>
    <div className={classes.content}>
      <div className={classes.paragraph} dangerouslySetInnerHTML={{ __html: trimFirstImage(content) }} />
    </div>
    <div className={classes.buttonWrapper}>
      <button
        className={classes.button}
        onClick={() => {
          window.location = telegraphUrl
        }}
      >
        Перейти в статью на канале
      </button>
    </div>
  </div>
)

PostPreview.Skeleton = Skeleton
