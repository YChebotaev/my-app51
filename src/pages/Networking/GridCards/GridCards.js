import { Card } from './Card'
import classes from './GridCards.module.css'

export const GridCards = ({ data, onAddFilter }) => (
  <div className={classes.gridCards}>
    {data.map(card => (
      <Card key={card.id} card={card} onAddFilter={onAddFilter} />
    ))}
  </div>
)
