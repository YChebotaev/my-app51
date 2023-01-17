import { useMemo } from 'react'
import classes from './Profession.module.css'

export const Profession = ({ profession }) => {
  const professionText = useMemo(() => {
    switch (profession) {
      case 'student': return 'Студент'
      case 'profesor': return 'Профессор'
      default: return null
    }
  }, [profession])

  return (
    <div className={classes.profession}>
      {professionText}
    </div>
  )
}
