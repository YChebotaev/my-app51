import { useState } from 'react'
import { Posts } from './Posts'
// import classes from './Articles.module.css'

export const Articles = () => {
  const [active, setActive] = useState("popular_posts")
  // const [page, setPage] = useState(1)

  return (
    <div className="chats-wrapper">
      <div className="chats">
        <div className="chat-item" style={{ padding: '14px 0px 10px 0px' }}>
          <div
            className="chat-title"
            onClick={() => setActive("popular_posts")}
            style={{
              paddingRight: 20,
              fontSize: 14,
              color: "#FFF",
              fontWeight: 600,
              opacity: active === "popular_posts" ? 1 : 0.5
            }}
          >
            ПОПУЛЯРНОЕ
          </div>
          <div
            className="chat-title"
            onClick={() => setActive("recent_posts")}
            style={{
              paddingRight: 20,
              fontSize: 14,
              color: "#FFF",
              fontWeight: 600,
              opacity: active === "recent_posts" ? 1 : 0.5
            }}
          >
            СВЕЖЕЕ
          </div>
          <div
            className="chat-title"
            onClick={() => setActive("my_feed")}
            style={{
              paddingRight: 20,
              fontSize: 14,
              color: "#FFF",
              fontWeight: 600,
              opacity: active === "my_feed" ? 1 : 0.5
            }}
          >
            МОЯ ЛЕНТА
          </div>
        </div>
        <div className="chats-border" />
        <Posts queryKey={active} />

        {/* <div className="chats-border" />
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
        })} */}
      </div>
    </div>
  )
}
