import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { AddButton } from '../../../../components/networking/TagAddButton'
import { useApiClient } from '../../../../hooks'
import classes from './Tags.module.css'

export const Tags = ({
  initialFirstTag = null,
  initialSecondTag = null,
  initialThirdTag = null
}) => {
  const apiClient = useApiClient()
  const [firstTag, setFirstTag] = useState(initialFirstTag)
  const [secondTag, setSecondTag] = useState(initialSecondTag)
  const [thirdTag, setThirdTag] = useState(initialThirdTag)
  const { mutate } = useMutation(['cards', 'update_card'], async ({
    firstTag,
    secondTag,
    thirdTag
  }) => {
    const { data } = await apiClient.post('/cards/update_card', {
      first_tag: firstTag,
      second_tag: secondTag,
      third_tag: thirdTag
    })

    return data
  })

  return (
    <div className={classes.tags}>
      {firstTag && (
        <button
          key="first_tag"
          className={classes.tagsTag}
          onClick={(e) => {
            e.preventDefault()

            setFirstTag(null)

            mutate({
              firstTag: null,
              secondTag,
              thirdTag
            })
          }}
        >
          <div className={classes.tagLeft}>{firstTag}</div>
          <div className={classes.tagRight}></div>
        </button>
      )}
      {secondTag && (
        <button
          key="second_tag"
          className={classes.tagsTag}
          onClick={(e) => {
            e.preventDefault()

            setSecondTag(null)

            mutate({
              firstTag,
              secondTag: null,
              thirdTag
            })
          }}
        >
          <div className={classes.tagLeft}>{secondTag}</div>
          <div className={classes.tagRight}></div>
        </button>
      )}
      {thirdTag && (
        <button
          key="third_tag"
          className={classes.tagsTag}
          onClick={(e) => {
            e.preventDefault()

            setThirdTag(null)

            mutate({
              firstTag,
              secondTag,
              thirdTag: null
            })
          }}
        >
          <div className={classes.tagLeft}>{thirdTag}</div>
          <div className={classes.tagRight}></div>
        </button>
      )}
      {(!firstTag || !secondTag || !thirdTag) && (
        <AddButton onAdd={(name) => {
          switch (true) {
            case !firstTag:
              mutate({
                firstTag: name,
                secondTag,
                thirdTag
              })
              break
            case !secondTag:
              mutate({
                firstTag,
                secondTag: name,
                thirdTag
              })
              break
            case !thirdTag:
              mutate({
                firstTag,
                secondTag,
                thirdTag: name
              })
              break
            default: break
          }
        }} />
      )}
    </div>
  )
}
