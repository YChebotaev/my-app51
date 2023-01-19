import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { createApiClient, getTelegramUserId, createQueryClient } from './utils'
import { useApiClient } from './hooks'
import reportWebVitals from './reportWebVitals'
import './index.css';

const apiClient = createApiClient({
  baseURL: process.env['REACT_APP_BACKEND_URL'] + '/api/v1',
  token: getTelegramUserId(),
  ngrokSkipBrowserWarning: '69420'
})
const queryClient = createQueryClient(apiClient)
const root = ReactDOM.createRoot(document.getElementById('root'));
const isFirstTime = window.localStorage.getItem('isFirstTime') === 'true'
window.localStorage.setItem('isFirstTime', false)

root.render(
  <React.StrictMode>
    <useApiClient.Provider apiClient={apiClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App isFirstTime={isFirstTime} />
        </BrowserRouter>
      </QueryClientProvider>
    </useApiClient.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
