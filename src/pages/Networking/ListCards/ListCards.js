import { Card } from './Card'
import classes from './ListCards.module.css'

export const ListCards = ({ data }) => (
  <div className={classes.listCards}>
    {data.map(card => (
      <div key={card.id} className={classes.cardWrapper}>
        <Card card={card} />
      </div>
    ))}
  </div>
)
