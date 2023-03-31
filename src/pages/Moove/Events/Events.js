import { Event } from './Event'

import classes from './Events.module.css'

export const Events = () => (
  <div className={classes.eventsWrapper}>
    <div className={classes.events}>
      <Event
        title="Мероприятие MOOVE"
        date={new Date()}
        type="Вебинар"
        description="Чтобы стать предпринимателем, недостаточно одного желания, нужно иметь технические скиллы."
      />
      <Event
        title="Мероприятие MOOVE"
        date={new Date()}
        type="Вебинар"
        description="Чтобы стать предпринимателем, недостаточно одного желания, нужно иметь технические скиллы."
      />
    </div>
  </div>
)
