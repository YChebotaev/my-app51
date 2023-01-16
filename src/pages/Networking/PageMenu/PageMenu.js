import { ViewMode } from './ViewMode'
import { Filtering } from './Filtering'
import classes from './PageMenu.module.css'

export const PageMenu = () => (
  <div className={classes.pageMenu}>
    <div className={classes.pmLeft}>
      <Filtering />
    </div>
    <div className={classes.pmRight}>
      <ViewMode />
    </div>
  </div>
)
