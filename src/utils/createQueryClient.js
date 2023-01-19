import { QueryClient } from '@tanstack/react-query'

export const createQueryClient = (apiClient) => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        async queryFn({ queryKey }) {
          const url = '/' + queryKey.join('/')

          const { data } = await apiClient.get(url)

          return data
        }
      }
    }
  })
}
