import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '../../components/common/Skeleton'
import { PageTitle } from '../../components/common/PageTitle'
import { TitleSeparator } from '../../components/networking/TitleSeparator'
import { Card } from '../Networking/ListCards/Card'
import classes from './NetworkingCard.module.css'
import { getFullName } from '../../utils'
import { TopmostMenu } from '../../components/common/TopmostMenu'

export const NetworkingCard = () => {
  const navigate = useNavigate()
  const { username } = useParams()
  const { data, isLoading } = useQuery(['cards', 'user_card', username])
  const fullName = getFullName(data?.first_name, data?.surname)

  return (
    <div className={classes.networkingCard}>
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
      <div className={classes.ncCardWrapper}>
        {isLoading ? <Skeleton className={classes.ncCardSkeleton} /> : <Card card={data} showActions={false} />}
      </div>
      <div className={classes.ncCardTextWrapper}>
        <div className={classes.bioTitle}>Описание профиля (био)</div>
        <div className={classes.bioText}>{data?.bio}</div>
      </div>
    </div>
  )
}
