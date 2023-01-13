import { useContext } from 'react'
import context from './context'

export const useOnboardingInternal = () => {
  return useContext(context)
}
