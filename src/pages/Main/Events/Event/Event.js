import { format } from 'date-fns'
import classes from './Event.module.css'
import dummyEventImage from '../../../../styles/images/dummy-event.jpg'

export const Event = ({ title, date, type, description }) => (
  <div className={classes.event}>
    <div className={classes.title}>{title}</div>
    <div className={classes.imageWrapper}>
      <img className={classes.image} src={dummyEventImage} alt="" />
    </div>
    <div className={classes.info}>
      <div className={classes.infoLeft}>
        {format(date, 'dd.MM.yyyy')}
      </div>
      <div className={classes.infoRight}>
        {type}
      </div>
    </div>
    <div className={classes.descriptionWrapper}>
      <div className={classes.description}>{description}</div>
    </div>
    <div className={classes.buttonWrapper}>
      <a className={classes.button} href="https://docs.google.com/forms/d/17XWt3yI39_G2JhAYVjL2FktvwLdEbsOyiSGeWfG4Xb0/edit#settings">Задать вопрос</a>
    </div>
  </div>
)
