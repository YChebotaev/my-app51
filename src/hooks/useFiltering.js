import { useState, useMemo, useCallback } from 'react'

export const useFiltering = (rawPossibleFilters, { maxCount = Infinity } = {}) => {
  const [activeFilters, setActiveFilters] = useState([])
  const possibleFilters = useMemo(() => rawPossibleFilters.filter(name => !activeFilters.includes(name)), [rawPossibleFilters, activeFilters])
  const onDeleteFilter = useCallback((filter) => {
    setActiveFilters(activeFilters => activeFilters.filter(name => name !== filter))
  }, [setActiveFilters])
  const onAddFilter = useCallback((filter) => {
    setActiveFilters(activeFilters => {
      if (activeFilters.length >= maxCount) {
        return [...activeFilters.slice(1), filter]
      } else {
        return [...activeFilters, filter]
      }
    })
  }, [setActiveFilters])

  return useMemo(() => ({
    activeFilters,
    possibleFilters,
    onDeleteFilter,
    onAddFilter
  }), [activeFilters, possibleFilters, onDeleteFilter, onAddFilter])
}
