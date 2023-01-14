import PageTitle from "../../../components/common/PageTitle"
import Footer from "../../../components/common/Footer"
import { Tabs, useTabs } from '../../../components/common/Tabs'
import { Notification, useNotification } from '../../../components/common/Notification'
import { MyAccount } from '../MyAccount'
import { Articles } from '../Articles'
import deleteIcon from '../../../styles/images/delete.svg'
import classes from "./Account.module.css"
import "../../../styles/style.css"

export const Account = () => {
  const { getTabProps, getContentProps } = useTabs(0)
  const {
    isOpen: isDeleteNotificationOpen,
    onOpen: onDeleteNotificationOpen
  } = useNotification()

  return (
    <div className="main-wrapper">
      <PageTitle>Мой аккаунт</PageTitle>
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
                  <Tabs.Tab.Count>5</Tabs.Tab.Count>
                }>
                Черновики
              </Tabs.Tab>
            </Tabs>
            <Tabs.Content {...getContentProps(0)}>
              <Articles data={[
                {
                  id: '9aba7333-30c7-4f87-af7f-8d988f2d8561',
                  title: 'Dicsord запустил платные подписки на сообщества',
                  pubDate: new Date()
                },
                {
                  id: 'af6677b3-d57f-43f5-90d2-047000d8713d',
                  title: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться',
                  pubDate: new Date()
                },
                {
                  id: '01b13b75-14ac-458a-a31d-fbe1db6f0e64',
                  title: 'Dicsord запустил платные подписки на сообщества',
                  pubDate: new Date()
                },
                {
                  id: '12e2c121-9240-4346-8cfc-43f543a9d8c0',
                  title: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться',
                  pubDate: new Date()
                },
                {
                  id: '24e1f688-49fb-46eb-9640-03136049951b',
                  title: 'Dicsord запустил платные подписки на сообщества',
                  pubDate: new Date()
                },
              ]}
                onEdit={(item) => { }}
                onDelete={(item) => {
                  onDeleteNotificationOpen({
                    timeout: 3000
                  })
                }}
              />
            </Tabs.Content>
            <Tabs.Content {...getContentProps(1)}>
              <Articles data={[
                {
                  id: '9aba7333-30c7-4f87-af7f-8d988f2d8561',
                  title: 'Dicsord запустил платные подписки на сообщества',
                  pubDate: new Date(),
                  isDraft: true,
                },
                {
                  id: 'af6677b3-d57f-43f5-90d2-047000d8713d',
                  title: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться',
                  pubDate: new Date(),
                  isDraft: true,
                },
                {
                  id: '01b13b75-14ac-458a-a31d-fbe1db6f0e64',
                  title: 'Dicsord запустил платные подписки на сообщества',
                  pubDate: new Date(),
                  isDraft: true,
                },
                {
                  id: '12e2c121-9240-4346-8cfc-43f543a9d8c0',
                  title: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться',
                  pubDate: new Date(),
                  isDraft: true,
                },
                {
                  id: '24e1f688-49fb-46eb-9640-03136049951b',
                  title: 'Dicsord запустил платные подписки на сообщества',
                  pubDate: new Date(),
                  isDraft: true,
                },
              ]}
                onEdit={(item) => { }}
                onDelete={(item) => {
                  onDeleteNotificationOpen({
                    timeout: 3000
                  })
                }}
              />
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
