import classes from './MyCard.module.css'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
// import { Bio } from './Bio'
import { Tags } from './Tags'
import { ProfileImage } from './ProfileImage'
import { ChatOpenToggle } from './ChatOpenToggle'
import { Profession } from '../../../components/networking/Profession'
import { Skeleton } from '../../../components/common/Skeleton'
import { useApiClient } from '../../../hooks'
import { getFullName } from '../../../utils'

export const MyCard = ({ control }) => {
  const apiClient = useApiClient()
  const {
    data,
    isLoading
  } = useQuery(['telegram_user', 'my_profile'], async () => {
    const { data } = await apiClient.get('/telegram_user/my_profile')

    return data
  })
  const fullName = getFullName(data?.first_name, data?.surname)

  if (isLoading) {
    return (
      <Skeleton style={{ height: 147, borderRadius: 10 }} />
    )
  }

  return (
    <div className={classes.myCard}>
      <div className={classes.mcLeft}>
        <ProfileImage />
      </div>
      <div className={classes.mcRight}>
        <div className={classes.mcDetails}>
          {fullName ? (
            <>
              <div className={classes.mcName}>
                <div className={classes.mcnName}>{fullName}</div>
                <Profession profession="student" />
              </div>
              {data?.username_link && <div className={classes.mcnUsername}>{data?.username_link}</div>}
            </>
          ) : (
            <div className={classes.mcName}>
              <div className={cn(classes.mcnUsername, classes.mcnOnlyUsername)}>
                {data?.username_link}
              </div>
              <Profession profession="student" />
            </div>
          )}
          {/* <div className={classes.mcBioWrapper}>
              <Bio initialValue={data?.description} />
            </div> */}
          <div className={classes.mcTagsWrapper}>
            <Tags control={control} />
          </div>
          <div className={classes.mcAvailability}>
            <div className={classes.mcaText}>Доступен для чата</div>
            <div className={classes.mcaToggleWrapper}>
              <ChatOpenToggle control={control} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
