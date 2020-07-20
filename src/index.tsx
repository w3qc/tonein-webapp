import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import App from './app'
import Themes from './themes'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Themes.default}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
