import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useApiClient } from '../../hooks'
import { Skeleton } from '../../components/common/Skeleton'
import { PageTitle } from '../../components/common/PageTitle'
import { TitleSeparator } from '../../components/networking/TitleSeparator'
import { CardTextEdit } from '../../components/networking/CardTextEdit'
import { SaveButton } from '../../components/networking/SaveButton'
import { Card } from '../Networking/ListCards/Card'
import classes from './NetworkingCard.module.css'

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
  const { mutate } = useMutation(['cards', 'send_message'], async (variables) => {
    const { data } = apiClient.post('/cards/send_message', variables)

    return data
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
    </form>
  )
}
