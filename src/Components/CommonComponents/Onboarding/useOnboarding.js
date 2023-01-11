import { useState, useEffect, useRef } from 'react'

export const useOnboarding = (initialPage, totalPages, initialOpen) => {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const [page, setPage] = useState(initialPage)
  const spotlightedRef = useRef()

  useEffect(() => {
    setPage(initialPage)
  }, [initialPage])

  return {
    isOpen,
    page,
    totalPages,
    spotlightedRef,
    onNextPage() {
      setPage(page + 1)

      if (page + 1 === totalPages) {
        setIsOpen(false)
      }
    },
    onClose() {
      setIsOpen(false)
    }
  }
}
