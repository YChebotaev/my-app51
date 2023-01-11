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
            top: 370,
            left: 'calc(50% - 150px)',
            width: 160,
            height: 174
          }}
        />
        <div className={commonClasses.textWrapper} style={{ position: 'absolute', top: 530, width: 'calc(100vw - 60px)' }}>
          <p className={commonClasses.text}>Это раздел статей: здесь вы можете выложить свою, ознакомиться с другими и статьями и зарабатывать баллы, чтобы получать призы от Moove.</p>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
      </Backdrop>
    </>
  )
}

export default SecondPage
