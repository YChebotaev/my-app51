import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
// import { useSearchParams } from 'react-router-dom'
// import Onboarding, { useOnboarding } from '../../components/common/Onboarding'
import { useApiClient } from '../../hooks'
import { FilteringButton } from '../../components/common/FilteringButton'
import { useFiltering } from '../../hooks/useFiltering'
import { PageTitle } from '../../components/common/PageTitle'
// import { About } from './About'
import { WhatToRead } from '../../components/common/WhatToRead'
import { Articles } from './Articles'
// import { Events } from './Events'
import classes from './Moove.module.css'
import arrowIcon from '../../styles/images/arrow.svg'

export const Moove = () => {
  const apiClient = useApiClient()
  // const [ searchParams ] = useSearchParams()
  // const isShowOnboarding = searchParams.get('onboarding') === 'true'

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
  // const {
  //   isOpen,
  //   page,
  //   spotlightedRef,
  //   totalPages,
  //   mainWrapperRef,
  //   // onOpen,
  //   onNextPage,
  //   onClose
  // } = useOnboarding({
  //   initialPage: 2,
  //   totalPages: 4,
  //   initialOpen: isShowOnboarding
  // })
  // const aboutMooveRef = (isOpen && page === 1) ? spotlightedRef : null
  // const eventsRef = (isOpen && page === 2) ? spotlightedRef : null

  return (
    <div className={classes.moove}>
      <PageTitle>
        <Link to="/" className={classes.pageTitle}>
          <img src={arrowIcon} alt="" />
          Библиотека
        </Link>
      </PageTitle>
      {/* <div className={classes.aboutWrapper}>
        <About ref={aboutMooveRef} />
      </div> */}
      {/* <div className={classes.eventsWrapper}>
        <Events ref={eventsRef} />
      </div> */}
      <div className={classes.backdrop}>
        {/* <div className={classes.whatToReadWrapper}>
          <WhatToRead withTitle={false} />
        </div> */}
        {/* <div className={classes.separator} /> */}
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
      {/* <div className={classes.shark} /> */}
      <div className={classes.heart} />
      {/* {isShowOnboarding && (
        <Onboarding
          page={page}
          totalPages={totalPages}
          spotlightedRef={spotlightedRef}
          mainWrapperRef={mainWrapperRef}
          onNextPage={onNextPage}
          onClose={onClose}
        />
      )} */}
    </div>
  )
}
