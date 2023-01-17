import { useTelegramUserId } from './useTelegramUserId'
import { useLoadImage } from './useLoadImage'

export const useProfilePictureUrl = () => {
  const userId = useTelegramUserId()

  return useLoadImage(
    ['image', userId, 'profile_picture'],
    `../../image/${userId}/profile_picture.png`
  )
}
