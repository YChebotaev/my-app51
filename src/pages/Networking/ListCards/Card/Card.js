import classes from './Card.module.css'

export const Card = ({ card: { id } }) => (
  <div className={classes.cardWrapper}>
    <div className={classes.card}>
      <div className={classes.cardLeft}>
        <div className={classes.cardAvatar} />
      </div>
      <div className={classes.cardRight}>
        <div className={classes.cardDetails}>
          <div className={classes.cardName}>
            <div className={classes.cnName}>Вася Пупкин 🧑🏻‍🏫</div>
            <div className={classes.cnProfession}>Преподаватель</div>
          </div>
          <div className={classes.cardBio}>Преподаватель чего-то там там-то</div>
          <div className={classes.cardTags}>
            <div className={classes.cardTag}>Финтех</div>
            <div className={classes.cardTag}>Дизайн</div>
          </div>
          <div className={classes.cardActions}>
            <button className={classes.cardAction}>Написать письмо</button>
            <button className={classes.cardAction}>Начать чат</button>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.cardPlace}>#1</div>
  </div>
)