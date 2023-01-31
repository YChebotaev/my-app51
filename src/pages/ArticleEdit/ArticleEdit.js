import React, { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { PostEdit } from '../../components/posts/PostEdit'
import { Notification } from '../../components/common/Notification'
import { useProfilePictureUrl, useApiClient } from '../../hooks'
import {
  useMutationStateNotification,
  SUCCESS_STATE,
  FAIL_STATE,
  SUCCESS_ICON,
  FAIL_ICON
} from '../../hooks/useMutationStateNotification'

import '../../styles/style.css';
import { getBackendUrl, trimFirstImage } from '../../utils'

export const ArticleEdit = () => {
  const apiClient = useApiClient()
  const navigate = useNavigate()
  const { postId } = useParams()
  const [imgUrl, setImgUrl] = useState()
  const { data: avatarUrl, isLoading: isLoadingAvatarUrl } = useProfilePictureUrl()
  const { data: profile, isLoading: isProfileLoading } = useQuery(['telegram_user', 'my_profile'])
  const {
    setSucceed,
    setFailed,
    getNotificationProps
  } = useMutationStateNotification((state) => {
    switch (state) {
      case SUCCESS_STATE: return {
        text: 'Статья отправлена на модерацию',
        icon: SUCCESS_ICON
      }
      case FAIL_STATE: return {
        text: 'Что-то пошло не так, попробуйте позже',
        icon: FAIL_ICON
      }
      default: return { text: null, icon: null }
    }
  })
  const { data, isLoading } = useQuery(['posts', 'post', postId])
  const { mutate } = useMutation(['posts', 'edit_post', postId], async ({
    title,
    subtitle,
    content
  }) => {
    const { data: resp } = await apiClient.post('/posts/edit_post', {
      title,
      subtitle,
      content: imgUrl ? `<img src="${getBackendUrl() + imgUrl}" />\n${content}` : content
    }, {
      params: {
        post_url: data.telegraph_url
      }
    })

    return resp
  }, {
    onSuccess({ id }) {
      setSucceed({
        onTimeout() {
          if (data.status === 'draft') {
            navigate(`/draft/${postId}`)
          } else {
            navigate(`/article/${postId}`)
          }
        }
      })
    },
    onError() {
      setFailed()
    }
  })

  return isLoading ? null : (
    <PostEdit
      defaultValues={{
        title: data.title,
        subtitle: data.subtitle,
        content: trimFirstImage(data.content)
      }}
      pageTitle="Редактировать статью"
      firstName={profile?.first_name}
      surname={profile?.surname}
      usernameLink={profile?.username_link}
      isProfileLoading={isProfileLoading}
      isLoadingAvatarUrl={isLoadingAvatarUrl}
      avatarUrl={avatarUrl}
      imgUrl={imgUrl}
      setImgUrl={setImgUrl}
      notification={<Notification {...getNotificationProps()} />}
      onSubmit={mutate}
    />
  )
}
