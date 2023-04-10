import React, { useRef } from "react";
import { useOnboardingInternal } from './useOnboardingInternal'
import { useArrowDown } from './useArrowDown'
import Backdrop from './Backdrop'
import NextButton from './NextButton'
import CloseButton from "./CloseButton";
import commonClasses from './common.module.css'
import { useSpotlight } from './useSpotlight'
import Counter from "./Counter";

const SecondPage = () => {
  const textWrapperRef = useRef()
  const arrowRef = useRef()
  const { spotlightRef } = useOnboardingInternal()

  useSpotlight()

  useArrowDown({
    left: 'calc(50% - -46px)',
    spotlightRef,
    textWrapperRef,
    arrowRef
  })

  return (
    <>
      <CloseButton />
      <Counter />
      <Backdrop>
        <div ref={textWrapperRef} className={commonClasses.textWrapper} style={{ position: 'absolute', top: '40vh', width: 'calc(100vw - 60px)' }}>
          <div className={commonClasses.header}>Отправить статью</div>
          <p className={commonClasses.text}>Мы принимаем авторские материалы по теме комьюнити с редакционной поддержкой с нашей стороны</p>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
        <div
          ref={arrowRef}
          className={commonClasses.arrowDown}
          style={{
            position: 'absolute',
            bottom: '10vh',
            left: 'calc(50% + 40px)',
            width: 110,
            height: 174
          }}
        />
      </Backdrop>
    </>
  )
}

export default SecondPage
