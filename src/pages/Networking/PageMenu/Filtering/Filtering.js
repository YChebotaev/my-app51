import { useNetworkingContext } from '../../useNetworkingContext'
import classes from './Filtering.module.css'
import filterIcon from '../../../../styles/images/networking-filter.svg'

export const Filtering = () => {
  const { filterButtonRef, activeFilters, onDeleteFilter } = useNetworkingContext()

  return (
    <div className={classes.filtering}>
      <button ref={filterButtonRef} className={classes.filteringButton}>
        <img src={filterIcon} alt="Фильтр" />
      </button>
      <div className={classes.filteringItems}>
        {activeFilters.map(filter => (
          <button key={filter.key} className={classes.filteringItem} onClick={() => onDeleteFilter(filter)}>
            <div className={classes.fiLeft}>{filter.name}</div>
            <div className={classes.fiRight}></div>
          </button>
        ))}
      </div>
    </div>
  )
}
