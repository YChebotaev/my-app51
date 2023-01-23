import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Articles } from './Articles'
import { Skeleton } from './Skeleton'
import Footer from '../../components/common/Footer';
import { WhatToRead } from '../../components/common/WhatToRead';
import Header from '../../components/common/Header';
import heart from "../../styles/images/heart1.png";
import '../../styles/style.css';
import { useApiClient } from '../../hooks';

export const Article = () => {
  const apiClient = useApiClient()
  const { isLoading } = useQuery(['posts', 'popular_posts'], async () => {
    const { data } = apiClient.get('/posts/popular_posts', {
      params: {
        page: 1,
        size: 3
      }
    })

    return data
  })

  if (isLoading) return <Skeleton />

  return (
    <div className="main-wrapper">
      <div className="header-title">Moove</div>
      <Header />
      <div className="content-wrapper">
        <div className="section section1">
          <img className="content-heart_img" src={heart} alt="" />
          <WhatToRead />
        </div>
        <Link
          to="/leaderboard"
          className="grad-rect rect5"
          style={{
            height: 42,
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: 'none'
          }}>
          <div className="rect2-title" style={{ padding: 0, textDecorationLine: "none" }}>Лидерборд</div>
        </Link>
        <Articles />
      </div>
      <Footer />
    </div>
  )
}
