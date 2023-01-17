import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

export const Networking = forwardRef(
  (_, ref) => (
    <div ref={ref} className="grad-rect rect2">
      <Link to="/networking" className="rect2-title">Нетворкинг</Link>
      <div className="rect-cols">
        <div className="col-3">
          <div className="item-game"></div>
        </div>
        <div className="col-3">
          <div className="item-game"></div>
        </div>
        <div className="col-3">
          <div className="item-game"></div>
        </div>
      </div>
    </div>
  )
)
