import { useOnboardingInternal } from '../useOnboardingInternal'
import classes from './NextButton.module.css'

const NextButton = ({ children }) => {
  const { onNextPage } = useOnboardingInternal()

  return (
    <button className={classes.nextButton} onClick={onNextPage}>
      {children}
    </button>
  )
}

export default NextButton
