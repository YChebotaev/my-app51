import classes from './Tabs.module.css'

export const TabsWrapper = ({ children }) => (
  <div className={classes.tabsWrapper}>
    {children}
  </div>
)
