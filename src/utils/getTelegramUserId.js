export const getTelegramUserId = () => {
  return window.Telegram.WebApp.initDataUnsafe.user?.id ?? process.env['REACT_APP_DEBUG_TOKEN']
}
