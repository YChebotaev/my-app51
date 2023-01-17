import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { useApiClient, useProfilePictureUrl } from '../../../hooks'
import { getFullName } from '../../../utils'
import classes from "./MyAccount.module.css"
import { Skeleton } from '../../../components/common/Skeleton'

export const MyAccount = () => {
  const apiClient = useApiClient()
  const {
    data: {
      first_name,
      surname,
      username_link
    } = {},
    isLoading
  } = useQuery(['telegram_user', 'my_profile'], async () => {
    const { data } = await apiClient.get('/telegram_user/my_profile')

    return data
  })
  const { data: avatarUrl, isLoading: isLoadingAvatarUrl } = useProfilePictureUrl()
  const fullName = getFullName(first_name, surname)

  return (
    <div className={classes.myAccount}>
      <div className={classes.myAccountLeft}>
        <div className={classes.me}>
          <div className={classes.meLeft}>
            {isLoadingAvatarUrl ? <Skeleton className={classes.meAvatarSkeleton} /> : (
              <div
                className={classes.meAvatar}
                style={avatarUrl ? { backgroundImage: `url(${avatarUrl})` } : null}
              />
            )}
          </div>

          <div className={classes.meRight}>
            {isLoading ? <Skeleton style={{ width: 125, height: 24.5, borderRadius: 6 }} /> : (
              <>
                {(first_name || surname) && (
                  <div className={classes.meName}>
                    {fullName}
                  </div>
                )}
                <div className={cn(classes.meUsername, { [classes.largeMeUsername]: fullName == null })}>
                  {username_link}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={classes.myAccountRight}>
        <div className={classes.myAccountRightArrow} />
      </div>
    </div>
  )
}
