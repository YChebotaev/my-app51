import { useMemo } from 'react'
import cn from 'classnames'
import classes from './Profession.module.css'

export const Profession = ({ profession }) => {
  const professionText = useMemo(() => {
    switch (profession) {
      case 'student': return 'Студент'
      case 'profesor': return 'Профессор'
      default: return null
    }
  }, [profession])
  const isRare = useMemo(() => {
    switch (profession) {
      case 'student': return false
      case 'profesor': return true
      default: return false
    }
  }, [profession])

  return (
    <div className={cn(classes.profession, isRare && classes.rareProfession)}>
      {professionText}
    </div>
  )
}
