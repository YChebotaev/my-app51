import { useNavigate } from 'react-router-dom'
import { MyCard } from './MyCard'
import { PageTitle } from '../../components/common/PageTitle'
import { TitleSeparator } from '../../components/networking/TitleSeparator'
import classes from './NetworkingMe.module.css'

export const NetworkingMe = () => {
  const navigate = useNavigate()

  return (
    <div className={classes.networkingMe}>
      <PageTitle right={
        <button className={classes.closeButton} onClick={() => navigate('/networking')} />
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
