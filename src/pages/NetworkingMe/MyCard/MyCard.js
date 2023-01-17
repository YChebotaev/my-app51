import classes from './MyCard.module.css'
import Toggle from 'react-toggle'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { Bio } from './Bio'
import { Tags } from './Tags'
import { ProfileImage } from './ProfileImage'
import { Profession } from '../../../components/networking/Profession'
import { Skeleton } from '../../../components/common/Skeleton'
import { useApiClient } from '../../../hooks'
import { getFullName } from '../../../utils'

export const MyCard = () => {
  const apiClient = useApiClient()
  const {
    data,
    isLoading
  } = useQuery(['cards', 'my_card'], async () => {
    const { data } = await apiClient.get('/cards/my_card')

    return data /*?? {
      "author_username": "string",
      "first_name": "string",
      "surname": "string",
      "raiting": "string",
      "description": "string",
      "aprroval_status": "string",
      "role": "string",
      "proffesion": "string",
      "first_tag": "string",
      "second_tag": "string",
      "chat_open": "string",
      "card_profile_img": "string"
    }*/
  })
  const fullName = getFullName(data?.first_name, data?.surname)

  if (isLoading) {
    return (
      <Skeleton style={{ height: 147, borderRadius: 10 }} />
    )
  }

  return (
    <div className={classes.mcWrapper}>
      <div className={classes.myCard}>
        <div className={classes.mcLeft}>
          <ProfileImage initialImageSrc={data?.card_profile_img} />
        </div>
        <div className={classes.mcRight}>
          <div className={classes.mcDetails}>
            {fullName ? (
              <>
                <div className={classes.mcName}>
                  <div className={classes.mcnName}>{fullName}</div>
                  {data?.proffesion && <Profession profession={data?.proffesion} />}
                </div>
                {data?.author_username && <div className={classes.mcnUsername}>{data?.author_username}</div>}
              </>
            ) : (
              <div className={classes.mcName}>
                <div className={cn(classes.mcnUsername, classes.mcnOnlyUsername)}>
                  {data?.author_username}
                </div>
                {data?.proffesion && <Profession profession={data?.proffesion} />}
              </div>
            )}
            <div className={classes.mcBioWrapper}>
              <Bio initialValue={data?.description} />
            </div>
            <div className={classes.mcTagsWrapper}>
              <Tags
                initialFirstTag={data?.first_tag}
                initialSecondTag={data?.second_tag}
                initialThirdTag={data?.third_tag}
              />
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
