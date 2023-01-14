import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Onboarding, { useOnboarding } from '../components/common/Onboarding';
import { WhatToRead } from '../components/common/WhatToRead'
import '../styles/style.css';

const Main = ({ isFirstTime }) => {
  const {
    isOpen,
    page,
    spotlightedRef,
    totalPages,
    mainWrapperRef,
    onOpen,
    onNextPage,
    onClose
  } = useOnboarding({
    initialPage: 0,
    totalPages: 5,
    initialOpen: isFirstTime
  })
  const whatToReadRef = (isOpen && page === 1) ? spotlightedRef : null
  const gamesRef = (isOpen && page === 2) ? spotlightedRef : null
  const chatsRef = (isOpen && page === 3) ? spotlightedRef : null
  const articleButtonRef = (isOpen && page === 4) ? spotlightedRef : null
  const isShowFooter = isOpen ? page === 4 : true
  const isShowOnboarding = isOpen

  return (
    <>
      <div ref={mainWrapperRef} className="main-wrapper">
        <div className="header-title">Moove</div>
        <Header />
        <div className="content-wrapper">
          <div className="grad-rect rect1" onClick={() => onOpen()}>
            <div className="rect1-question" />
            <div className="rect1-title">Объясняем, что тут у нас происходит</div>
          </div>
          <WhatToRead ref={whatToReadRef} />
          <div ref={gamesRef} className="grad-rect rect2">
            <div className="rect2-title">Игры</div>
            <div className="rect-cols">
              <div className="col-3">
                <div className="item-game"></div>
              </div>
              <div className="col-3">
                <div className="item-game"></div>
              </div>
              <div className="col-3">
                <div className="item-game"></div>
              </div>
            </div>
          </div>
          <div ref={chatsRef} className="section section2">
            <Link to="/chat"><div className="section-title">Чаты</div></Link>
            <div className="chats-list">
              <div className="chat-item">
                <div className="chat-title chat-title-1">Название чата</div>
                <div className="chat-num-members chat-num-members-1">11K участников</div>
              </div>
              <div className="chat-item">
                <div className="chat-title chat-title-1">Название чата другое</div>
                <div className="chat-num-members chat-num-members-1">11K участников</div>
              </div>
              <div className="chat-item">
                <div className="chat-title chat-title-2">Длииинное название чата</div>
                <div className="chat-num-members chat-num-members-2">11K участников</div>
              </div>
              <div className="chat-item">
                <div className="chat-title chat-title-3">Длииинное название чата</div>
                <div className="chat-num-members chat-num-members-3">11K участников</div>
              </div>
            </div>
          </div>
        </div>
        {isShowFooter && <Footer articleButtonRef={articleButtonRef} />}
      </div>
      {isShowOnboarding && (
        <Onboarding
          page={page}
          totalPages={totalPages}
          spotlightedRef={spotlightedRef}
          mainWrapperRef={mainWrapperRef}
          onNextPage={onNextPage}
          onClose={onClose}
        />
      )}
    </>
  )
}

export default Main
