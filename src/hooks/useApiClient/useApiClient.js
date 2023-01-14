import { useContext } from 'react'
import context from './context'

export const useApiClient = () => useContext(context)

useApiClient.Provider = ({ apiClient, children }) => (
  <context.Provider value={apiClient}>
    {children}
  </context.Provider>
)
