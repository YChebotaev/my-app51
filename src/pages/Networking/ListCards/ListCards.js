import { Card } from './Card'
import classes from './ListCards.module.css'

export const ListCards = ({ data, onAddFilter }) => (
  <div className={classes.listCards}>
    {data.map(card => (
      <div key={card.id} className={classes.cardWrapper}>
        <Card card={card} onAddFilter={onAddFilter} />
      </div>
    ))}
  </div>
)
