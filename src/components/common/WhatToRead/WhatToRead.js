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
            {data.map(({ created_at, content, likes_amount }) => (
              <div key={created_at} className="col-3">
                <div className="post-author">@username</div>
                <div className="post-title">{content}</div>
                <div className="post-likes">
                  <span className="post-likes-num">{likes_amount}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
)
