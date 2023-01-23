import { useState, useMemo, useCallback } from 'react'

export const useFiltering = (rawPossibleFilters) => {
  const [activeFilters, setActiveFilters] = useState([])
  const possibleFilters = useMemo(() => rawPossibleFilters.filter(name => !activeFilters.includes(name)), [rawPossibleFilters, activeFilters])
  const onDeleteFilter = useCallback((filter) => {
    setActiveFilters(activeFilters => activeFilters.filter(name => name !== filter))
  }, [setActiveFilters])
  const onAddFilter = useCallback((filter) => {
    setActiveFilters(activeFilters => [...activeFilters, filter])
  }, [setActiveFilters])

  return useMemo(() => ({
    activeFilters,
    possibleFilters,
    onDeleteFilter,
    onAddFilter
  }), [activeFilters, possibleFilters, onDeleteFilter, onAddFilter])
}
