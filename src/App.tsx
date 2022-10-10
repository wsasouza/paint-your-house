import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './routes/Router'
import { BusinessRulesProvider } from './contexts/BusinessRulesContexts'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <BusinessRulesProvider>
          <Router />
        </BusinessRulesProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
