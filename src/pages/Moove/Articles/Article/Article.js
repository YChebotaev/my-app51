import classes from './Article.module.css'

export const Article = ({
  title,
  authorProfession,
  imageSrc,
  pubDate,
  excerpt,
  href,
}) => (
  <div className={classes.article}>
    <div className={classes.heading}>
      <div className={classes.author}>
        <div className={classes.authorAvatar} />
        <div className={classes.authorProfession}>
          {authorProfession}
        </div>
      </div>
      <div className={classes.pubDate}>{pubDate}</div>
    </div>
    <div className={classes.title}>{title}</div>
    <div className={classes.imageWrapper}>
      <img className={classes.image} src={imageSrc} alt="" />
    </div>
    <div className={classes.excerpt}>{excerpt}</div>
    <a className={classes.continueButton} href={href}>Читать на VC.RU</a>
  </div>
)
