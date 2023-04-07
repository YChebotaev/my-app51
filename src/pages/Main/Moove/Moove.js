import { Link } from 'react-router-dom'
import classes from './Moove.module.css'

export const Moove = () => (
  <Link to="/moove" className={classes.wrapper}>
    <div className={classes.shark} />
    {/* <div className={classes.supertitle}>MOOVE & MTS & SKOLKOVO</div> */}
    <div className={classes.moove}>
      <div className={classes.title}>О программе Moove</div>
      <div className={classes.subtitle}>Пройти в раздел и узнать больше</div>
    </div>
  </Link>
)
