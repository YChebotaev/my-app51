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
        <div className={commonClasses.textWrapper} style={{ position: 'relative', top: 510 }}>
          <p className={commonClasses.text}>Это раздел статей: здесь вы можете выложить свою, ознакомиться с другими и статьями и зарабатывать баллы, чтобы получать призы от Moove.</p>
        </div>
        <div
          className={commonClasses.arrowUp}
          style={{
            position: 'relative',
            top: '250px',
            left: 'calc(50% - 150px)',
            width: 160,
            height: 174
          }}
        />
        <div className={commonClasses.buttonWrapper} style={{ position: 'relative', top: 350 }}>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
      </Backdrop>
    </>
  )
}

export default SecondPage
