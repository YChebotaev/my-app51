import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { MyCard } from './MyCard'
import { PageTitle } from '../../components/common/PageTitle'
import { TitleSeparator } from '../../components/networking/TitleSeparator'
import { useApiClient } from '../../hooks'
import classes from './NetworkingMe.module.css'

export const NetworkingMe = () => {
  const apiClient = useApiClient()
  const navigate = useNavigate()

  const { data } = useQuery(['cards', 'my_card'], async () => {
    const { data } = await apiClient.get('/cards/my_card')

    return data
  })

  useEffect(() => {
    if (data === null) {
      navigate('/networking/create')
    }
  }, [data, navigate])

  return (
    <div className={classes.networkingMe}>
      <PageTitle right={
        <button className={classes.closeButton} />
      }>
        <div className={classes.pageTitle}>Моя карточка</div>
      </PageTitle>
      <TitleSeparator />
      <div className={classes.myCardWrapper}>
        <MyCard />
      </div>
    </div>
  )
}
