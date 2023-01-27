import { useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useApiClient, useLoadImage } from '../../../../hooks'
import { getBackendUrl } from '../../../../utils'
import { Skeleton, KIND_FETCHING, KIND_UPDATING } from '../../../../components/common/Skeleton'
import classes from './ProfileImage.module.css'

export const ProfileImage = ({ src }) => {
  console.group('ProfileImage')
  console.log('src =', src)

  const fileRef = useRef()
  const apiClient = useApiClient()
  const [imageSrc, setImageSrc] = useState(src)
  const { data: imageUrl, isLoading: isImageLoading } = useLoadImage(
    ['card_profile_img', imageSrc],
    imageSrc ? getBackendUrl() + imageSrc : undefined,
    src ? undefined : '/images/avatar-placeholder.png'
  )
  const { mutate, isLoading: isImageUpdating } = useMutation(['cards', 'upload_image'], async () => {
    const file = fileRef.current.files[0]
    const formData = new FormData()
    formData.append('image', file)

    const { data } = await apiClient.post('/cards/upload_image', formData)

    return data
  }, {
    onSuccess({ img_path }) {
      setImageSrc(img_path)
    }
  })

  console.log('imageSrc =', imageSrc)
  console.log('isImageLoading =', isImageLoading)

  if (imageSrc && isImageLoading) {
    console.groupEnd('ProfileImage')

    return <Skeleton kind={KIND_FETCHING} className={classes.piSkeleton} />
  }

  console.log('isImageUpdating =', isImageUpdating)

  if (isImageUpdating) {
    console.groupEnd('ProfileImage')

    return <Skeleton kind={KIND_UPDATING} className={classes.piSkeleton} />
  }

  console.groupEnd('ProfileImage')

  return (
    <div className={classes.piWrapper}>
      <div
        className={classes.profileImage}
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : null}
      />
      <button
        className={classes.piUploadButton}
        onClick={(e) => {
          e.preventDefault()

          fileRef.current.click()
        }}
      >Редактировать фото</button>
      <input
        ref={fileRef}
        type="file"
        className={classes.piFileInput}
        onChange={() => mutate()}
      />
    </div>
  )
}
