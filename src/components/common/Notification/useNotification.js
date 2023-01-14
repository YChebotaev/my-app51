import { useState } from 'react'

export const useNotification = ({
  initialIsOpen = false
} = {}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)

  return {
    isOpen,
    onOpen({ timeout } = {}) {
      setIsOpen(true)

      if (timeout != null) {
        setTimeout(() => {
          setIsOpen(false)
        }, timeout)
      }
    }
  }
}
