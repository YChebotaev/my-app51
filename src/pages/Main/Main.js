import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Networking } from './Networking'
import { Chats } from './Chats'
import { Skeleton } from './Skeleton'
import { Moove } from './Moove'
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Onboarding, { useOnboarding } from '../../components/common/Onboarding';
import { WhatToRead } from '../../components/common/WhatToRead'
import vomitingUnicornImg from '../../styles/images/vomiting-unicorn.png'
import '../../styles/style.css';
import classes from './Main.module.css'

export const Main = ({ isFirstTime }) => {
  const { isLoading: isPostsLoading } = useQuery(['posts', 'three_last_posts'])
  const { isLoading: isCardsLoading } = useQuery(['cards', 'three_last_cards'])
  const isLoading = isPostsLoading || isCardsLoading
  const {
    isOpen,
    page,
    spotlightedRef,
    totalPages,
    mainWrapperRef,
    onOpen,
    onNextPage,
    onClose
  } = useOnboarding({
    initialPage: 0,
    totalPages: 5,
    initialOpen: isFirstTime
  })
  const whatToReadRef = (isOpen && page === 1) ? spotlightedRef : null
  const gamesRef = (isOpen && page === 2) ? spotlightedRef : null
  const chatsRef = (isOpen && page === 3) ? spotlightedRef : null
  const articleButtonRef = (isOpen && page === 4) ? spotlightedRef : null
  const isShowFooter = isOpen ? page === 4 : true
  const isShowOnboarding = isOpen

  if (isLoading) return <Skeleton />

  return (
    <>
      <div ref={mainWrapperRef} className={classes.mainWrapper}>
        <div className="header-title">Moove</div>
        <Header />
        <div className="content-wrapper">
          <div className="grad-rect rect1" onClick={() => onOpen()}>
            <div className="rect1-question" />
            <div className="rect1-title">Объясняем, что тут у нас происходит</div>
          </div>
          <WhatToRead ref={whatToReadRef} />
          <div className={classes.mooveWrapper}>
            <Moove />
          </div>
          <div className={classes.networkingWrapper}>
            <Networking ref={gamesRef} />
          </div>
          <Chats ref={chatsRef} />
        </div>
        {isShowFooter && <Footer articleButtonRef={articleButtonRef} />}
      </div>
      {isShowOnboarding && (
        <Onboarding
          page={page}
          totalPages={totalPages}
          spotlightedRef={spotlightedRef}
          mainWrapperRef={mainWrapperRef}
          onNextPage={onNextPage}
          onClose={onClose}
        />
      )}
      <img src={vomitingUnicornImg} alt="" className={classes.vomitingUnicorn} />
    </>
  )
}
