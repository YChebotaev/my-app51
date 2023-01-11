import React, { useMemo, useState } from 'react'
import arrow from "./../styles/images/arrow.svg"
import { Link } from 'react-router-dom';
import imagePick from "./../styles/images/imagePick.svg"
import play from "./../styles/images/play.svg"
import share from "./../styles/images/share.svg"
import sendButtonBackground from '../styles/images/send-button-background.svg'
import dummyAvatar from '../styles/images/dummy-avatar.svg'
import okIcon from '../styles/images/ok-icon.svg'
import failIcon from '../styles/images/fail-icon.svg'
import imagePlaceholder from '../styles/images/image-placeholder.svg'

import './../styles/style.css';

const ArticleCreate = () => {
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [content, setContent] = useState("")
  const [submitResult, setSubmitResult] = useState(null) // null | 'success' | 'fail'
  const canSubmit = title !== '' && subtitle !== '' && content !== ''
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
  // const handleKeyDown = (e) => {
  //   e.target.style.height = 'inherit';
  //   e.target.style.height = `${e.target.scrollHeight}px`;
  //   // In case you have a limitation
  //   // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  // }

  const submit = async () => {
    const r = await fetch(`${process.env['REACT_APP_BACKEND_URL']}/api/v1/posts/create_post`, {
      method: "POST",
      mode: "cors",
      headers: {
        "TOKEN": window.Telegram.WebApp.initDataUnsafe.user?.id ?? process.env['REACT_APP_DEBUG_TOKEN'],
        "ngrok-skip-browser-warning": "69420",
      },
      body: JSON.stringify({
        title,
        subtitle,
        content
      }),
    });

    if (r.status === 200) {
      setSubmitResult('success')
    } else {
      setSubmitResult('fail')
    }
  };

  return (
    <div class="main-wrapper">
      <div class="content-wrapper">
        <div class="section section1">
          <div class="section-title" style={{ textAlign: "left", display: "flex", align: "center", paddingTop: 25 }}>
            <Link to="/article" >
              <img src={arrow} style={{ marginLeft: 12, marginRight: 18 }} alt="" />
            </Link>
            Новая запись
          </div>
        </div>
        <div style={{
          textAlign: "left",
          margin: "23px 0 24px 0",
          display: 'flex',
          gap: '10px'
        }}>
          <div>
            <img src={dummyAvatar} alt="" />
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
            value={title}
            placeholder="Текст заголовка..."
            name="element"
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
            onChange={(e) => setTitle(e.target.value)}
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
          }}>
            <img src={imagePlaceholder} alt="" />
          </div>
        </div>
        <div style={{
          textAlign: "left",
          margin: "23px 0px 24px 23px",
          display: 'flex',
          flexDirection: "column"
        }}>
          <input
            value={subtitle}
            name="element"
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
            onChange={(e) => setSubtitle(e.target.value)}
          // onKeyDown={handleKeyDown}
          />
        </div>
        <div style={{
          textAlign: "left",
          margin: "23px 0px 24px 23px",
          display: 'flex',
          flexDirection: "column"
        }}>
          <textarea
            value={content}
            name="element"
            className='inputText'
            placeholder="Текст записи..."
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
            onChange={(e) => setContent(e.target.value)}
          // onKeyDown={handleKeyDown}
          />
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
            onClick={() => submit()}
          >Отправить</button>
        </div>
      </div>
      {submitResult != null && (
        <div style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 22,
          position: 'fixed',
          top: 'calc(100vh - 50% - 91px)',
          left: 'calc(100vw - 50% - 123px)',
          width: 246,
          height: 182,
          background: 'rgba(255, 255, 255, 0.03)',
          boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(12.5px)',
          borderRadius: 10,
        }}>
          <div>
            {submitResultIcon}
          </div>
          <div style={{
            fontFamily: 'Gilroy',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            textAlign: 'center',
            color: '#ffffff'
          }}>{submitResultText}</div>
        </div>
      )}
    </div>
  )
}

export default ArticleCreate
