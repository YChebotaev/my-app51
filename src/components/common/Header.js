import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Marquee
      className="marquee"
      gradient={false}
      data-duplicated='true'
      data-direction='left'
    >By skolkovo &emsp; By skolkovo &emsp; By skolkovo &emsp; </Marquee>
  )
}

export default Header