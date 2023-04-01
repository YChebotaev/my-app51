import React from "react";
import Backdrop from './Backdrop'
import NextButton from './NextButton'
import CloseButton from "./CloseButton";
import commonClasses from './common.module.css'
import { useSpotlight } from './useSpotlight'
import Counter from "./Counter";

const SecondPage = () => {
  useSpotlight()

  return (
    <>
      <CloseButton />
      <Counter />
      <Backdrop>
        <div
          className={commonClasses.arrowUp}
          style={{
            position: 'absolute',
            top: 190,
            left: 'calc(50% + -60px)',
            width: 110,
            height: 174
          }}  
        />
        <div className={commonClasses.textWrapper} style={{ position: 'absolute', top: 340, width: 'calc(100vw - 60px)' }}>
          <div className={commonClasses.header}>О программе MOOVE</div>
          <p className={commonClasses.text}>(Узнай подробности совместной программы Школы Управления Сколково и МТС по запуску стартапа и управлению цифровым продуктом внутри компании)</p>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
      </Backdrop>
    </>
  )
}

export default SecondPage
