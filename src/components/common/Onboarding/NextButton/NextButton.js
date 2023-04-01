import { useOnboardingInternal } from '../useOnboardingInternal'
import classes from './NextButton.module.css'

const NextButton = ({ onClick, children }) => {
  const { onNextPage } = useOnboardingInternal()

  return (
    <button className={classes.nextButton} onClick={onClick ?? onNextPage}>
      {children}
    </button>
  )
}

export default NextButton
