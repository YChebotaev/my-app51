import classes from './NextButton.module.css'
import { useOnboardingInternal } from './useOnboardingInternal'

const NextButton = ({ children }) => {
  const { onNextPage } = useOnboardingInternal()

  return (
    <button className={classes.nextButton} onClick={onNextPage}>
      {children}
    </button>
  )
}

export default NextButton
