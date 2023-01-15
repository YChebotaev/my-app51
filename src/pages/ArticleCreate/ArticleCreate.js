import React, { useMemo, useState, useRef } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { ContentEditor } from './ContentEditor'
import PageTitle from '../../components/common/PageTitle'
import { Notification } from '../../components/common/Notification'
import { useProfilePictureUrl, useApiClient } from '../../hooks'
import imagePick from "./../../styles/images/imagePick.svg"
import play from "./../../styles/images/play.svg"
import share from "./../../styles/images/share.svg"
import sendButtonBackground from '../../styles/images/send-button-background.svg'
import dummyAvatar from '../../styles/images/dummy-avatar.svg'
import okIcon from '../../styles/images/ok-icon.svg'
import failIcon from '../../styles/images/fail-icon.svg'
import imagePlaceholder from '../../styles/images/image-placeholder.svg'
import '../../styles/style.css';

export const ArticleCreate = () => {
  const apiClient = useApiClient()
  const fileRef = useRef()
  const [submitResult, setSubmitResult] = useState(null) // null | 'success' | 'fail'
  const [submitResultText, submitResultIcon] = useMemo(() => {
    switch (submitResult) {
      case 'success': return [
        'Статья отправлена на модерацию',
        <img src={okIcon} alt="" />
      ]
      case 'fail': return [
        'Что-то пошло не так, попробуйте позже',
        <img src={failIcon} alt="" />
      ]
      default: return [null, null]
    }
  }, [submitResult])
  const { data: avatarUrl, isLoading: isLoadingAvatarUrl } = useProfilePictureUrl()
  const { mutate } = useMutation(['posts', 'create_post'], async (variables) => {
    const { data } = await apiClient.post('/posts/create_post', variables)

    return data
  }, {
    onSuccess() {
      setSubmitResult('success')
    },
    onError() {
      setSubmitResult('fail')
    }
  })
  const { control, register, handleSubmit, watch } = useForm({
    defaultValues: {
      title: '',
      subtitle: '',
      content: []
    }
  })
  const canSubmit = watch('title') !== '' && watch('subtitle') !== '' && watch('content') !== ''

  console.log('content =', watch('content'))

  return (
    <div className="main-wrapper">
      <form className="content-wrapper" onSubmit={handleSubmit(mutate)}>
        <PageTitle>Новая запись</PageTitle>
        <div style={{
          textAlign: "left",
          margin: "23px 0 24px 0",
          display: 'flex',
          gap: '10px'
        }}>
          <div>
            <img src={isLoadingAvatarUrl ? dummyAvatar : avatarUrl} width="15" alt="" style={{ borderRadius: 3 }} />
          </div>
          <span style={{
            fontSize: 15,
            fontWeight: 300,
            color: "#FFF"
          }}>Автор статьи</span>
        </div>
        <div style={{
          textAlign: "left",
          margin: "23px 0px 24px 23px",
          display: 'flex',
          flexDirection: "column"
        }}>
          <input
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
          // onChange={(e) => setTitle(e.target.value)}
          // onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D9D9D9',
            borderRadius: 10,
            minHeight: 174,
            margin: "23px 0px 24px 23px",
          }}
            onClick={() => {
              const fileInput = fileRef.current

              fileInput.click()
            }}>
            <img src={imagePlaceholder} alt="" />
          </div>
          <input ref={fileRef} type="file" style={{ opacity: 0, width: 0, height: 0 }} />
        </div>
        <div style={{
          textAlign: "left",
          margin: "23px 0px 24px 23px",
          display: 'flex',
          flexDirection: "column"
        }}>
          <input
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
          // onChange={(e) => setSubtitle(e.target.value)}
          // onKeyDown={handleKeyDown}
          />
        </div>
        <div style={{
          textAlign: "left",
          margin: "23px 0px 24px 23px",
          display: 'flex',
          flexDirection: "column"
        }}>
          <ContentEditor name="content" control={control} />
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
          {submitResult == null && (
            <button
              type='submit'
              className={canSubmit ? "rect6" : ''}
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
          )}
        </div>
      </form>
      {submitResult != null && (
        <Notification icon={submitResultIcon} text={submitResultText} />
      )}
    </div>
  )
}
