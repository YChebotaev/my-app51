import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/common/Footer';
import { WhatToRead } from '../components/common/WhatToRead';
import Header from '../components/common/Header';
import heart from "../styles/images/heart1.png";
import commentArticle from "../styles/images/commentArticle.svg";
import heartArticle from "../styles/images/heartArticle.svg";
import '../styles/style.css';

const Article = () => {
  const [active, setActive] = useState("popular")
  const [posts, setPosts] = useState(null)
  const [isShowMore, setIsShowMore] = useState(false)

  const visiblePosts = useMemo(() => {
    let visiblePosts = posts != null ? (posts[active] ?? null) : null

    if (visiblePosts) {
      if (!isShowMore) {
        visiblePosts = visiblePosts.slice(0, 3)
      }
    }

    return visiblePosts
  }, [posts, active, isShowMore])

  useEffect(() => {
    fetch(`${process.env['REACT_APP_BACKEND_URL']}/api/v1/posts/all_types_posts`, {
      method: "GET",
      headers: {
        "TOKEN": window.Telegram.WebApp.initDataUnsafe.user?.id ?? process.env['REACT_APP_DEBUG_TOKEN'],
        "ngrok-skip-browser-warning": "69420",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [])

  const articles = [
    {
      id: '56f9a257-70fb-4a25-817f-11c2f3b36c53',
      telegraph_url: '#foo',
      title: 'Dicsord запустил платные подписки на сообщества',
      author: 'Автор статьи',
      pubdate: 'Сегодня 17:55'
    },
    {
      id: '0d4f684c-7091-449a-ae72-b5166f2007be',
      telegraph_url: '#foo',
      title: 'Dicsord запустил платные подписки на сообщества',
      author: 'Автор статьи',
      pubdate: 'Сегодня 17:55'
    }, {
      id: 'cbd1df4a-6b22-4574-910b-d18b97097a75',
      telegraph_url: '#foo',
      title: 'Dicsord запустил платные подписки на сообщества',
      author: 'Автор статьи',
      pubdate: 'Сегодня 17:55'
    }
  ]

  return (
    <div class="main-wrapper">
      <div class="header-title">Moove</div>
      <Header />
      <div class="content-wrapper">
        <div class="section section1">
          <img class="content-heart_img" src={heart} alt="" />
          <WhatToRead />
        </div>
        <Link
          to="/leaderboard"
          class="grad-rect rect5"
          style={{
            height: 42,
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: 'none'
          }}>
          <div class="rect2-title" style={{ padding: 0, textDecorationLine: "none" }}>Лидерборд</div>
        </Link>
        <div class="chats-wrapper">
          <div class="chats">
            <div class="chat-item" style={{ padding: '14px 0px 10px 0px' }}>
              <div class="chat-title" onClick={() => setActive("popular")} style={{ paddingRight: 20, fontSize: 14, color: "#FFF", fontWeight: 600, opacity: active === "popular" ? 1 : 0.5 }}>ПОПУЛЯРНОЕ</div>
              <div class="chat-title" onClick={() => setActive("recent")} style={{ paddingRight: 20, fontSize: 14, color: "#FFF", fontWeight: 600, opacity: active === "recent" ? 1 : 0.5 }}>СВЕЖЕЕ</div>
              <div class="chat-title" onClick={() => setActive("my_feed")} style={{ paddingRight: 20, fontSize: 14, color: "#FFF", fontWeight: 600, opacity: active === "my_feed" ? 1 : 0.5 }}>МОЯ ЛЕНТА</div>
            </div>
            <div class="chats-border" />
            {visiblePosts?.map((i) => {
              return (
                <a key={i.id} href={i.telegraph_url} style={{ textDecoration: "none" }}>
                  <div class="chat-item">
                    <div class="chat-data" style={{ display: "flex", marginLeft: 0, flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
                      <div class="chat-title">{i.title}</div>
                      <div class="chat-last-user" style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                        <img src={heartArticle} alt="" />
                        <span style={{ paddingLeft: 5 }}>{i.likes_amount ?? 0}</span>
                        {' '}
                        <img src={commentArticle} style={{ marginLeft: 25 }} alt="" />
                        <span style={{ paddingLeft: 5 }}>{i.views_amount ?? 0}</span>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
            <div className='show-more' onClick={() => setIsShowMore(true)}>Показать еще</div>
            <div class="chats-border" />
            {articles.map(a => {
              return (
                <a key={a.id} href={a.telegraph_url} style={{ display: 'block', textDecoration: "none" }}>
                  <div className='chat-item'>
                    <div className='chat-data'>
                      <div className='created-wrapper'>
                        <div className='created-author-avatar'></div>
                        <div className='created-author-name'>{a.author}</div>
                        <div className='created-date'>{a.pubdate}</div>
                      </div>
                      <div className='chat-title'>{a.title}</div>
                      <div className='image-wrapper'>
                        <img src="https://via.placeholder.com/600x300.jpg" width="100%" alt="" />
                      </div>
                      <div className='chat-excerpt'></div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Article