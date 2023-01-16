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
import { useApiClient } from '../../hooks'
import { PageTitle } from '../../components/common/PageTitle'
import { TitleSeparator } from '../../components/networking/TitleSeparator'
import classes from './Networking.module.css'

export const Networking = () => {
  const apiClient = useApiClient()
  const filterButtonRef = useRef()
  const [viewMode, setViewMode] = useState('grid') // 'list' | 'grid'
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState([
    {
      id: '0112dbf5-1114-4664-8aca-4b6601de6d64',
      name: 'Дизайн'
    },
    {
      id: '553d8b3e-c5d8-4843-90b9-0b0e86a14244',
      name: 'Финтех'
    }
  ])
  let { data, isLoading } = useQuery(['cards', 'all_cards'], async () => {
    const { data } = await apiClient.post(
      '/cards/all_cards',
      {
        first_tag: null,
        second_tag: null
      }
      // {
      //   ...(activeFilters[0] ? { first_tag: activeFilters[0].name } : {}),
      //   ...(activeFilters[1] ? { second_tag: activeFilters[1].name } : {}),
      // }
    )

    return data
    // return {
    //   cards: [
    //     { id: '67c44aec-9f7c-43cd-aec0-4d384bbeaaa1' },
    //     { id: '9bb1bcfd-19c7-4265-abb1-acd3b7eaffc9' },
    //     { id: '8c2ff035-7568-48ef-838a-475623aee6f0' },
    //     { id: '99cb182a-99ea-430e-a72f-ebfd74194197' },
    //     { id: 'e3236fbf-dc7b-418c-88c8-c558cb82ebf5' },
    //     { id: 'dea07cf4-9dd2-47a4-8dea-a01ced6637f9' },
    //     { id: '3554c6d8-32aa-4cb1-804b-ed9e952b41f2' }
    //   ]
    // }
  }, {
    select({ cards }) {
      return cards
    }
  })
  // isLoading = true
  const [possibleFilters, setPossibleFilters] = useState([
    {
      id: '0112dbf5-1114-4664-8aca-4b6601de6d64',
      name: 'Дизайн'
    },
    {
      id: '553d8b3e-c5d8-4843-90b9-0b0e86a14244',
      name: 'Финтех'
    },
    {
      id: 'dd439afb-c9f8-492e-a9e4-8b42242ead73',
      name: 'Дизайн'
    },
    {
      id: '1fbc0ec4-b758-4913-8630-fb7106c6ed29',
      name: 'Финтех'
    },
    {
      id: '7a985d64-18fe-4077-adff-115796a36e69',
      name: 'Дизайн'
    },
  ])
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
      onDeleteFilter(filter) {
        setPossibleFilters(
          filters => [...filters, filter]
        )
        setActiveFilters(
          filters => () => filters.filter(f => f.id !== filter.id)
        )
      },
      onAddFilter(filter) {
        setPossibleFilters(
          filters => () => filters.filter(f => f.id !== filter.id)
        )
        setActiveFilters(
          filters => [...filters, filter]
        )
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
      </div>
    </context.Provider>
  )
}
