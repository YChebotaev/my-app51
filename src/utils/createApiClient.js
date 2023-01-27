import axios from "axios";

export const createApiClient = ({
  baseURL,
  token,
  ngrokSkipBrowserWarning
}) => {
  const apiClient = axios.create({
    baseURL,
  })

  apiClient.getDefaultHeaders = () => ({
    TOKEN: token,
    'ngrok-skip-browser-warning': ngrokSkipBrowserWarning
  })

  apiClient.interceptors.request.use(
    (config) => Object.assign(config, {
      headers: {
        ...config.headers,
        ...apiClient.getDefaultHeaders()
      }
    })
  )

  return apiClient
}
