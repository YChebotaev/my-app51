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
            top: 270,
            left: 'calc(50% + -60px)',
            width: '13vh',
            height: '16vh'
          }}
        />
        <div className={commonClasses.textWrapper} style={{ position: 'absolute', bottom: '10vh', width: 'calc(100vw - 60px)' }}>
          <div className={commonClasses.header}>О программе MOOVE</div>
          <p className={commonClasses.text}>Узнай подробности совместной программы Школы Управления Сколково и МТС по запуску стартапа и управлению цифровым продуктом внутри компании</p>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
      </Backdrop>
    </>
  )
}

export default SecondPage
