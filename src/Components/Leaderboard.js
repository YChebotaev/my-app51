import React from 'react'
import Footer from './CommonComponents/Footer'
import leaderboardImage from '../styles/images/leaderboard.svg'

const Leaderboard = () => {
	return (
		<div class="main-wrapper" style={{
      backgroundImage: `url(${leaderboardImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <Footer withoutPlaceholder />
    </div>
	)
}

export default Leaderboard