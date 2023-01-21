import { PageTitle } from "../../../components/common/PageTitle"
import Footer from "../../../components/common/Footer"
import { Tabs, useTabs } from '../../../components/common/Tabs'
import { Notification, useNotification } from '../../../components/common/Notification'
import { MyAccount } from '../MyAccount'
import { Articles } from '../Articles'
import { ArticlesSkeleton } from './ArticlesSkeleton'
import deleteIcon from '../../../styles/images/delete.svg'
import classes from "./Account.module.css"
import "../../../styles/style.css"
import { useQuery } from "@tanstack/react-query"

export const Account = () => {
  const { getTabProps, getContentProps } = useTabs(0)
  const {
    isOpen: isDeleteNotificationOpen,
    onOpen: onDeleteNotificationOpen
  } = useNotification()
  const { data, isLoading } = useQuery(['posts', 'my_posts'])

  console.log('data =', data)

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
                  onEdit={(item) => { }}
                  onDelete={(item) => {
                    onDeleteNotificationOpen({
                      timeout: 3000
                    })
                  }}
                />)}
            </Tabs.Content>
            <Tabs.Content {...getContentProps(1)}>
              {isLoading ? <ArticlesSkeleton count={3} /> : (
                <Articles
                  data={[].concat(data.draft.posts).concat(data.not_approved)}
                  onEdit={(item) => { }}
                  onDelete={(item) => {
                    onDeleteNotificationOpen({
                      timeout: 3000
                    })
                  }}
                />
              )}
            </Tabs.Content>
          </Tabs.Wrapper>
        </div>
      </div>
      <Footer withoutPlaceholder />
      <Notification
        isOpen={isDeleteNotificationOpen}
        icon={<img src={deleteIcon} alt="" />}
        text="Статья удалена"
      />
    </div>
  )
}
