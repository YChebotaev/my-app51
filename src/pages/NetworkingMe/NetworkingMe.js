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
import { Notification } from '../../components/common/Notification'
import classes from './NetworkingMe.module.css'
import {
  useMutationStateNotification,
  SUCCESS_STATE,
  FAIL_STATE,
  SUCCESS_ICON,
  FAIL_ICON
} from '../../hooks/useMutationStateNotification'

export const NetworkingMe = () => {
  const navigate = useNavigate()
  const apiClient = useApiClient()
  const { data, isLoading } = useQuery(['cards', 'my_card'])
  const {
    setSucceed,
    setFailed,
    clearState,
    getNotificationProps
  } = useMutationStateNotification((state) => {
    switch (state) {
      case SUCCESS_STATE: return {
        text: 'Изменения сохранены',
        icon: SUCCESS_ICON
      }
      case FAIL_STATE: return {
        text: 'Что-то пошло не так, попробуйте позже',
        icon: FAIL_ICON
      }
      default: return { text: null, icon: null }
    }
  })
  const { mutate } = useMutation(['cards', 'update_card'], async ({
    chat_available,
    description,
    first_tag,
    second_tag,
    third_tag,
    bio
  }) => {
    const { data } = await apiClient.post('/cards/update_card', {
      chat_open: chat_available,
      description,
      first_tag,
      second_tag,
      third_tag,
      bio
    })

    return data
  }, {
    onSuccess() {
      setSucceed()

      setTimeout(() => {
      }, 3000)
    },
    onError() {
      setFailed()

      setTimeout(() => {
        clearState()
      }, 3000)
    }
  })
  const { control, handleSubmit } = useForm({
    defaultValues: {
      description: '',
      first_tag: null,
      second_tag: null,
      third_tag: null,
      chat_available: 'available',
      bio: ''
    },
    values: {
      ...data,
      chat_available: data?.chat_open
    }
  })
  // const [ updateText, updateIcon ] = useMemo(() => {
  //   switch (updateState) {
  //     case 'success': return ['Изменения сохранены', <img src={okIcon} alt="" />]
  //     case 'fail': return ['Что-то пошло не так, попробуйте позже', <img src={failIcon} alt="" />]
  //     default: return [null, null]
  //   }
  // }, [updateState])

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
            profession={data?.proffesion}
            rating={data?.raiting}
            profileImg={data?.card_profile_img}
            description={data?.description}
            forceShowDescription
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
        <CardTextEdit
          name="bio"
          control={control}
          title="Описание профиля (био)"
          inputPlaceholder="Описание профиля"
        />
      </div>
      <div className={classes.nmSaveButtonWrapper}>
        <SaveButton />
      </div>
      <Notification {...getNotificationProps()} />
    </form>
  )
}
