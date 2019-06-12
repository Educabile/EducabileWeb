import React from 'react'
import ReactDOM from 'react-dom'
import './i18n'
import 'vendor/materialize.css'
import 'vendor/materialize.min.js'
import 'vendor/modernizr.min.js'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import ScrollToTop from 'components/ScrollToTop'

const { NODE_ENV } = process.env

const app = (
  <BrowserRouter basename={NODE_ENV !== 'development' ? '/other/wordpress' : ''}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
