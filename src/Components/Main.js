import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './CommonComponents/Footer';
import Header from './CommonComponents/Header';

import './../styles/style.css';

const Main = () => {
  return (
    <div class="main-wrapper">
      <div class="header-title">Moove</div>
      <Header />
      <div class="content-wrapper">
        <div class="grad-rect rect1">
          <div class="rect1-title">Объясняем, что тут у нас происходит</div>
          <div class="rect1-question" />
        </div>
        <div class="section section1">
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
        <div class="grad-rect rect2">
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
        <div class="section section2">
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
      <Footer />
    </div>
  )
}

export default Main