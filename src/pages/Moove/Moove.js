import { Link } from 'react-router-dom'
import { PageTitle } from '../../components/common/PageTitle'
import { About } from './About'
// import { WhatToRead } from '../../components/common/WhatToRead'
import { Articles } from './Articles'
import classes from './Moove.module.css'
import arrowIcon from '../../styles/images/arrow.svg'

export const Moove = () => (
  <div className={classes.moove}>
    <PageTitle>
      <Link to="/" className={classes.pageTitle}>
        <img src={arrowIcon} alt="" />
        MOOVE x MTS x Skolkovo
      </Link>
    </PageTitle>
    <div className={classes.aboutWrapper}>
      <About />
    </div>
    {/* <div className={classes.whatToReadWrapper}>
      <WhatToRead withTitle={false} />
    </div> */}
    <div className={classes.articlesWrapper}>
      <Articles />
    </div>
  </div>
)
