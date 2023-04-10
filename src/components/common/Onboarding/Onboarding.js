import React, { useEffect, useMemo, useRef } from "react";
// import FirstPage from "./FirstPage";
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FifthPage from './FifthPage'
import context from './context'

const Onboarding = ({ page, spotlightedRef, mainWrapperRef, totalPages, onNextPage, onClose }) => {
  const spotlightRef = useRef()
  const currentPage = useMemo(() => {
    switch (page) {
      case 0:
        return <FourthPage />
      case 1:
        return <SecondPage />
      case 2:
        return <FifthPage />
      case 3:
        return <ThirdPage />
      default:
        return null
    }
  }, [page])

  useEffect(() => {
    if (currentPage != null) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.removeProperty('overflow')
    }
  }, [currentPage])

  return (
    <context.Provider value={{
      page,
      totalPages,
      spotlightRef,
      spotlightedRef,
      mainWrapperRef,
      onNextPage,
      onClose
    }}>
      {currentPage}
    </context.Provider>
  )
}

export default Onboarding
