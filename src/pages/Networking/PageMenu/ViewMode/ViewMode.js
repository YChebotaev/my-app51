import { useNetworkingContext } from '../../useNetworkingContext'
import vmGridActiveIcon from '../../../../styles/images/view-mode-grid-active.svg'
import vmGridPassiveIcon from '../../../../styles/images/view-mode-grid-passive.svg'
import vmListActiveIcon from '../../../../styles/images/view-mode-list-active.svg'
import vmListPassiveIcon from '../../../../styles/images/view-mode-list-passive.svg'
import classes from './ViewMode.module.css'

export const ViewMode = () => {
  const { viewMode, onViewModeChange } = useNetworkingContext()

  return (
    <div className={classes.viewMode}>
      <button className={classes.vmButton} onClick={() => onViewModeChange('grid')}>
        <img src={viewMode === 'grid' ? vmGridActiveIcon : vmGridPassiveIcon} alt="Таблицей" />
      </button>
      <button className={classes.vmButton} onClick={() => onViewModeChange('list')}>
        <img src={viewMode === 'list' ? vmListActiveIcon : vmListPassiveIcon} alt="Списком" />
      </button>
    </div>
  )
}
