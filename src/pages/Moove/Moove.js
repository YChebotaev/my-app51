import { Link } from 'react-router-dom'
import { FilteringButton } from '../../components/common/FilteringButton'
import { useFiltering } from '../../hooks/useFiltering'
import { PageTitle } from '../../components/common/PageTitle'
import { About } from './About'
import { WhatToRead } from '../../components/common/WhatToRead'
import { Articles } from './Articles'
import classes from './Moove.module.css'
import arrowIcon from '../../styles/images/arrow.svg'

export const Moove = () => {
  const { activeFilters, possibleFilters, onAddFilter, onDeleteFilter } = useFiltering([
    'Питчинги',
    'Лекции',
    'Стартапы выпускников',
    'Читать буквы'
  ])

  return (
    <div className={classes.moove}>
      <PageTitle>
        <Link to="/" className={classes.pageTitle}>
          <img src={arrowIcon} alt="" />
          MOOVE x MTS x Skolkovo
        </Link>
      </PageTitle>
      <div className={classes.aboutWrapper}>
        <About />
      </div>
      <div className={classes.backdrop}>
        <div className={classes.whatToReadWrapper}>
          <WhatToRead withTitle={false} />
        </div>
        <div className={classes.separator} />
        <div className={classes.menu}>
          <FilteringButton
            activeFilters={activeFilters}
            possibleFilters={possibleFilters}
            onAddFilter={onAddFilter}
            onDeleteFilter={onDeleteFilter}
          />
        </div>
        <div className={classes.articlesWrapper}>
          <Articles />
        </div>
      </div>
    </div>
  )
}
