import classes from './CloseButton.module.css'
import { useOnboardingInternal } from '../useOnboardingInternal'
import closeImage from '../../../../styles/images/close.svg'

const CloseButton = () => {
  const { onClose } = useOnboardingInternal()

  return (
    <button className={classes.closeButton} onClick={onClose}>
      <img src={closeImage} alt="" />
    </button>
  )
}

export default CloseButton
