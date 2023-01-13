import { useState } from 'react'

export const useTabs = (initialTabId) => {
  const [tabId, setTabId] = useState(initialTabId)

  return {
    getTabProps(selfTabId) {
      return {
        isActive: tabId === selfTabId,
        onActive() {
          setTabId(selfTabId)
        }
      }
    },
    getContentProps(selfTabId) {
      return {
        isActive: tabId === selfTabId
      }
    }
  }
}
