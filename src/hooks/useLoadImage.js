import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useApiClient } from './useApiClient'
import axios from 'axios'
import { getTelegramUserId } from '../utils'

export const useLoadImage = (queryKey, src, placeholderSrc) => {
  const apiClient = useApiClient()

  const result = useQuery(queryKey, async () => {
    if (src == null && placeholderSrc != null) {
      const { data } = await axios.get(placeholderSrc, {
        responseType: 'blob',
        headers: apiClient.getDefaultHeaders()
      })

      return data
    } else
    if (src != null) {
      if (src.startsWith('http')) {
        const { data } = await axios.get(src, {
          responseType: 'blob',
          headers: apiClient.getDefaultHeaders()
        })

        return data
      } else {
        const { data } = await apiClient.get(src, { responseType: 'blob' })

        return data
      }
    } else {
      return null
    }
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
