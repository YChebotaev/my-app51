import classes from './MyCard.module.css'
import Toggle from 'react-toggle'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { Skeleton } from '../../../components/common/Skeleton'
import { useApiClient } from '../../../hooks'
import { concatFullName } from '../../../utils'

export const MyCard = () => {
  const apiClient = useApiClient()
  const {
    data,
    isLoading
  } = useQuery(['cards', 'my_card'], async () => {
    const { data } = await apiClient.get('/cards/my_card')

    return data
  })
  const fullName = concatFullName(data?.first_name, data?.surname)

  if (isLoading) {
    return (
      <Skeleton style={{ height: 147, borderRadius: 10 }} />
    )
  }

  return (
    <div className={classes.mcWrapper}>
      <div className={classes.myCard}>
        <div className={classes.mcLeft}>
          <div className={classes.mcAvatar} />
        </div>
        <div className={classes.mcRight}>
          <div className={classes.mcDetails}>
            {fullName ? (
              <>
                <div className={classes.mcName}>
                  <div className={classes.mcnName}>{fullName}</div>
                  {data?.proffesion && <div className={classes.mcnProfession}>{data.proffesion}</div>}
                </div>
                {data?.author_username && <div className={classes.mcnUsername}>{data?.author_username}</div>}
              </>
            ) : (
              <div className={classes.mcName}>
                <div className={cn(classes.mcnUsername, classes.mcnOnlyUsername)}>
                  {data?.author_username}
                </div>
                {data?.proffesion && <div className={classes.mcnProfession}>{data.proffesion}</div>}
              </div>
            )}
            <div className={classes.mcBio}>
              {data?.description}
              <div className={classes.mcbEditIcon} />
            </div>
            <div className={classes.mcTags}>
              {data?.first_tag && (
                <button key="first_tag" className={classes.mcTag}>
                  <div className={classes.mctLeft}>{data?.first_tag}</div>
                  <div className={classes.mctRight}></div>
                </button>
              )}
              {data?.second_tag && (
                <button key="second_tag" className={classes.mcTag}>
                  <div className={classes.mctLeft}>{data?.second_tag}</div>
                  <div className={classes.mctRight}></div>
                </button>
              )}
              {(!data?.first_tag || !data?.second_tag) && (
                <button className={classes.mctAddButton}>+</button>
              )}
            </div>
            <div className={classes.mcAvailability}>
              <div className={classes.mcaText}>Доступен для чата</div>
              <div className={classes.mcaToggleWrapper}>
                <Toggle
                  icons={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mcPlace}>#{data?.raiting}</div>
    </div>
  )
}
