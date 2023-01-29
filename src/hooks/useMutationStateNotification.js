import { useState } from 'react'
import okIcon from '../styles/images/ok-icon.svg'
import failIcon from '../styles/images/fail-icon.svg'

export const EMPTY_STATE = null
export const SUCCESS_STATE = 'success'
export const FAIL_STATE = 'fail'

export const SUCCESS_ICON = <img src={okIcon} alt="" />
export const FAIL_ICON = <img src={failIcon} alt="" />

export const useMutationStateNotification = (mapping) => {
  const [mutationState, setMutationState] = useState(EMPTY_STATE)

  const clearState = () => {
    setMutationState(EMPTY_STATE)
  }

  return {
    setSucceed({
      autohide = true,
      autohideTimeout = 3000,
      onTimeout
    } = {}) {
      setMutationState(SUCCESS_STATE)

      if (autohide) {
        setTimeout(() => {
          setMutationState(EMPTY_STATE)

          if (typeof onTimeout === 'function') {
            onTimeout()
          }
        }, autohideTimeout)
      }
    },
    setFailed({
      autohide = true,
      autohideTimeout = 3000,
      onTimeout
    } = {}) {
      setMutationState(FAIL_STATE)

      if (autohide) {
        setTimeout(() => {
          setMutationState(EMPTY_STATE)

          if (typeof onTimeout === 'function') {
            onTimeout()
          }
        }, autohideTimeout)
      }
    },
    clearState,
    getNotificationProps() {
      const { text, icon } = mapping(mutationState) ?? { text: null, icon: null }

      return {
        isOpen: mutationState != null,
        text,
        icon,
        onClose() {
          clearState()
        }
      }
    }
  }
}
