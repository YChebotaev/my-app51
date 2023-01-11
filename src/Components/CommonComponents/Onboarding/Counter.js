import classes from './Counter.module.css'
import { useOnboardingInternal } from './useOnboardingInternal'

const Counter = () => {
  const { page, totalPages } = useOnboardingInternal()

  return (
    <div className={classes.counter}>
      <span className={classes.currentPage}>{page + 1}</span>
      {' '}
      <span className={classes.totalPages}>/{' '}{totalPages}</span>
    </div>
  )
}

export default Counter
