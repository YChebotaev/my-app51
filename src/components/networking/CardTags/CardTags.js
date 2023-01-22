import classes from './CardTags.module.css'

export const CardTags = ({ firstTag, secondTag, thirdTag, onClick }) => (
  <div className={classes.cardTags}>
    {firstTag && (
      <div
        className={classes.cardTag}
        onClick={onClick ? () => onClick(firstTag) : null}
      >{firstTag}</div>
    )}
    {secondTag && (
      <div
        className={classes.cardTag}
        onClick={onClick ? () => onClick(secondTag) : null}
      >{secondTag}</div>
    )}
    {thirdTag && (
      <div
        className={classes.cardTag}
        onClick={onClick ? () => onClick(thirdTag) : null}
      >{thirdTag}</div>
    )}
  </div>
)
