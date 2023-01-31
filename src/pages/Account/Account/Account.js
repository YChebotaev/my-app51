import { useNavigate } from "react-router-dom"
import { useMutation, useQuery } from "@tanstack/react-query"
import { PageTitle } from "../../../components/common/PageTitle"
import Footer from "../../../components/common/Footer"
import { Tabs, useTabs } from '../../../components/common/Tabs'
import { Notification } from '../../../components/common/Notification'
import { MyAccount } from '../MyAccount'
import { Articles } from '../Articles'
import { ArticlesSkeleton } from './ArticlesSkeleton'
import classes from "./Account.module.css"
import "../../../styles/style.css"
import {
  useApiClient,
  useMutationStateNotification,
  SUCCESS_STATE,
  FAIL_STATE,
  SUCCESS_ICON,
  FAIL_ICON
} from "../../../hooks"

export const Account = () => {
  const apiClient = useApiClient()
  const navigate = useNavigate()
  const { getTabProps, getContentProps } = useTabs(0)
  const {
    setSucceed,
    setFailed,
    getNotificationProps
  } = useMutationStateNotification((state) => {
    switch (state) {
      case SUCCESS_STATE: return {
        text: 'Статья удалена',
        icon: SUCCESS_ICON
      }
      case FAIL_STATE: return {
        text: 'Что-то пошло не так, попробуйте позже',
        icon: FAIL_ICON
      }
      default: return { text: null, icon: null }
    }
  })
  const { data, isLoading } = useQuery(['posts', 'my_posts'])
  const { mutate } = useMutation(['posts', 'delete_post'], async ({ postUrl }) => {
    const { data } = await apiClient.post('/posts/delete_post', undefined, {
      params: {
        post_url: postUrl
      }
    })

    return data
  }, {
    onSuccess() {
      setSucceed()
    },
    onError() {
      setFailed()
    }
  })

  return (
    <div className="main-wrapper">
      <PageTitle legacy>Мой аккаунт</PageTitle>
      <div className={classes.account}>
        <div className={classes.myAccountWrapper}>
          <MyAccount />
        </div>
        <div className={classes.tabsWrapper}>
          <Tabs.Wrapper>
            <Tabs>
              <Tabs.Tab {...getTabProps(0)}>Опубликованное</Tabs.Tab>
              <Tabs.Tab
                {...getTabProps(1)}
                count={
                  data?.draft?.draft_count != null && <Tabs.Tab.Count>{data.draft.draft_count}</Tabs.Tab.Count>
                }>
                Черновики
              </Tabs.Tab>
            </Tabs>
            <Tabs.Content {...getContentProps(0)}>
              {isLoading ? <ArticlesSkeleton count={3} /> : (
                <Articles data={data.published}
                  onEdit={(item) => {
                    navigate(`/article/${item.id}/edit`)
                  }}
                  onDelete={(item) => {
                    mutate({ postUrl: item.telegraph_url })
                  }}
                />)}
            </Tabs.Content>
            <Tabs.Content {...getContentProps(1)}>
              {isLoading ? <ArticlesSkeleton count={3} /> : (
                <Articles
                  data={[].concat(data.draft.posts).concat(data.not_approved)}
                  onEdit={(item) => {
                    navigate(`/article/${item.id}/edit`)
                  }}
                  onDelete={(item) => {
                    mutate({ postUrl: item.telegraph_url })
                  }}
                />
              )}
            </Tabs.Content>
          </Tabs.Wrapper>
        </div>
      </div>
      <Footer withoutPlaceholder />
      <Notification {...getNotificationProps()} />
    </div>
  )
}
