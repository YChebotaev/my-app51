import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useApiClient } from './useApiClient'

export const useLoadImage = (queryKey, src) => {
  const apiClient = useApiClient()

  const result = useQuery(queryKey, async () => {
    const { data } = await apiClient.get(src, { responseType: 'blob' })

    return data
  }, {
    select(data) {
      const url = URL.createObjectURL(data)

      return url
    }
  })

  useEffect(() => () => {
    if (result.data) {
      URL.revokeObjectURL(result.data)
    }
  }, [result.data])

  return result
}
