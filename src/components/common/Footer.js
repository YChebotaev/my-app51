import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/style.css';

const Footer = ({ backButton = true, articleButtonRef, withoutPlaceholder }) => {
  const bottomButtonElement = (
    <div className="bottom-button">
      <div className='bottom-button-wrapper'>
        {backButton ? (
          <button
            className="bottom-button-item bottom-btn_return"
            onClick={() => {
              window.history.back()
            }}>
          </button>
        ) : (
          <div className="bottom-button-item bottom-btn_fake" />
        )}
        <Link to="/createArticle">
          <button ref={articleButtonRef} className="bottom-button-item bottom-btn_create-post"></button>
        </Link>
        <Link to="/account">
          <button className="bottom-button-item bottom-btn_profile"></button>
        </Link>
      </div>
    </div>
  )

  if (withoutPlaceholder) {
    return bottomButtonElement
  } else {
    return (
      <>
        {!withoutPlaceholder && <div className="bottom-button-placeholder" />}
        {bottomButtonElement}
      </>
    )
  }
}

export default Footer
