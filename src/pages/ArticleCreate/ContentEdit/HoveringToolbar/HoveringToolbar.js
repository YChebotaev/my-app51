import { useEffect, useRef } from 'react'
import { Editor, Range } from 'slate'
import { useFocused, useSlate } from 'slate-react'
import { Portal } from './Portal'
import { Menu } from './Menu'
import { FormatButton } from './FormatButton'
import classes from './HoveringToolbar.module.css'
import boldIcon from '../../../../styles/images/bold-icon.svg'
import italicIcon from '../../../../styles/images/italic-icon.svg'
import underlineIcon from '../../../../styles/images/underline-icon.svg'

export const HoveringToolbar = () => {
  const ref = useRef()
  const editor = useSlate()
  const inFocus = useFocused()

  useEffect(() => {
    const el = ref.current
    const { selection } = editor

    if (!el) return

    if (
      !selection
      || !inFocus
      || Range.isCollapsed(selection)
      || Editor.string(editor, selection) === ''
    ) {
      el.removeAttribute('style')
    }

    const domSelection = window.getSelection()

    if (domSelection.rangeCount) {
      const domRange = domSelection.getRangeAt(0)
      const rect = domRange.getBoundingClientRect()

      Object.assign(el.style, {
        opacity: '1',
        top: `${rect.top + window.scrollY - el.offsetHeight}px`,
        left: `${rect.left + window.scrollX - el.offsetWidth / 2 + rect.width / 2}px`
      })
    }
  })

  return (
    <Portal>
      <Menu
        ref={ref}
        className={classes.htMenu}
        onMouseDown={(e) => e.preventDefault()}
      >
        <FormatButton
          format="bold"
          icon={<img src={boldIcon} alt="Жирным" />}
        />
        <FormatButton
          format="italic"
          icon={<img src={italicIcon} alt="Курсивом" />}
        />
        <FormatButton
          format="underlined"
          icon={<img src={underlineIcon}
            alt="Курсивом" />}
        />
      </Menu>
      <div className={classes.hoveringToolbar}>
        {null}
      </div>
    </Portal>
  )
}
