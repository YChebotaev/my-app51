import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useApiClient } from '../../hooks'
import { PageTitle } from '../../components/common/PageTitle'
import { TitleSeparator } from '../../components/networking/TitleSeparator'
import { Notification } from '../../components/common/Notification'
import { MyCard } from '../../components/networking/MyCard'
import { CardTextEdit } from '../../components/networking/CardTextEdit'
import { SaveButton } from '../../components/networking/SaveButton'
import { Skeleton } from '../../components/common/Skeleton'
import classes from './NetworkingCreate.module.css'
import okIcon from '../../styles/images/ok-icon.svg'
import failIcon from '../../styles/images/fail-icon.svg'
import { TopmostMenu } from '../../components/common/TopmostMenu'

export const NetworkingCreate = () => {
  const navigate = useNavigate()
  const apiClient = useApiClient()
  const { data, isLoading } = useQuery(['telegram_user', 'my_profile'])
  const { control, handleSubmit } = useForm({
    defaultValues: {
      description: '',
      first_tag: null,
      second_tag: null,
      third_tag: null,
      chat_available: 'available',
      bio: ''
    },
    resolver(values) {
      const { first_tag, second_tag, third_tag } = values
      const errors = {}

      if (!first_tag && !second_tag && !third_tag) {
        errors.first_tag = 'Заполните хотя-бы один тег'
        errors.second_tag = 'Заполните хотя-бы один тег'
        errors.third_tag = 'Заполните хотя-бы один тег'
      }

      return { errors, values }
    }
  })
  const [saveState, setSaveState] = useState(null) // null | 'success' | 'fail'
  const [validationState, setValidationState] = useState(null) // null | 'fail'
  const [validationErrorText, setValidationErrorText] = useState(null) // null | string
  const { mutate } = useMutation(['cards', 'create_card'], async (variables) => {
    const { data } = await apiClient.post('/cards/create_card', variables)

    return data
  }, {
    onSuccess() {
      setSaveState('success')

      setTimeout(() => {
        navigate('/networking/me')
      }, 3000)
    },
    onError() {
      setSaveState('fail')

      setTimeout(() => {
        setSaveState(null)
      }, 3000)
    }
  })
  const [notificationText, notificationIcon] = useMemo(() => {
    switch (saveState) {
      case 'success': return [
        'Изменения сохранены',
        <img src={okIcon} alt="" />
      ]
      case 'fail': return [
        'Что-то пошло не так, попробуйте позже',
        <img src={failIcon} alt="" />
      ]
      default: return [null, null]
    }
  }, [saveState])

  return (
    <form className={classes.networkingCreate} onSubmit={handleSubmit(
      (values) => mutate(values),
      (errors) => {
        let firstError

        for (const errorText of Object.values(errors)) {
          firstError = errorText

          break
        }

        setValidationState('fail')
        setValidationErrorText(firstError)

        setTimeout(() => {
          setValidationState(null)
          setValidationErrorText(null)
        }, 3000)
      }
    )}>
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
        <div className={classes.pageTitle}>Создать карточку</div>
      </PageTitle>
      <TitleSeparator />
      <div className={classes.myCardWrapper}>
        {isLoading ? (
          <Skeleton style={{ height: 147, borderRadius: 10 }} />
        ) : (
          <MyCard
            forceShowDescription
            usernameLink={data?.username_link}
            firstName={data?.first_name}
            surname={data?.surname}
            description={data?.description}
            profession="student"
            control={control}
          />
        )}
      </div>
      <ul className={classes.cardEditHelpText}>
        <li>
          <p>Выбирайте фото крупным планом, чтобы другие пользователи могли вас видеть</p>
        </li>
      </ul>
      <div className={classes.bioWrapper}>
        <CardTextEdit
          name="bio"
          control={control}
          title="Описание профиля (био)"
          inputPlaceholder="Описание профиля"
        />
      </div>
      <div className={classes.saveButtonWrapper}>
        <SaveButton />
      </div>
      <Notification
        isOpen={saveState != null}
        icon={notificationIcon}
        text={notificationText}
        onClose={() => {
          setSaveState(null)
        }}
      />
      <Notification
        isOpen={validationState != null}
        icon={<img src={failIcon} alt="" />}
        text={validationErrorText}
        onClose={() => {
          setValidationState(null)
          setValidationErrorText(null)
        }}
      />
    </form>
  )
}
