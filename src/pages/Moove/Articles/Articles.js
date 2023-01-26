import { parseISO } from 'date-fns'
import { Article } from './Article'
import classes from './Articles.module.css'

export const Articles = ({ data }) => (
  <div className={classes.articles}>
    {data.map(({ id, title, snippet, image_url, created_at, post_url }) => (
      <Article
        key={id}
        title={title}
        authorProfession="Выпускник"
        imageSrc={image_url}
        pubDate={parseISO(created_at)}
        excerpt={snippet}
        href={post_url}
      />
    ))}
  </div>
)
