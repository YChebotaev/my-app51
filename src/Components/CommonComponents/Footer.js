import React from 'react'
import './../../styles/style.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div class="bottom-button">
      <div className='bottom-button-wrapper'>
        <button
          class="bottom-button-item bottom-btn_return"
          onClick={() => {
            window.history.back()
          }}>
        </button>
        <Link to="/createArticle"><button class="bottom-button-item bottom-btn_create-post"></button></Link>
        <button class="bottom-button-item bottom-btn_profile"></button>
      </div>
    </div>
  )
}

export default Footer