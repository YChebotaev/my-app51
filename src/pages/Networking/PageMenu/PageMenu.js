import { ViewMode } from './ViewMode'
import { useNetworkingContext } from '../useNetworkingContext'
import { FilteringButton } from '../../../components/common/FilteringButton'
import classes from './PageMenu.module.css'

export const PageMenu = () => {
  const { filterButtonRef, activeFilters, possibleFilters, onDeleteFilter, onAddFilter } = useNetworkingContext()

  return (
    <div className={classes.pageMenu}>
      <div className={classes.pmLeft}>
        <FilteringButton
          filterButtonRef={filterButtonRef}
          activeFilters={activeFilters}
          possibleFilters={possibleFilters}
          onDeleteFilter={onDeleteFilter}
          onAddFilter={onAddFilter}
        />
      </div>
      <div className={classes.pmRight}>
        <ViewMode />
      </div>
    </div>
  )
}
