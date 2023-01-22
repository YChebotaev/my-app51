import classes from './CardTags.module.css'

export const CardTags = ({ firstTag, secondTag, thirdTag }) => (
  <div className={classes.cardTags}>
    {firstTag && <div className={classes.cardTag}>{firstTag}</div>}
    {secondTag && <div className={classes.cardTag}>{secondTag}</div>}
    {thirdTag && <div className={classes.cardTag}>{thirdTag}</div>}
  </div>
)
