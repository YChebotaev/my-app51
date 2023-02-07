import { format, parseISO } from 'date-fns'
import cn from 'classnames'
import { PostAuthor } from '../../articles/PostAuthor'
import { Skeleton } from './Skeleton'
import { normalizeContentHTML } from '../../../utils'
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
  urlToPost,
  status
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
      <div className={classes.paragraph} dangerouslySetInnerHTML={{ __html: normalizeContentHTML(content) }} />
    </div>
    <div className={classes.buttonWrapper}>
      <button
        disabled={status === 'draft'}
        className={cn(classes.button, status === 'draft' && classes.disabledButton)}
        onClick={() => {
          window.location = urlToPost
        }}
      >
        Перейти в статью на канале
      </button>
    </div>
  </div>
)

PostPreview.Skeleton = Skeleton
