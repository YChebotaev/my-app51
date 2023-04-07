import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

import classes from './Library.module.css'

export const Library = forwardRef(
  (_, ref) => (
    <Link ref={ref} to="/moove" className={classes.wrapper}>
      {/* <div className={classes.supertitle}>MOOVE & MTS & SKOLKOVO</div> */}
      <div className={classes.library}>
        <div className={classes.title}>Библиотека</div>
        <div className={classes.subtitle}>Образовательные материалы программы MOOVE</div>
      </div>
    </Link>
  )
)
