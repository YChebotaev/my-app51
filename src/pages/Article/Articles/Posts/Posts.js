import { useInfiniteQuery } from '@tanstack/react-query'
import { Skeleton } from './Skeleton'
import { useApiClient } from '../../../../hooks'
import commentArticle from "../../../../styles/images/commentArticle.svg";
import heartArticle from "../../../../styles/images/heartArticle.svg";

export const Posts = ({ queryKey }) => {
  const apiClient = useApiClient()
  const size = 3
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['posts', queryKey],
    async queryFn({ pageParam }) {
      const { data } = await apiClient.get(`/posts/${queryKey}`, {
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

  const posts = (data != null && 'items' in data) ? data.items : data?.pages.map(page => page.items).flat() ?? []

  return (
    <>
      {isLoading ? <Skeleton count={size} /> : (
        posts.map((i) => (
          <a key={i.id} href={i.telegraph_url} style={{ textDecoration: "none" }}>
            <div className="chat-item">
              <div className="chat-data" style={{ display: "flex", marginLeft: 0, flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
                <div className="chat-title">{i.title}</div>
                <div className="chat-last-user" style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                  <img src={heartArticle} alt="" />
                  <span style={{ paddingLeft: 5 }}>{i.likes_amount ?? 0}</span>
                  {' '}
                  <img src={commentArticle} style={{ marginLeft: 25 }} alt="" />
                  <span style={{ paddingLeft: 5 }}>{i.views_amount ?? 0}</span>
                </div>
              </div>
            </div>
          </a>
        ))
      )}
      {hasNextPage && (
        <div
          className='show-more'
          onClick={() => fetchNextPage()}>
            Показать еще{isFetchingNextPage ? ' (загружается...)' : null}
        </div>
      )}
    </>
  )
}
