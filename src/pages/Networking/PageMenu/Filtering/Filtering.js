import { useNetworkingContext } from '../../useNetworkingContext'
import classes from './Filtering.module.css'
import filterIcon from '../../../../styles/images/networking-filter.svg'

export const Filtering = () => {
  const { filterButtonRef, activeFilters, onDeleteFilter, onFilterPopupOpen } = useNetworkingContext()

  return (
    <div className={classes.filtering}>
      <button ref={filterButtonRef} className={classes.filteringButton} onClick={onFilterPopupOpen}>
        <img src={filterIcon} alt="Фильтр" />
      </button>
      <div className={classes.filteringItems}>
        {activeFilters.map(filter => (
          <button key={filter} className={classes.filteringItem} onClick={() => onDeleteFilter(filter)}>
            <div className={classes.fiLeft}>{filter}</div>
            <div className={classes.fiRight}></div>
          </button>
        ))}
      </div>
    </div>
  )
}
