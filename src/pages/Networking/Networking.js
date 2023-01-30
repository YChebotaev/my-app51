import { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import context from './context'
import { MyCardLink } from './MyCardLink'
import { PageMenu } from './PageMenu'
import { ListCards } from './ListCards'
import { GridCards } from './GridCards'
import { ListSkeleton } from './ListSkeleton'
import { GridSkeleton } from './GridSkeleton'
import { Empty } from './Empty'
import { BlockedBackdrop } from './BlockedBackdrop'
import { useApiClient, useFiltering } from '../../hooks'
import { PageTitle } from '../../components/common/PageTitle'
import { TitleSeparator } from '../../components/networking/TitleSeparator'
import classes from './Networking.module.css'
import { TopmostMenu } from '../../components/common/TopmostMenu/TopmostMenu'

export const Networking = () => {
  const apiClient = useApiClient()
  const [viewMode, setViewMode] = useState('list') // 'list' | 'grid'
  const [isBlocked, setIsBlocked] = useState(false)
  const { data: rawPossibleFilters = [] } = useQuery(['cards', 'tags'])
  const { activeFilters, possibleFilters, onAddFilter, onDeleteFilter } = useFiltering(rawPossibleFilters, { maxCount: 3 })
  useQuery(['cards', 'my_card'], async () => {
    const { data } = await apiClient.get('/cards/my_card')

    return data
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
  const [items, skeleton] = useMemo(() => {
    if (data && data.length === 0) {
      return [<Empty />, null]
    }

    switch (viewMode) {
      case 'list': return [
        <ListCards data={data} onAddFilter={onAddFilter} />,
        <ListSkeleton count={3} onAddFilter={onAddFilter} />
      ]
      case 'grid': return [
        <GridCards data={data} onAddFilter={onAddFilter} />,
        <GridSkeleton count={3} onAddFilter={onAddFilter} />
      ]
      default: return [null, null]
    }
  }, [data, viewMode, onAddFilter])

  return (
    <context.Provider value={{
      viewMode,
      activeFilters,
      possibleFilters,
      onViewModeChange(viewMode) {
        setViewMode(viewMode)
      },
      onDeleteFilter,
      onAddFilter
    }}>
      <div className={classes.networkingWrapper}>
        <div className={classes.networking}>
          <TopmostMenu />
          <TopmostMenu.TitleSeparator />
          <PageTitle right={<MyCardLink />}>
            <div className={classes.pageTitle}>Нетворкинг</div>
          </PageTitle>
          <TitleSeparator />
          <PageMenu />
          {isLoading ? skeleton : items}
        </div>
        {isBlocked && (
          <BlockedBackdrop />
        )}
      </div>
    </context.Provider>
  )
}
