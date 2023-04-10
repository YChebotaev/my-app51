import React, { useRef } from "react";
import Backdrop from './Backdrop'
import NextButton from './NextButton'
import CloseButton from "./CloseButton";
import { useSpotlight } from './useSpotlight'
import Counter from "./Counter";
import { useOnboardingInternal } from './useOnboardingInternal'
import commonClasses from './common.module.css'
import { useArrowUp } from './useArrowUp'

const SecondPage = () => {
  const textWrapperRef = useRef()
  const arrowRef = useRef()
  const { spotlightRef } = useOnboardingInternal()

  useSpotlight()

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
        <div
          ref={arrowRef}
          className={commonClasses.arrowUp}
          style={{
            position: 'absolute',
            top: 320,
            left: 'calc(50% + -60px)',
            width: '13vh',
            height: '16vh'
          }}
        />
        <div ref={textWrapperRef} className={commonClasses.textWrapper} style={{ position: 'absolute', bottom: '10vh', width: 'calc(100vw - 60px)' }}>
          <div className={commonClasses.header}>О программе MOOVE</div>
          <p className={commonClasses.text}>Узнай подробности совместной программы Школы Управления Сколково и МТС по запуску стартапа и управлению цифровым продуктом внутри компании</p>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
      </Backdrop>
    </>
  )
}

export default SecondPage
