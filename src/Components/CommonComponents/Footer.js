import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/style.css';

const Footer = ({ articleButtonRef }) => {
  return (
    <div class="bottom-button">
      <div className='bottom-button-wrapper'>
        <button
          class="bottom-button-item bottom-btn_return"
          onClick={() => {
            window.history.back()
          }}>
        </button>
        <Link to="/createArticle">
          <button ref={articleButtonRef} class="bottom-button-item bottom-btn_create-post"></button>
        </Link>
        <button class="bottom-button-item bottom-btn_profile"></button>
      </div>
    </div>
  )
}

export default Footer