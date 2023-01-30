import { useQuery } from '@tanstack/react-query'
import { useProfilePictureUrl } from '../../hooks'
import { useParams } from 'react-router-dom'
import { PostPreview } from '../../components/posts/PostPreview'

export const ArticleView = () => {
  const { postId } = useParams()
  const { data: profile, isLoading: isProfileLoading } = useQuery(['telegram_user', 'my_profile'])
  const { data: avatarUrl, isLoading: isLoadingAvatarUrl } = useProfilePictureUrl()
  const { data, isLoading: isLoadingPost } = useQuery(['posts', 'post', postId])
  const isLoading = isProfileLoading || isLoadingAvatarUrl || isLoadingPost

  if (isLoading) {
    return <PostPreview.Skeleton />
  }

  return (
    <PostPreview
      title={data?.title}
      firstName={profile.first_name}
      surname={profile.surname}
      usernameLink={profile.username_link}
      avatarUrl={avatarUrl}
      isLoadingAvatarUrl={isLoadingAvatarUrl}
      isProfileLoading={isProfileLoading}
      isLoading={isLoadingPost}
      createdAt={data.created_at}
      postImage={data.post_image}
      subtitle={data.subtitle}
      content={data.content}
      telegraphUrl={data.telegraph_url}
    />
  )
}
