import { TitleSeparator } from './TitleSeparator'
import classes from './TopmostMenu.module.css'

export const TopmostMenu = () => (
  <div className={classes.topmostMenu}>
    <div className={classes.left}>
      <button
        className={classes.backButton}
        onClick={() => {
          window.history.back()
        }}
      />
    </div>
    <div className={classes.right}>
      <button className={classes.shareButton} />
      <button className={classes.threeDotsButton} />
    </div>
  </div>
)

TopmostMenu.TitleSeparator = TitleSeparator
