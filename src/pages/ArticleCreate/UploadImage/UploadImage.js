import { useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Skeleton } from '../../../components/common/Skeleton'
import { useApiClient, useLoadImage } from '../../../hooks'
import imagePlaceholder from '../../../styles/images/image-placeholder.svg'
import classes from './UploadImage.module.css'
import { getBackendUrl } from '../../../utils'

export const UploadImage = () => {
  const fileRef = useRef()
  const apiClient = useApiClient()
  const [imgUrl, setImgUrl] = useState()
  const { data: imageUrl } = useLoadImage(['post_image', imgUrl], imgUrl ? getBackendUrl() + imgUrl : undefined, imagePlaceholder)
  const { mutate, isLoading } = useMutation(['posts', 'upload_image'], async () => {
    const formData = new FormData()
    formData.append('image', fileRef.current.files[0])
    const { data } = await apiClient.post('/posts/upload_image', formData)

    return data
  }, {
    onSuccess({ img_path }) {
      setImgUrl(img_path)
    }
  })

  return (
    <>
      {imgUrl ? (
        <img
          className={classes.uploadedImage}
          src={getBackendUrl() + imgUrl}
          alt=""
          onClick={() => { fileRef.current.click() }}
        />
      ) : (
        isLoading ? (
          <Skeleton className={classes.imageSkeleton} />
        ) : (
          <div
            className={classes.imagePlaceholder}
            onClick={() => { fileRef.current.click() }}>
            <img src={imageUrl} alt="" />
          </div>
        )
      )}
      <input
        ref={fileRef}
        type="file"
        accept="image/png, image/jpeg"
        style={{ display: 'none' }}
        onChange={() => mutate()}
      />
    </>
  )
}
