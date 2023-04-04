import React from "react";
import { useNavigate } from 'react-router-dom'
import Backdrop from './Backdrop'
import NextButton from './NextButton'
import CloseButton from "./CloseButton";
import { useSpotlight } from './useSpotlight'
import Counter from "./Counter";
// import { useOnboardingInternal } from './useOnboardingInternal'
import commonClasses from './common.module.css'

const SecondPage = () => {
  const navigate = useNavigate()
  // const { mainWrapperRef } = useOnboardingInternal()
  useSpotlight(/*{ mainWrapperRef, translateY: -160 }*/)

  return (
    <>
      <CloseButton />
      <Counter />
      <Backdrop>
        <div
          className={commonClasses.arrowUp}
          style={{
            position: 'absolute',
            top: 360,
            left: 'calc(50% + -60px)',
            width: 110,
            height: 174
          }}
        />
        <div className={commonClasses.textWrapper} style={{ position: 'absolute', top: 520, width: 'calc(100vw - 60px)' }}>
          <div className={commonClasses.header}>Отправить вопрос</div>
          <p className={commonClasses.text}>Напишите свои вопросы и мы обязательно ответим на мероприятии</p>
          <NextButton onClick={() => { navigate('/') }}>Понятно, давай дальше</NextButton>
        </div>
      </Backdrop>
    </>
  )
}

export default SecondPage
