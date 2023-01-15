import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTelegramUserId } from './useTelegramUserId'
import { useApiClient } from './useApiClient'

export const useProfilePictureUrl = () => {
  const userId = useTelegramUserId()
  const apiClient = useApiClient()

  const result = useQuery(['image', userId, 'profile_picture'], async () => {
    const { data } = await apiClient.get(`../../image/${userId}/profile_picture.png`, {
      responseType: 'blob'
    })

    const url = URL.createObjectURL(data)

    return url
  })

  useEffect(() => () => {
    if (result.data) {
      URL.revokeObjectURL(result.data)
    }
  }, [result.data])

  return result
}
