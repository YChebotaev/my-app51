import { useInfiniteQuery } from '@tanstack/react-query'
import { parseISO} from 'date-fns'
import { Skeleton } from '../../../../components/common/Skeleton'
import { useApiClient } from '../../../../hooks'
import { formatArticleDate } from '../../../../utils'
import { ScrollPlaceholder } from '../../../../components/common/ScrollPlaceholder'
import classes from './Fresh.module.css'

export const Fresh = () => {
  const apiClient = useApiClient()
  const size = 3
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['posts', 'recent_posts'],
    async queryFn({ pageParam }) {
      const { data } = await apiClient.get('/posts/recent_posts', {
        params: {
          page: pageParam ?? 1,
          size
        }
      })

      return data
    },
    getNextPageParam({ page, total }, allPages) {
      const allPostsCount = allPages.map(page => page.items).flat().length

      if (allPostsCount < total) {
        return page + 1
      }
    }
  })
  const articles = data?.pages.map(page => page.items).flat() ?? []

  return (
    <div className={classes.fresh}>
      {articles.map(({ id, author_username, created_at, title, post_image, content }) => (
        <div key={id} className={classes.article}>
          <div className={classes.articleCreated}>
            <Skeleton className={classes.articleAvatar} />
            <div className={classes.articleAuthor}>{author_username}</div>
            <div className={classes.articlePubDate}>{formatArticleDate(parseISO(created_at))}</div>
          </div>
          <div className={classes.articleTitle}>{title}</div>
          {post_image && <img src={post_image} className={classes.articleImage} alt="" />}
          <div className={classes.articleExcerpt}>{content}</div>
        </div>
      ))}
      <ScrollPlaceholder
        disabled={isFetching || !hasNextPage}
        onEnter={() => {
          if (hasNextPage) {
            fetchNextPage()
          }
        }}
      />
    </div>
  )
}
