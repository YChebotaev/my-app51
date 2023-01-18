import { useController } from 'react-hook-form'
import { AddButton } from '../../../../components/networking/TagAddButton'
import classes from './Tags.module.css'

export const Tags = ({ control }) => {
  const { field: firstTagField } = useController({ control, name: 'first_tag' })
  const { field: secondTagField } = useController({ control, name: 'second_tag' })
  const { field: thirdTagField } = useController({ control, name: 'third_tag' })
  const isNoTags = !firstTagField.value && !secondTagField.value && !thirdTagField.value
  const isTagsNotFull = !firstTagField.value || !secondTagField.value || !thirdTagField.value

  return (
    <div className={classes.tags}>
      {isNoTags && (
        <div className={classes.tagsNoTagText}>Специальность</div>
      )}
      {firstTagField.value && (
        <button
          key="first_tag"
          className={classes.tagsTag}
          onClick={() => {
            firstTagField.onChange(null)
          }}
        >
          <div className={classes.tagLeft}>{firstTagField.value}</div>
          <div className={classes.tagRight}></div>
        </button>
      )}
      {secondTagField.value && (
        <button
          key="second_tag"
          className={classes.tagsTag}
          onClick={() => {
            secondTagField.onChange(null)
          }}
        >
          <div className={classes.tagLeft}>{secondTagField.value}</div>
          <div className={classes.tagRight}></div>
        </button>
      )}
      {thirdTagField.value && (
        <button
          key="second_tag"
          className={classes.tagsTag}
          onClick={() => {
            thirdTagField.onChange(null)
          }}
        >
          <div className={classes.tagLeft}>{thirdTagField.value}</div>
          <div className={classes.tagRight}></div>
        </button>
      )}
      {isTagsNotFull && (
        <AddButton onAdd={(name) => {
          switch (true) {
            case !firstTagField.value:
              firstTagField.onChange(name)
              break
            case !secondTagField.value:
              secondTagField.onChange(name)
              break
            case !thirdTagField.value:
              thirdTagField.onChange(name)
              break
            default: break
          }
        }} />
      )}
    </div>
  )
}
