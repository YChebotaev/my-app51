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
        <div className={commonClasses.textWrapper} style={{ position: 'relative', top: 400 }}>
          <p className={commonClasses.text}>Чтобы перейти к написанию новой  статьи, нажми на эту кнопку</p>
        </div>
        <div className={commonClasses.buttonWrapper} style={{ position: 'relative', top: 410 }}>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
        <div
          className={commonClasses.arrowDown2}
          style={{
            position: 'relative',
            top: 470,
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
