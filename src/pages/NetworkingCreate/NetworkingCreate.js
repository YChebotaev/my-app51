import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { MyCard } from './MyCard'
import { BioEdit } from './BioEdit'
import { SaveButton } from './SaveButton'
import { useApiClient } from '../../hooks'
import { PageTitle } from '../../components/common/PageTitle'
import { TitleSeparator } from '../../components/networking/TitleSeparator'
import { Notification } from '../../components/common/Notification'
import classes from './NetworkingCreate.module.css'
import okIcon from '../../styles/images/ok-icon.svg'
import failIcon from '../../styles/images/fail-icon.svg'

export const NetworkingCreate = () => {
  const navigate = useNavigate()
  const apiClient = useApiClient()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      description: '',
      first_tag: null,
      second_tag: null,
      third_tag: null,
      chat_available: 'available'
    }
  })
  const [saveState, setSaveState] = useState(null) // null | 'success' | 'fail'
  const { mutate } = useMutation(['cards', 'create_card'], async (variables) => {
    const { data } = await apiClient.post('/cards/create_card', variables)

    return data
  }, {
    onSuccess() {
      setSaveState('success')

      setTimeout(() => {
        navigate('/networking/me')
      }, 5000)
    },
    onError() {
      setSaveState('fail')
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
    <form className={classes.networkingCreate} onSubmit={handleSubmit((values) => mutate(values))}>
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
        <MyCard control={control} />
      </div>
      <ul className={classes.cardEditHelpText}>
        <li>
          <p>Выбирайте фото крупным планом, чтобы другие пользователи могли вас видеть</p>
        </li>
      </ul>
      <div className={classes.bioWrapper}>
        <BioEdit control={control} />
      </div>
      <div className={classes.saveButtonWrapper}>
        <SaveButton />
      </div>
      <Notification isOpen={saveState != null} icon={notificationIcon} text={notificationText} />
    </form>
  )
}
