import React from 'react'
import cn from 'classnames'
import { useQuery } from '@tanstack/react-query'
import Footer from '../../components/common/Footer'
import { PageTitle } from '../../components/common/PageTitle'
import classes from './Leaderboard.module.css'
import { getFullName } from '../../utils'

const Leaderboard = () => {
  const { data } = useQuery(['posts', 'leader_board'])

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
            {data?.map(({ id, first_name, surname, username, views, reactions },  i) => {
              const place = i + 1
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
                          <div className={classes.authorName}>{getFullName(first_name, surname)}</div>
                          <div className={classes.authorUsername}>{username}</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={cn(classes.cell, isLeadingCell && classes.leadingCell, i === 0 && classes.cellBorderTop, i === 2 && classes.cellBorderBottom)}>
                    <div className={classes.viewsCount}>{views}</div>
                  </td>
                  <td className={cn(classes.cell, classes.reactionsCell, isLeadingCell && classes.leadingCell, i === 0 && classes.cellBorderTop, i === 2 && classes.cellBorderBottom)}>
                    <div className={classes.reactionsCount}>{reactions}</div>
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