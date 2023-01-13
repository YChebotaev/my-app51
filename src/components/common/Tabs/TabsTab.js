import { TabCount } from './TabCount'
import classes from './Tabs.module.css'

export const TabsTab = ({ isActive, onActive, count, children }) => {
  return (
    <div className={`${classes.tab} ${isActive ? classes.activeTab : classes.passiveTab}`} onClick={onActive}>
      <div className={classes.tabName}>{children}</div>
      {count}
    </div>
  )
}

TabsTab.Count = TabCount
