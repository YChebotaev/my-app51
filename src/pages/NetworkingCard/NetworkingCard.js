import { useMemo, useState } from 'react'
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
import { Card } from '../Networking/ListCards/Card'
import classes from './NetworkingCard.module.css'
import okIcon from '../../styles/images/ok-icon.svg'
import failIcon from '../../styles/images/fail-icon.svg'

export const NetworkingCard = () => {
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
  const [sendState, setSendState] = useState(null) // null | 'success' | 'fail'
  const [sendIcon, sendText] = useMemo(() => {
    switch (sendState) {
      case 'success': return [
        'Сообщение отправлено',
        <img src={okIcon} alt="" />
      ]
      case 'fail': return [
        'Что-то пошло не так, попробуйте позже',
        <img src={failIcon} alt="" />
      ]
      default: return [null, null]
    }
  }, [sendState])
  const { mutate } = useMutation(['cards', 'send_message'], async (variables) => {
    const { data } = apiClient.post('/cards/send_message', variables)

    return data
  }, {
    onSuccess() {
      setSendState('success')

      setTimeout(() => {
        setSendState(null)
      }, 3000)
    },
    onError() {
      setSendState('fail')

      setTimeout(() => {
        setSendState(null)
      }, 3000)
    }
  })

  return (
    <form className={classes.networkingCard} onSubmit={handleSubmit(mutate)}>
      <PageTitle
        right={(
          <button
            className={classes.closeButton}
            onClick={() => navigate('/networking')}
          />
        )}
      >
        <div className={classes.pageTitle}>Вася Пупкин</div>
      </PageTitle>
      <TitleSeparator />
      <div className={classes.ncCardWrapper}>
        {isLoading ? <Skeleton className={classes.ncCardSkeleton} /> : <Card card={data} showActions={false} />}
      </div>
      <div className={classes.ncCardTextWrapper}>
        <CardTextEdit
          name="text"
          control={control}
          title="Сообщение"
          inputPlaceholder="Текст сообщения"
        />
      </div>
      <div className={classes.ncSaveButtonWrapper}>
        <SaveButton>Отправить</SaveButton>
      </div>
      <Notification
        isOpen={sendState != null}
        icon={sendIcon}
        text={sendText}
        onClose={() => {
          setSendState(null)
        }}
      />
    </form>
  )
}
