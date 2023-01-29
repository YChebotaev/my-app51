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
        return Array.from(new Set([...activeFilters.slice(1), filter]))
      } else {
        return Array.from(new Set([...activeFilters, filter]))
      }
    })
  }, [setActiveFilters, maxCount])

  return useMemo(() => ({
    activeFilters,
    possibleFilters,
    onDeleteFilter,
    onAddFilter
  }), [activeFilters, possibleFilters, onDeleteFilter, onAddFilter])
}
