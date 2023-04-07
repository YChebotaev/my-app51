import { useRef } from "react";
import { useNavigate } from 'react-router-dom'
import Backdrop from './Backdrop'
import NextButton from './NextButton'
import CloseButton from "./CloseButton";
import { useSpotlight } from './useSpotlight'
import Counter from "./Counter";
// import { useOnboardingInternal } from './useOnboardingInternal'
// import { useArrowUp } from "./useArrowUp";
import commonClasses from './common.module.css'

const SecondPage = () => {
  // const navigate = useNavigate()
  const textWrapperRef = useRef()
  // const arrowRef = useRef()
  // const { spotlightRef } = useOnboardingInternal()

  useSpotlight()

  // /** useArrow must go only after useSpotlight */
  // useArrowUp({
  //   left: 'calc(50% - 150px)',
  //   spotlightRef,
  //   textWrapperRef,
  //   arrowRef
  // })

  return (
    <>
      <CloseButton />
      <Counter />
      <Backdrop>
        <div
          ref={textWrapperRef}
          className={commonClasses.textWrapper}
          style={{
            position: 'absolute',
            top: 40,
            width: 'calc(100vw - 60px)'
          }}
        >
          <div className={commonClasses.header}>Библиотека</div>
          <p className={commonClasses.text}>Изучите все образовательные материалы программы MOOVE</p>
          <NextButton>Понятно, давай дальше</NextButton>
        </div>
        <div
          className={commonClasses.arrowDown}
          style={{
            position: 'absolute',
            top: 190,
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
