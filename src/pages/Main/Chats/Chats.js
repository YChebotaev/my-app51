import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/style.css';
import { CHATS_LIST } from '../../Chats'

export const Chats = forwardRef(
  (_, ref) => (
    <div ref={ref} className="section section2">
      <Link to="/chat"><div className="section-title">Чаты</div></Link>
      <div className="chats-list">
        {CHATS_LIST.map(({ id, name, video, href }) => (
          <a key={id} className="chat-item" href={href} style={{ textDecoration: 'none' }}>
            <div className="chat-icon" style={{
              backgroundImage: `url("${video}")`,
              backgroundPosition: 'center',
              backgroundSize: '350%',
              backgroundColor: 'transparent'
            }} />
            <div className="chat-title">{name}</div>
          </a>
        ))}
      </div>
      {/* <div className="chats-list">
        <div className="chat-item">
          <div className="chat-icon" />
          <div className="chat-title">Название чата</div>
          <div className="chat-num-members">11K участников</div>
        </div>
        <div className="chat-item">
        <div className="chat-icon" />
          <div className="chat-title">Название чата другое</div>
          <div className="chat-num-members">11K участников</div>
        </div>
        <div className="chat-item">
          <div className="chat-icon" />
          <div className="chat-title">Длииинное название чата</div>
          <div className="chat-num-members">11K участников</div>
        </div>
        <div className="chat-item">
          <div className="chat-icon" />
          <div className="chat-title">Длииинное название чата</div>
          <div className="chat-num-members">11K участников</div>
        </div>
        <div className="chat-item">
          <div className="chat-icon" />
          <div className="chat-title">Длииинное название чата</div>
          <div className="chat-num-members">11K участников</div>
        </div>
      </div> */}
    </div>
  )
)
