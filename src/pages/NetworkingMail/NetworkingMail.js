import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useApiClient } from '../../hooks'
import { Skeleton } from '../../components/common/Skeleton'
import { PageTitle } from '../../components/common/PageTitle'
import { TitleSeparator } from '../../components/networking/TitleSeparator'
import { CardTextEdit } from '../../components/networking/CardTextEdit'
import { SaveButton } from '../../components/networking/SaveButton'
import { Notification } from '../../components/common/Notification'
import {
  useMutationStateNotification,
  SUCCESS_STATE,
  FAIL_STATE,
  SUCCESS_ICON,
  FAIL_ICON
} from '../../hooks/useMutationStateNotification'
import { Card } from '../Networking/ListCards/Card'
import classes from './NetworkingMail.module.css'
import { getFullName } from '../../utils'
import { TopmostMenu } from '../../components/common/TopmostMenu'

export const NetworkingMail = () => {
  const navigate = useNavigate()
  const { username } = useParams()
  const apiClient = useApiClient()
  const { data, isLoading } = useQuery(['cards', 'user_card', username], async () => {
    const { data } = await apiClient.get(`/cards/user_card/${username}`)

    return data
  })
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: username,
      text: ''
    }
  })
  const {
    setSucceed,
    setFailed,
    getNotificationProps
  } = useMutationStateNotification((state) => {
    switch (state) {
      case SUCCESS_STATE: return {
        text: 'Сообщение отправлено',
        icon: SUCCESS_ICON
      }
      case FAIL_STATE: return {
        text: 'Что-то пошло не так, попробуйте позже',
        icon: FAIL_ICON
      }
      default: return { text: null, icon: null }
    }
  })
  const { mutate } = useMutation(['cards', 'send_message'], async (variables) => {
    const { data } = apiClient.post('/cards/send_message', variables)

    return data
  }, {
    onSuccess() {
      setSucceed()
    },
    onError() {
      setFailed()
    }
  })
  const fullName = getFullName(data?.first_name, data?.surname)

  return (
    <form className={classes.networkingMail} onSubmit={handleSubmit(mutate)}>
      <TopmostMenu />
      <TopmostMenu.TitleSeparator />
      <PageTitle
        right={(
          <button
            className={classes.closeButton}
            onClick={() => navigate('/networking')}
          />
        )}
      >
        <div className={classes.pageTitle}>{fullName ?? data?.author_username}</div>
      </PageTitle>
      <TitleSeparator />
      <div className={classes.nmCardWrapper}>
        {isLoading ? <Skeleton className={classes.nmCardSkeleton} /> : <Card card={data} showActions={false} />}
      </div>
      <div className={classes.nmCardTextWrapper}>
        <CardTextEdit
          name="text"
          control={control}
          title="Сообщение"
          inputPlaceholder="Текст сообщения"
        />
      </div>
      <div className={classes.nmSaveButtonWrapper}>
        <SaveButton>Отправить</SaveButton>
      </div>
      <Notification {...getNotificationProps()} />
    </form>
  )
}
