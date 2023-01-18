import classes from './SaveButton.module.css'

export const SaveButton = ({ children }) => (
  <button type="submit" className={classes.saveButton}>
    {children ?? 'Сохранить'}
  </button>
)
