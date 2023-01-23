import { Article } from './Article'
import classes from './Articles.module.css'

export const Articles = () => (
  <div className={classes.articles}>
    <Article
      title="Криптомир, женщины в IT-индустрии и работа со звездами: Ольга Кад о ценности простых стартапов. Часть 2"
      authorProfession="Выпускник"
      imageSrc="https://via.placeholder.com/376x174"
      pubDate="6.22.2022"
      excerpt="Чтобы стать предпринимателем, недостаточно одного желания, нужно иметь технические скилы."
      href="http://vc.ru"
    />
  </div>
)
