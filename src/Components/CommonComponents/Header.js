import React from 'react'
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Marquee
      classNam="marquee"
      gradient={false} 
      // data-duplicated='true'
      direction='left'
    >
      By&nbsp;Skolkovo&nbsp;&nbsp;By&nbsp;Skolkovo&nbsp;&nbsp;By&nbsp;Skolkovo&nbsp;&nbsp;By&nbsp;Skolkovo&nbsp;
  </Marquee>
  )
}

export default Header