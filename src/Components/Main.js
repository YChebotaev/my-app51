import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './CommonComponents/Footer';
import Header from './CommonComponents/Header';
import Onboarding, { useOnboarding } from './CommonComponents/Onboarding';

import './../styles/style.css';

const Main = ({ isFirstTime }) => {
  const { isOpen, page, spotlightedRef, totalPages, onNextPage, onClose } = useOnboarding(0, 5, isFirstTime)
  const whatToReadRef = (isFirstTime && page === 1) ? spotlightedRef : null
  const gamesRef = (isFirstTime && page === 2) ? spotlightedRef : null
  const chatsRef = (isFirstTime && page === 3) ? spotlightedRef : null
  const articleButtonRef = (isFirstTime && page === 4) ? spotlightedRef : null
  const isShowFooter = (!isFirstTime || isOpen) ? page === 4 : true
  const isShowOnboarding = isFirstTime || isOpen

  return (
    <>
      <div class="main-wrapper">
        <div class="header-title">Moove</div>
        <Header />
        <div class="content-wrapper">
          <div class="grad-rect rect1">
            <div class="rect1-title">Объясняем, что тут у нас происходит</div>
            <div class="rect1-question" />
          </div>
          <div ref={whatToReadRef} class="section section1">
            <Link to="/article"><div class="section-title">Есть что почитать</div></Link>
            <div class="section-cols">
              <div class="col-3">
                <div class="post-author">@anovikov</div>
                <div class="post-title">Как зумеры изменили всё за год</div>
                <div class="post-likes">❤<span class="post-likes-num">24</span></div>
              </div>
              <div class="col-3">
                <div class="post-author">@anovikov</div>
                <div class="post-title">Кто такой зумер и с чем его едят</div>
                <div class="post-likes">❤<span class="post-likes-num">1.2K</span></div>
              </div>
              <div class="col-3">
                <div class="post-author">@anovikov</div>
                <div class="post-title">Как зумеры изменили всё за год</div>
                <div class="post-likes">❤<span class="post-likes-num">24</span></div>
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
          onNextPage={onNextPage}
          onClose={onClose}
        />
      )}
    </>
  )
}

export default Main
