import { useNavigate } from 'react-router-dom'
import { TitleSeparator } from './TitleSeparator'
import classes from './TopmostMenu.module.css'

export const TopmostMenu = () => {
  const navigate = useNavigate()

  return (
    <div className={classes.topmostMenu}>
      <div className={classes.left}>
        <button
          className={classes.backButton}
          onClick={() => {
            navigate('/')
          }}
        />
      </div>
      <div className={classes.right}>
        <button className={classes.shareButton} />
        <button className={classes.threeDotsButton} />
      </div>
    </div>
  )
}

TopmostMenu.TitleSeparator = TitleSeparator
