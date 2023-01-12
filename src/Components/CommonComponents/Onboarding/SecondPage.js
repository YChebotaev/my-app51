import { useRef } from "react";
import Backdrop from './Backdrop'
import NextButton from './NextButton'
import CloseButton from "./CloseButton";
import commonClasses from './common.module.css'
import { useSpotlight } from './useSpotlight'
import Counter from "./Counter";
import { useOnboardingInternal } from './useOnboardingInternal'
import { useArrowUp } from "./useArrowUp";

const SecondPage = () => {
  const textWrapperRef = useRef()
  const arrowRef = useRef()
  const { spotlightRef } = useOnboardingInternal()

  useSpotlight()
  
  /** useArrow must go only after useSpotlight */
  useArrowUp({
    left: 'calc(50% - 150px)',
    spotlightRef,
    textWrapperRef,
    arrowRef
  })

  return (
    <>
      <CloseButton />
      <Counter />
      <Backdrop>
        <div
          ref={arrowRef}
          className={commonClasses.arrowUp}
          style={{
            backgroundSize: 'contain'
          }}
        />
        <div ref={textWrapperRef} className={commonClasses.textWrapper} style={{ position: 'absolute', bottom: 20, width: 'calc(100vw - 60px)' }}>
          <p className={commonClasses.text}>Это раздел статей: здесь вы можете выложить свою, ознакомиться с другими и статьями и зарабатывать баллы, чтобы получать призы от Moove.</p>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
      </Backdrop>
    </>
  )
}

export default SecondPage
