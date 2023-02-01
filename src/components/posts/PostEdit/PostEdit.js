import TextareaAutosize from 'react-textarea-autosize'
import { useForm } from 'react-hook-form'
import { ContentEdit } from '../ContentEdit'
import { UploadImage } from '../UploadImage'
import { PageTitle } from '../../common/PageTitle'
import { PostAuthor } from '../../articles/PostAuthor'
import imagePick from "../../../styles/images/imagePick.svg"
import play from "../../../styles/images/play.svg"
import share from "../../../styles/images/share.svg"
import sendButtonBackground from '../../../styles/images/send-button-background.svg'

export const PostEdit = ({
  pageTitle,
  firstName,
  surname,
  usernameLink,
  isProfileLoading,
  isLoadingAvatarUrl,
  avatarUrl,
  imgUrl,
  setImgUrl,
  notification,
  defaultValues = {
    title: '',
    subtitle: '',
    content: ''
  },
  onSubmit
}) => {
  const { control, register, handleSubmit, watch } = useForm({ defaultValues })
  const canSubmit = watch('title') !== '' && watch('subtitle') !== '' && watch('content') !== ''

  return (
    <div className="main-wrapper" style={{ minHeight: 'calc(100vh + 60px)' }}>
      <form className="content-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <PageTitle legacy>{pageTitle}</PageTitle>
        <div style={{ margin: "23px 0 24px 0" }}>
          <PostAuthor
            firstName={firstName}
            surname={surname}
            usernameLink={usernameLink}
            isProfileLoading={isProfileLoading}
            isLoadingAvatarUrl={isLoadingAvatarUrl}
            avatarUrl={avatarUrl}
          />
        </div>
        <div style={{
          textAlign: "left",
          margin: "23px 0px 24px 23px",
          display: 'flex',
          flexDirection: "column"
        }}>
          <TextareaAutosize
            {...register('title')}
            placeholder="Текст заголовка..."
            className='inputText'
            style={{
              backgroundColor: "transparent",
              border: 0,
              color: "white",
              wordBreak: "break-word",
              resize: "none",
              fontFamily: 'Gilroy',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '16px',
              lineHeight: '19px',
              padding: '5px 0'
            }}
          />
        </div>
        <div style={{ padding: '0px 0px 0px 23px' }}>
          <UploadImage
            imgUrl={imgUrl}
            onChange={(imgUrl) => setImgUrl(imgUrl)}
          />
        </div>
        <div style={{
          textAlign: "left",
          margin: "23px 0px 24px 23px",
          display: 'flex',
          flexDirection: "column"
        }}>
          <TextareaAutosize
            {...register('subtitle')}
            className='inputText'
            placeholder="Текст подзаголовка..."
            style={{
              backgroundColor: "transparent",
              border: 0,
              color: "white",
              wordBreak: "break-word",
              resize: "none",
              fontFamily: 'Gilroy',
              fontStyle: 'normal',
              fontHeight: '500',
              fontSize: '14px',
              lineHeight: '18px',
              padding: '5px 0'
            }}
          />
        </div>
        <div style={{
          textAlign: "left",
          margin: "23px 0px 24px 23px",
          display: 'flex',
          flexDirection: "column"
        }}>
          <ContentEdit control={control} />
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: 'fixed',
          bottom: '20px',
          width: '93%'
        }}>
          <div style={{ display: "flex" }}>
            <div style={{
              borderRadius: "50%",
              backgroundColor: "#616161",
              width: 28,
              height: 28,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <img src={imagePick} alt="" />
            </div>
            <div style={{
              borderRadius: "50%",
              backgroundColor: "#616161",
              width: 28,
              height: 28,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 16px 0 16px"
            }}>
              <img src={play} alt="" />
            </div>
            <div style={{
              borderRadius: "50%",
              backgroundColor: "#616161",
              width: 28,
              height: 28,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <img src={share} alt="" />
            </div>
          </div>
          <button
            type='submit'
            className={canSubmit ? "rect6" : ''}
            disabled={!canSubmit}
            style={{
              ...(canSubmit ? {
                background: `url(${sendButtonBackground})`,
                color: '#FFFFFF',
              } : {
                background: "#616161",
                color: "#D9D9D9"
              }),
              borderRadius: 10,
              height: 42,
              border: "none",
              fontSize: 16,
              width: "35%",
              fontWeight: 600
            }}
          >Отправить</button>
        </div>
      </form>
      {notification}
    </div>
  )
}
