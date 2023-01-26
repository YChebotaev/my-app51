import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useApiClient } from '../../hooks'
import { FilteringButton } from '../../components/common/FilteringButton'
import { useFiltering } from '../../hooks/useFiltering'
import { PageTitle } from '../../components/common/PageTitle'
import { About } from './About'
import { WhatToRead } from '../../components/common/WhatToRead'
import { Articles } from './Articles'
import classes from './Moove.module.css'
import arrowIcon from '../../styles/images/arrow.svg'

export const Moove = () => {
  const apiClient = useApiClient()
  const { data: rawCategories = [] } = useQuery(['moove_posts', 'all_categories'], async () => {
    const { data } = await apiClient.post('/moove_posts/all_categories')

    return data
  }, {
    select({ categories }) {
      return categories
    }
  })
  const { activeFilters, possibleFilters, onAddFilter, onDeleteFilter } = useFiltering(rawCategories, { maxCount: 1 })
  const { data = [] } = useQuery(
    ['moove_posts', 'all_moove_posts', { category: activeFilters[0] }],
    { select: ({ items }) => items}
  )

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
          <Articles data={data} />
        </div>
      </div>
      <div className={classes.shark} />
    </div>
  )
}
