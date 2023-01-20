import { QueryClient } from '@tanstack/react-query'

export const createQueryClient = (apiClient) => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        async queryFn({ queryKey }) {
          const params = queryKey[queryKey.length - 1]

          if (typeof params === 'object') {
            const url = '/' + queryKey.slice(0, -1).join('/')

            const { data } = await apiClient.get(url, { params })

            return data
          } else {
            const url = '/' + queryKey.join('/')

            const { data } = await apiClient.get(url)

            return data
          }
        }
      }
    }
  })
}
