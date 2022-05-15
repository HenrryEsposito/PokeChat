import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './components/pages/LandingPage'
import GlobalStyles from './globalStyles'
import { ThemeProvider } from '@mui/material/styles'
import defaultTheme from './assets/themes/default'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>
)
