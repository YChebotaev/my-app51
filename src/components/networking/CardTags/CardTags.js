import classes from './CardTags.module.css'

export const CardTags = ({ firstTag, secondTag, thirdTag, onClick }) => (
  <div className={classes.cardTags}>
    {firstTag && (
      <div
        className={classes.cardTag}
        onClick={() => onClick(firstTag)}
      >{firstTag}</div>
    )}
    {secondTag && (
      <div
        className={classes.cardTag}
        onClick={() => onClick(secondTag)}
      >{secondTag}</div>
    )}
    {thirdTag && (
      <div
        className={classes.cardTag}
        onClick={() => onClick(thirdTag)}
      >{thirdTag}</div>
    )}
  </div>
)
