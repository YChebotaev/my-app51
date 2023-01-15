import classes from './Networking.module.css'
import { PageTitle } from './PageTitle'
import { MyCardLink } from './MyCardLink'

export const Networking = () => (
  <div className={classes.networking}>
    <PageTitle right={<MyCardLink />}>
      <div className={classes.pageTitle}>Нетворкинг</div>
    </PageTitle>
  </div>
)
