import { format, parseISO } from 'date-fns'
import { normalizeContentHTML } from '../../../../utils'
import classes from './Article.module.css'

export const Article = ({ article: { content, created_at, status } }) => {
  const isDraft = status === 'draft'

  return (
    <div className={classes.article}>
      <div className={classes.articleLeft}>
        <div className={classes.articlePreview} />
      </div>
      <div className={classes.articleRight}>
        <div className={classes.articleTitle} dangerouslySetInnerHTML={{ __html: normalizeContentHTML(content) }} />
        <div className={classes.articlePubDate}>
          {isDraft ? 'Черновик' : 'Опубликовано'} {format(parseISO(created_at), 'd.M.yyyy')}
        </div>
      </div>
    </div>
  )
}
