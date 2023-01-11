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
        <div className={commonClasses.textWrapper} style={{ position: 'absolute', top: 320, width: 'calc(100vw - 60px)' }}>
          <p className={commonClasses.text}>Раздел чатов, где происходит основное общение с участниками</p>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
        <div
          className={commonClasses.arrowDown}
          style={{
            position: 'absolute',
            top: 460,
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
