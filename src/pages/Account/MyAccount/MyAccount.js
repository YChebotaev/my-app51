import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { useApiClient } from '../../../hooks/useApiClient'
import { concatFullName } from '../../../utils/concatFullName'
import classes from "./MyAccount.module.css"

export const MyAccount = () => {
  const apiClient = useApiClient()
  const { data: {
    first_name,
    surname,
    username_link
  } = {} } = useQuery(['telegram_user', 'my_profile'], async () => {
    const { data } = await apiClient.get('/telegram_user/my_profile')

    return data
  })
  const fullName = concatFullName(first_name, surname)

  return (
    <div className={classes.myAccount}>
      <div className={classes.myAccountLeft}>
        <div className={classes.me}>
          <div className={classes.meLeft}>
            <div className={classes.meAvatar} />
          </div>
          <div className={classes.meRight}>
            {(first_name || surname) && (
              <div className={classes.meName}>
                {fullName}
              </div>
            )}
            <div className={cn(classes.meUsername, { [classes.largeMeUsername]: fullName == null })}>
              {username_link}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.myAccountRight}>
        <div className={classes.myAccountRightArrow} />
      </div>
    </div>
  )
}
