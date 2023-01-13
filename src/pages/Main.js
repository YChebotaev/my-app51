import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Onboarding, { useOnboarding } from '../components/common/Onboarding';
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
      <div ref={mainWrapperRef} class="main-wrapper">
        <div class="header-title">Moove</div>
        <Header />
        <div class="content-wrapper">
          <div class="grad-rect rect1" onClick={() => onOpen()}>
            <div class="rect1-question" />
            <div class="rect1-title">Объясняем, что тут у нас происходит</div>
          </div>
          <div ref={whatToReadRef} class="section section1">
            <Link to="/article"><div class="section-title">Есть что почитать</div></Link>
            <div class="section-cols">
              <div class="col-3">
                <div class="post-author">@anovikov</div>
                <div class="post-title">Как зумеры изменили всё за год</div>
                <div class="post-likes">
                  <div class="post-likes-num">24</div>
                </div>
              </div>
              <div class="col-3">
                <div class="post-author">@anovikov</div>
                <div class="post-title">Кто такой зумер и с чем его едят</div>
                <div class="post-likes">
                  <div class="post-likes-num">1.2K</div>
                </div>
              </div>
              <div class="col-3">
                <div class="post-author">@anovikov</div>
                <div class="post-title">Как зумеры изменили всё за год</div>
                <div class="post-likes">
                  <div class="post-likes-num">24</div>
                </div>
              </div>
            </div>
          </div>
          <div ref={gamesRef} class="grad-rect rect2">
            <div class="rect2-title">Игры</div>
            <div class="rect-cols">
              <div class="col-3">
                <div class="item-game"></div>
              </div>
              <div class="col-3">
                <div class="item-game"></div>
              </div>
              <div class="col-3">
                <div class="item-game"></div>
              </div>
            </div>
          </div>
          <div ref={chatsRef} class="section section2">
            <Link to="/chat"><div class="section-title">Чаты</div></Link>
            <div class="chats-list">
              <div class="chat-item">
                <div class="chat-title chat-title-1">Название чата</div>
                <div class="chat-num-members chat-num-members-1">11K участников</div>
              </div>
              <div class="chat-item">
                <div class="chat-title chat-title-1">Название чата другое</div>
                <div class="chat-num-members chat-num-members-1">11K участников</div>
              </div>
              <div class="chat-item">
                <div class="chat-title chat-title-2">Длииинное название чата</div>
                <div class="chat-num-members chat-num-members-2">11K участников</div>
              </div>
              <div class="chat-item">
                <div class="chat-title chat-title-3">Длииинное название чата</div>
                <div class="chat-num-members chat-num-members-3">11K участников</div>
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
