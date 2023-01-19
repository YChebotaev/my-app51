import { forwardRef } from 'react'

export const Menu = forwardRef(
  (props, ref) => (
    <div {...props} ref={ref} />
  )
)
