import { useState } from 'react'
import Toggle from 'react-toggle'
import { useMutation } from '@tanstack/react-query'
import { useApiClient } from '../../../../hooks'

export const ChatOpenToggle = ({ initialChatOpen }) => {
  const apiClient = useApiClient()
  const [chatOpen, setChatOpen] = useState(initialChatOpen)
  const { mutate } = useMutation(['cards', 'update_card'], async ({
    chatOpen
  }) => {
    const { data } = await apiClient.post('/cards/update_card', {
      chat_open: chatOpen
    })

    return data
  }, {
    onSuccess() {
      setChatOpen(!chatOpen)
    }
  })

  return (
    <Toggle
      icons={false}
      checked={chatOpen}
      onChange={(e) => {
        const { checked } = e.target

        mutate({ chatOpen: checked ? 'available' : 'not_available' })
      }}
    />
  )
}
