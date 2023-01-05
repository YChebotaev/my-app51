import React from 'react'
import './../../styles/style.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div class="bottom-button">
    <button class="bottom-button-item bottom-btn_return"></button>
    <Link to="/createArticle"><button class="bottom-button-item bottom-btn_create-post"></button></Link>
    <button class="bottom-button-item bottom-btn_profile"></button>
  </div>
  )
}

export default Footer