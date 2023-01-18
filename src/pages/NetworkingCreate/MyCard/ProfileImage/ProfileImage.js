import { useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useApiClient, useLoadImage } from '../../../../hooks'
import { Skeleton, KIND_FETCHING, KIND_UPDATING } from '../../../../components/common/Skeleton'
import classes from './ProfileImage.module.css'

export const ProfileImage = () => {
  const fileRef = useRef()
  const apiClient = useApiClient()
  const [imageSrc, setImageSrc] = useState()
  const { data: imageUrl, isLoading: isImageLoading } = useLoadImage(
    ['card_profile_img', imageSrc],
    imageSrc,
    '/images/avatar-placeholder.png'
  )
  const { mutate, isLoading: isImageUpdating } = useMutation(['cards', 'upload_image'], async () => {
    const file = fileRef.current.files[0]
    const formData = new FormData()
    formData.append('image', file)

    const { data } = await apiClient.post('/cards/upload_image', formData)

    return data
  }, {
    onSuccess({ img_url }) {
      setImageSrc(img_url)
    }
  })

  if (isImageLoading || isImageUpdating) {
    return <Skeleton kind={isImageUpdating ? KIND_UPDATING : (isImageLoading ? KIND_FETCHING : null)} className={classes.piSkeleton} />
  }

  return (
    <div className={classes.piWrapper}>
      <div
        className={classes.profileImage}
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : null}
      />
      <button
        className={classes.piUploadButton}
        onClick={() => {
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
