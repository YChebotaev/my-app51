import { useState } from 'react'
import { Posts } from './Posts'
import { Fresh } from './Fresh'

export const Articles = () => {
  const [active, setActive] = useState("popular_posts")

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
        {active === 'popular_posts' && <div className="chats-border" />}
        {active === 'popular_posts' && <Fresh />}
      </div>
    </div>
  )
}
