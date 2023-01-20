import { useRef, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Skeleton } from '../../../components/common/Skeleton'
import { useApiClient } from '../../../hooks'
import imagePlaceholder from '../../../styles/images/image-placeholder.svg'
import classes from './UploadImage.module.css'

export const UploadImage = () => {
  const fileRef = useRef()
  const apiClient = useApiClient()
  const [imgUrl, setImgUrl] = useState(null)
  const { mutate, isLoading } = useMutation(['posts', 'upload_image'], async () => {
    const formData = new FormData()
    formData.append('image', fileRef.current.files[0])
    const { data } = await apiClient.post('/posts/upload_image', formData)

    return data
  }, {
    onSuccess({ img_url }) {
      setImgUrl(img_url)
    }
  })

  return (
    <>
      {imgUrl ? (
        <img
          className={classes.uploadedImage}
          src={imgUrl}
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
            <img src={imagePlaceholder} alt="" />
          </div>
        )
      )}
      <input
        ref={fileRef}
        type="file"
        style={{ display: 'none' }}
        onChange={() => mutate()}
      />
    </>
  )
}
