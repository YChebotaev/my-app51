import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from './Skeleton'
import { useApiClient } from '../../../hooks'

export const WhatToRead = forwardRef(
  (_, ref) => {
    const apiClient = useApiClient()
    let { data, isLoading } = useQuery(['posts', 'three_last_posts'], async () => {
      const { data } = await apiClient.get('/posts/three_last_posts')

      return data
    })

    return (
      <div ref={ref} class="section section1">
        <Link to="/article"><div class="section-title">Есть что почитать</div></Link>
        {isLoading ? (
          <Skeleton />
        ) : (
          <div class="section-cols">
            {data.map(({ created_at, content, likes_amount }) => (
              <div key={created_at} class="col-3">
                <div class="post-author">@username</div>
                <div class="post-title">{content}</div>
                <div class="post-likes">
                  <span class="post-likes-num">{likes_amount}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)
