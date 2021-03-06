import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './components/pages/LandingPage'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
)
