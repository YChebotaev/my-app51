import React, { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from './Skeleton'
import classes from './WhatToRead.module.css'

export const WhatToRead = forwardRef(
  ({ withTitle = true }, ref) => {
    const { data, isLoading } = useQuery(['posts', 'three_last_posts'])

    return (
      <div ref={ref} className={cn('section', 'section1', !withTitle && classes.noMarginSection)}>
        {withTitle && <Link to="/article"><div className="section-title">Есть что почитать</div></Link>}
        {isLoading ? (
          <Skeleton />
        ) : (
          <div className="section-cols">
            {data.map(({ id, title, likes_amount, author_username }) => (
              <Link to={`/article/${id}`} key={id} className={cn("col-3", classes.post)}>
                <div className="post-author">{author_username}</div>
                <div className="post-title">{title}</div>
                <div className="post-likes">
                  <span className="post-likes-num">{likes_amount}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }
)
