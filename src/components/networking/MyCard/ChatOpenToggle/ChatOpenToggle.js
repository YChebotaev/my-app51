import Toggle from 'react-toggle'
import { useController } from 'react-hook-form'

export const ChatOpenToggle = ({ control }) => {
  const { field } = useController({ control, name: 'chat_available' })

  return (
    <Toggle
      icons={false}
      checked={field.value === 'available'}
      onChange={(e) => {
        const { checked } = e.target

        field.onChange(checked ? 'available' : 'not_available')
      }}
    />
  )
}
