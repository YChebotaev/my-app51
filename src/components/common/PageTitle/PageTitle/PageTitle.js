import classes from './PageTitle.module.css'

export const PageTitle = ({ right, children }) => {
  return (
    <div className={classes.pageTitle}>
      <div className={classes.ptLeft}>
        {children}
      </div>
      <div className={classes.ptRight}>
        {right}
      </div>
    </div>
  )
}
