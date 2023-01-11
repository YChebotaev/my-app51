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
        <div className={commonClasses.textWrapper} style={{ position: 'relative', top: 150 }}>
          <p className={commonClasses.text}>Это раздел игр: здесь все понятно. Заходишь и играешь.</p>
        </div>
        <div className={commonClasses.buttonWrapper} style={{ position: 'relative', top: 150 }}>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
        <div
          className={commonClasses.arrowDown}
          style={{
            position: 'relative',
            top: 170,
            left: 'calc(50% + 50px)',
            width: 110,
            height: 174
          }}  
        />
      </Backdrop>
    </>
  )
}

export default SecondPage
