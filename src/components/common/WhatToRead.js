import React from 'react'
import { Link } from 'react-router-dom';

const WhatToRead = () => {
  return (
    <div class="section section1">
      <Link to="/article"><div class="section-title">Есть что почитать</div></Link>
      <div class="section-cols">
        <div class="col-3">
          <div class="post-author">@anovikov</div>
          <div class="post-title">Как зумеры изменили всё за год</div>
          <div class="post-likes">❤<span class="post-likes-num">24</span></div>
        </div>
        <div class="col-3">
          <div class="post-author">@anovikov</div>
          <div class="post-title">Кто такой зумер и с чем его едят</div>
          <div class="post-likes">❤<span class="post-likes-num">1.2K</span></div>
        </div>
        <div class="col-3">
          <div class="post-author">@anovikov</div>
          <div class="post-title">Как зумеры изменили всё за год</div>
          <div class="post-likes">❤<span class="post-likes-num">24</span></div>
        </div>
      </div>
    </div>
  )
}

export default WhatToRead
