import { TabsWrapper } from './TabsWrapper'
import { TabsContent } from './TabsContent'
import { TabsTab } from './TabsTab'
import classes from './Tabs.module.css'

export const Tabs = ({ children }) => {
  return (
    <div className={classes.tabs}>
      {children}
    </div>
  )
}

Tabs.Wrapper = TabsWrapper
Tabs.Content = TabsContent
Tabs.Tab = TabsTab
