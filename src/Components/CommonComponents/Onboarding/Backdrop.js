// import { useEffect } from 'react'
import { useOnboardingInternal } from './useOnboardingInternal'
import classes from './Backdrop.module.css'

const Backdrop = ({ children }) => {
  const { spotlightRef } = useOnboardingInternal()

  return (
    <>
      <div className={classes.overlay}>
        <div ref={spotlightRef} className={classes.spotlight} />
      </div>
      <div className={classes.backdrop}>
        {children}
      </div>
    </>
  )
}

export default Backdrop
