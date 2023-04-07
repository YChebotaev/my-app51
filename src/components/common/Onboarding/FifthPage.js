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
          className={commonClasses.textWrapper}
          style={{
            position: 'absolute',
            top: 180,
            width: 'calc(100vw - 60px)'
          }}
        >
          <p className={commonClasses.text}>Чтобы перейти к написанию новой статьи, нажми на эту кнопку</p>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
        <div
          className={commonClasses.arrowDown2}
          style={{
            position: 'absolute',
            top: 290,
            left: 'calc(50% - 100px)',
            width: 154,
            height: 174
          }}
        />
      </Backdrop>
    </>
  )
}

export default SecondPage
