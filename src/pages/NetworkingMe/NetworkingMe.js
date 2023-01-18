import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation } from '@tanstack/react-query'
import { MyCard } from '../../components/networking/MyCard'
import { PageTitle } from '../../components/common/PageTitle'
import { TitleSeparator } from '../../components/networking/TitleSeparator'
import { CardTextEdit } from '../../components/networking/CardTextEdit'
import { SaveButton } from '../../components/networking/SaveButton'
import { useApiClient } from '../../hooks'
import { Skeleton } from '../../components/common/Skeleton'
import classes from './NetworkingMe.module.css'

export const NetworkingMe = () => {
  const navigate = useNavigate()
  const apiClient = useApiClient()
  const { data, isLoading } = useQuery(['cards', 'my_card'], async () => {
    const { data } = await apiClient.get('/cards/my_card')

    return data
  })
  const { mutate } = useMutation(['cards', 'update_card'], async ({
    chat_available,
    description,
    first_tag,
    second_tag,
    third_tag
  }) => {
    const { data } = await apiClient.post('/cards/update_card', {
      chat_open: chat_available,
      description,
      first_tag,
      second_tag,
      third_tag
    })

    return data
  })
  const { control, handleSubmit } = useForm({
    defaultValues: {
      description: '',
      first_tag: null,
      second_tag: null,
      third_tag: null,
      chat_available: 'available'
    },
    values: {
      ...data,
      chat_available: data?.chat_open
    }
  })

  return (
    <form className={classes.networkingMe} onSubmit={handleSubmit(values => mutate(values))}>
      <PageTitle right={
        <button className={classes.closeButton} onClick={() => navigate('/networking')} />
      }>
        <div className={classes.pageTitle}>Моя карточка</div>
      </PageTitle>
      <TitleSeparator />
      <div className={classes.myCardWrapper}>
        {isLoading ? (
          <Skeleton style={{ height: 147, borderRadius: 10 }} />
        ) : (
          <MyCard
            usernameLink={data?.author_username}
            firstName={data?.first_name}
            surname={data?.surname}
            profession="student"
            rating={data?.raiting}
            profileImg={data?.card_profile_img}
            control={control}
          />
        )}
      </div>
      <ul className={classes.cardEditHelpText}>
        <li>
          <p>Выбирайте фото крупным планом, чтобы другие пользователи могли вас видеть</p>
        </li>
      </ul>
      <div className={classes.nmCardTextWrapper}>
        <CardTextEdit control={control} title="Описание профиля (био)" inputPlaceholder="Описание профиля" />
      </div>
      <div className={classes.nmSaveButtonWrapper}>
        <SaveButton />
      </div>
    </form>
  )
}
