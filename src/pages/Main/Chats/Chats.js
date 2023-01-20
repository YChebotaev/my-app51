import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
// import classes from './Chats.module.css'
import '../../../styles/style.css';

export const Chats = forwardRef(
  (_, ref) => (
    <div ref={ref} className="section section2">
      <Link to="/chat"><div className="section-title">Чаты</div></Link>
      <div className="chats-list">
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
      </div>
    </div>
  )
)
