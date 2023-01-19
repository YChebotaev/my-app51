import { useSlate } from 'slate-react'
import cn from 'classnames'
import classes from './FormatButton.module.css'
import { isFormatActive } from '../../isFormatActive'
import { toggleFormat } from '../../toggleFormat'

export const FormatButton = ({ format, icon }) => {
  const editor = useSlate()
  const active = isFormatActive(editor, format)

  return (
    <button
      className={cn(classes.formatButton, active && classes.fbActive)}
      onClick={() => toggleFormat(editor, format)}
    >
      {icon}
    </button>
  )
}
