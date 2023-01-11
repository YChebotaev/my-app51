import React from "react";
import Backdrop from './Backdrop'
import NextButton from './NextButton'
import classes from './FirstPage.module.css'
import CloseButton from "./CloseButton";

const FirstPage = () => {
  return (
    <>
      <CloseButton />
      <Backdrop>
        <div className={classes.pageWrapper}>
          <div className={classes.firstHeader}>Привет!</div>
          <div className={classes.secondHeader}>Рады, что ты с нами</div>
          <div className={classes.heart} />
          <div className={classes.thirdHeader}>Давай объясню, что тут<br />можно делать</div>
          <div className={classes.buttonWrapper}>
            <NextButton>Поехали</NextButton>
          </div>
        </div>
      </Backdrop>
    </>
  )
}

export default FirstPage
