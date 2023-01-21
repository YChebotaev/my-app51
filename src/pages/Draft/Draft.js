import { useQuery } from '@tanstack/react-query'
import { format, parseISO } from 'date-fns'
import { useProfilePictureUrl } from '../../hooks'
import { PostAuthor } from '../../components/articles/PostAuthor'
import classes from './Draft.module.css'
import { useParams } from 'react-router-dom'
import { Skeleton } from './Skeleton'

export const Draft = () => {
  const { postId } = useParams()
  const { data: profile, isLoading: isProfileLoading } = useQuery(['telegram_user', 'my_profile'])
  const { data: avatarUrl, isLoading: isLoadingAvatarUrl } = useProfilePictureUrl()
  const { data, isLoading } = useQuery(['posts', 'draft_post', { post_id: postId }])

  if (isLoading) {
    return <Skeleton />
  }

  return (
    <div className={classes.draft}>
      {data?.title != null && (
        <div className={classes.draftTitleWrapper}>
          <div className={classes.draftTitle}>{data.title}</div>
        </div>
      )}
      <div className={classes.draftAuthorWrapper}>
        <PostAuthor
          firstName={profile?.first_name}
          surname={profile?.surname}
          usernameLink={profile?.username_link}
          avatarUrl={avatarUrl}
          isLoadingAvatarUrl={isLoadingAvatarUrl}
          isProfileLoading={isProfileLoading}
        />
        {!isLoading && <div className={classes.draftPubDate}>
          {format(parseISO(data.created_at), 'd.M.yyyy')}
        </div>}
      </div>
      {data?.post_image != null && (
        <div className={classes.draftImageWrapper}>
          <img src={data.post_image} className={classes.draftImage} alt="" />
        </div>
      )}
      {/* <div className={classes.subtitleWrapper}>
        <div className={classes.subtitle}>Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. </div>
      </div> */}
      <div className={classes.content}>
        <div className={classes.paragraph}>{data?.content}</div>
        {/* <div className={classes.heading}>Давно выяснено, что при оценке дизайна</div>
        <div className={classes.paragraph}>Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца. Если вам нужен @LoremIpsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.</div>
        <div className={classes.paragraph}>Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки</div> */}
      </div>
      <div className={classes.buttonWrapper}>
        <button
          className={classes.button}
          onClick={() => {
            window.location = data.telegraph_url
          }}
        >
          Перейти в статью на канале
        </button>
      </div>
    </div>
  )
}
