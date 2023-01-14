import axios from "axios";

export const createApiClient = ({
  baseURL,
  token,
  ngrokSkipBrowserWarning
}) => {
  const apiClient = axios.create({
    baseURL
  })

  apiClient.interceptors.request.use(
    (config) => Object.assign(config, {
      headers: {
        ...config.headers,
        TOKEN: token,
        'ngrok-skip-browser-warning': ngrokSkipBrowserWarning
      }
    })
  )

  return apiClient
}
