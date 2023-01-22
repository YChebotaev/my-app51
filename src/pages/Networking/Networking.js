import { useState, useMemo, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import context from './context'
import { MyCardLink } from './MyCardLink'
import { PageMenu } from './PageMenu'
import { ListCards } from './ListCards'
import { GridCards } from './GridCards'
import { FilterPopup } from './FilterPopup'
import { ListSkeleton } from './ListSkeleton'
import { GridSkeleton } from './GridSkeleton'
import { Empty } from './Empty'
import { BlockedBackdrop } from './BlockedBackdrop'
import { useApiClient } from '../../hooks'
import { PageTitle } from '../../components/common/PageTitle'
import { TitleSeparator } from '../../components/networking/TitleSeparator'
import classes from './Networking.module.css'

export const Networking = () => {
  const apiClient = useApiClient()
  const filterButtonRef = useRef()
  const [viewMode, setViewMode] = useState('list') // 'list' | 'grid'
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState([])
  const [isBlocked, setIsBlocked] = useState(false)
  useQuery(['cards', 'my_card'], async () => {
    const { data } = await apiClient.get('/cards/my_card')

    return data // === null ? { blocked: true } : data
  }, {
    onSuccess(data) {
      if (data === null) {
        setIsBlocked(true)
      }
    }
  })
  const { data, isLoading } = useQuery(['cards', 'all_cards', {
    ...(activeFilters[0] ? { first_tag: activeFilters[0] } : null),
    ...(activeFilters[1] ? { second_tag: activeFilters[1] } : null),
    ...(activeFilters[2] ? { third_tag: activeFilters[2] } : null),
  }], async () => {
    const { data } = await apiClient.post(
      '/cards/all_cards',
      {
        ...(activeFilters[0] ? { first_tag: activeFilters[0] } : null),
        ...(activeFilters[1] ? { second_tag: activeFilters[1] } : null),
        ...(activeFilters[2] ? { third_tag: activeFilters[2] } : null),
      }
    )

    return data
  }, {
    select({ items }) {
      return items
    }
  })
  const { data: rawPossibleFilters = [] } = useQuery(['cards', 'tags'])
  // const [possibleFilters, setPossibleFilters] = useState([
  //   {
  //     id: 'dd439afb-c9f8-492e-a9e4-8b42242ead73',
  //     name: 'Дизайн'
  //   },
  //   {
  //     id: '1fbc0ec4-b758-4913-8630-fb7106c6ed29',
  //     name: 'Финтех'
  //   },
  // ])
  const possibleFilters = useMemo(() => {
    return rawPossibleFilters.filter(name => !activeFilters.includes(name))
  }, [rawPossibleFilters, activeFilters])
  const items = useMemo(() => {
    if (data && data.length === 0) {
      return <Empty />
    }

    switch (viewMode) {
      case 'list': return <ListCards data={data} />
      case 'grid': return <GridCards data={data} />
      default: return null
    }
  }, [viewMode, data])
  const skeleton = useMemo(() => {
    switch (viewMode) {
      case 'list': return <ListSkeleton count={3} />
      case 'grid': return <GridSkeleton count={3} />
      default: return null
    }
  }, [viewMode])

  return (
    <context.Provider value={{
      viewMode,
      filterButtonRef,
      activeFilters,
      possibleFilters,
      onViewModeChange(viewMode) {
        setViewMode(viewMode)
      },
      onFilterPopupClose() {
        setIsFilterPopupOpen(false)
      },
      onFilterPopupOpen() {
        setIsFilterPopupOpen(true)
      },
      onDeleteFilter(filter) {
        setActiveFilters(activeFilters.filter(name => name !== filter))
      },
      onAddFilter(filter) {
        setActiveFilters([...activeFilters, filter])
      }
    }}>
      <div className={classes.networkingWrapper}>
        <div className={classes.networking}>
          <PageTitle right={<MyCardLink />}>
            <div className={classes.pageTitle}>Нетворкинг</div>
          </PageTitle>
          <TitleSeparator />
          <PageMenu />
          {isLoading ? skeleton : items}
        </div>
        {isFilterPopupOpen && (
          <FilterPopup />
        )}
        {isBlocked && (
          <BlockedBackdrop />
        )}
      </div>
    </context.Provider>
  )
}
