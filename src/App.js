import React, { Component } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import Home from './containers/Home/Home'
import Blog from './containers/Blog/Blog'
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy'
import NoteLegali from './containers/NoteLegali/NoteLegali'
import DidatticaDigitale from './containers/DidatticaDigitale/DidatticaDigitale'
import DataTechnology from './containers/DataTechnology/DataTechnology'
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <Layout>
        <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }}>
          <Route path="/" exact component={Home} />
          <Route path="/didattica-digitale" exact component={DidatticaDigitale} />
          <Route path="/data-technology" exact component={DataTechnology} />
          <Route path="/note-legali" exact component={NoteLegali} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/blog/" component={Blog} />
          <Redirect to="/" />
        </AnimatedSwitch>
      </Layout>
    )
  }
}

export default withRouter(App)
