import classes from "./MyAccount.module.css"

export const MyAccount = () => {
  return (
    <div className={classes.myAccount}>
      <div className={classes.myAccountLeft}>
        <div className={classes.me}>
          <div className={classes.meLeft}>
            <div className={classes.meAvatar} />
          </div>
          <div className={classes.meRight}>
            <div className={classes.meName}>Имя фамилия</div>
            <div className={classes.meUsername}>@username</div>
          </div>
        </div>
      </div>
      <div className={classes.myAccountRight}>
        <div className={classes.myAccountRightArrow} />
      </div>
    </div>
  )
}
