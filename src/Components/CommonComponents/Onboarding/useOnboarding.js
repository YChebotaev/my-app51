import { useState, useEffect, useRef } from 'react'

export const useOnboarding = (initialPage, totalPages) => {
  const [isOpen, setIsOpen] = useState(true)
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
    },
    onClose() {
      setIsOpen(false)
    }
  }
}
