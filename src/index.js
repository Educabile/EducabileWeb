import React from 'react'
import ReactDOM from 'react-dom'
import './i18n'
import './index.css'
// import 'materialize-css/dist/js/materialize'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import ScrollToTop from './hoc/ScrollToTop/ScrollToTop'
import registerServiceWorker from './registerServiceWorker'

const { PUBLIC_URL } = process.env

const app = (
  <BrowserRouter basename={PUBLIC_URL}>
    {/* <ScrollToTop> */}
    <App />
    {/* </ScrollToTop> */}
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
