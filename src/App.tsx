import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { Router } from './routes/Router'
import { BusinessRulesProvider } from './contexts/BusinessRulesContexts'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import 'react-toastify/dist/ReactToastify.min.css'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <BusinessRulesProvider>
          <Router />
        </BusinessRulesProvider>
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </BrowserRouter>
  )
}
