import { format } from 'date-fns'
import classes from './Article.module.css'

export const Article = ({ article: { title, pubDate, isDraft } }) => {
  return (
    <div className={classes.article}>
      <div className={classes.articleLeft}>
        <div className={classes.articlePreview} />
      </div>
      <div className={classes.articleRight}>
        <div className={classes.articleTitle}>{title}</div>
        <div className={classes.articlePubDate}>
          {isDraft ? 'Черновик' : 'Опубликовано'} {format(pubDate, 'd.M.yyyy')}
        </div>
      </div>
    </div>
  )
}
