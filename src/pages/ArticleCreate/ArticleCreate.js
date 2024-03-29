import React, { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
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
import { getBackendUrl } from '../../utils'

export const ArticleCreate = () => {
  const apiClient = useApiClient()
  const navigate = useNavigate()
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
  const { mutate } = useMutation(['posts', 'create_post'], async (variables) => {
    const { data } = await apiClient.post('/posts/create_post', {
      ...variables,
      content: imgUrl ? `<img src="${getBackendUrl() + imgUrl}" />\n${variables.content}` : variables.content
    })

    return data
  }, {
    onSuccess({ id }) {
      setSucceed({
        onTimeout() {
          navigate(`/draft/${id}`)
        }
      })
    },
    onError() {
      setFailed()
    }
  })

  return (
    <PostEdit
      pageTitle="Создать статью"
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
