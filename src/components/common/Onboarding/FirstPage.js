import React, { useRef } from "react";
import Backdrop from './Backdrop'
import NextButton from './NextButton'
import CloseButton from "./CloseButton";
import commonClasses from './common.module.css'
import { useSpotlight } from './useSpotlight'
import Counter from "./Counter";
import { useOnboardingInternal } from './useOnboardingInternal'
import { useArrowUp } from "./useArrowUp";

const FirstPage = () => {
  const textWrapperRef = useRef()
  const arrowRef = useRef()
  const { spotlightRef } = useOnboardingInternal()

  useSpotlight()

  /** useArrow must go only after useSpotlight */
  useArrowUp({
    left: 'calc(50% - 150px)',
    spotlightRef,
    textWrapperRef,
    arrowRef
  })

  return (
    <>
      <CloseButton />
      <Counter />
      <Backdrop>
        <div ref={textWrapperRef} className={commonClasses.textWrapper} style={{ position: 'absolute', top: 430, width: 'calc(100vw - 60px)' }}>
          <div className={commonClasses.header}>Библиотека</div>
          <p className={commonClasses.text}>Изучите все образовательные материалы программы MOOVE</p>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
        <div
          ref={arrowRef}
          className={commonClasses.arrowUp}
          style={{ backgroundSize: 'contain' }}
        />
      </Backdrop>
    </>
  )
}

export default FirstPage
