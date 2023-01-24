import React from 'react'
import cn from 'classnames'
import Footer from '../../components/common/Footer'
import { PageTitle } from '../../components/common/PageTitle'
import classes from './Leaderboard.module.css'

const Leaderboard = () => {
  const data = [
    {
      id: '7305d3eb-04f9-441b-86b3-7c10cf371e6d',
      place: 1,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '7612ce76-3664-48a5-a550-a629cf11637b',
      place: 2,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '7abaf94b-fff2-448f-b841-790a6a6d0c29',
      place: 3,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: 'bf2d98ff-3bae-4205-9ac5-8163d0f43c18',
      place: 4,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '0b3ced74-0e66-4cf1-9783-916cd3a380ef',
      place: 5,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '60e9630a-d7d9-49b7-82f3-3af56d091831',
      place: 6,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '9cd2b1ab-0e01-4c74-9165-2945314ed111',
      place: 7,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: 'e8b754f5-3855-4bca-95f3-76ff4f258939',
      place: 8,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '3fa31112-ef31-47c1-bb07-cbcd37fd21c9',
      place: 9,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '6fd8a28e-367b-4827-81ac-31f69626ad51',
      place: 10,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '8eaf6fad-5af7-4212-b6b7-0e7e408d28ac',
      place: 11,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '63bca1db-a044-42e5-a55e-30017006d7e1',
      place: 12,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '39a1f4d3-5cb5-4ce8-8e1d-dc0f1cce18ce',
      place: 13,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '048e0d4f-0da6-486e-9d86-7d417f2340ec',
      place: 14,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
    {
      id: '325184be-c7fe-4378-9894-2d38349dc03b',
      place: 15,
      author: 'Имя Фамилия',
      username: 'username_user_003',
      viewsCount: '1.8K',
      reactionsCount: '1K'
    },
  ]

  return (
    <div className="main-wrapper">
      <PageTitle legacy>Лидерборд</PageTitle>
      <div className={classes.leaderboard}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={cn(classes.headerCell, classes.placeHeaderCell)}>Место</th>
              <th className={cn(classes.headerCell, classes.authorHeaderCell)}>Автор</th>
              <th className={cn(classes.headerCell, classes.viewsHeaderCell)}>Просмотры</th>
              <th className={cn(classes.headerCell, classes.reactionsHeaderCell)}>Реакции</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, place, author, username, viewsCount, reactionsCount }, i) => {
              const isLeadingCell = i <= 2

              return (
                <tr key={id}>
                  <td className={cn(classes.cell, isLeadingCell && classes.leadingCell, i === 0 && classes.cellBorderTop, i === 2 && classes.cellBorderBottom)}>
                    <div className={cn(classes.place, isLeadingCell && classes.leadingPlace)}>
                      {isLeadingCell && <div className={classes.placePrefix}>#</div>}
                      <div className={cn(classes.placeNumber, isLeadingCell && classes.leadingPlaceNumber)}>{place}</div>
                    </div>
                  </td>
                  <td className={cn(classes.cell, isLeadingCell && classes.leadingCell, i === 0 && classes.cellBorderTop, i === 2 && classes.cellBorderBottom)}>
                    <div className={cn(classes.authorPadding, isLeadingCell && classes.leadingAuthorPadding)}>
                      <div className={classes.author}>
                        <div className={classes.authorLeft}>
                          <div className={classes.authorUserpic}></div>
                        </div>
                        <div className={classes.authorRight}>
                          <div className={classes.authorName}>{author}</div>
                          <div className={classes.authorUsername}>{username}</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={cn(classes.cell, isLeadingCell && classes.leadingCell, i === 0 && classes.cellBorderTop, i === 2 && classes.cellBorderBottom)}>
                    <div className={classes.viewsCount}>{viewsCount}</div>
                  </td>
                  <td className={cn(classes.cell, classes.reactionsCell, isLeadingCell && classes.leadingCell, i === 0 && classes.cellBorderTop, i === 2 && classes.cellBorderBottom)}>
                    <div className={classes.reactionsCount}>{reactionsCount}</div>
                  </td>

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default Leaderboard