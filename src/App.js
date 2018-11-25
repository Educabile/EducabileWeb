import React, { Component } from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
// TODO: Find out why it is so slow! Eventually remove the library
// import { AnimatedSwitch } from 'react-router-transition'
import Home from './containers/Home/Home'
import Blog from './containers/Blog/Blog'
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy'
import NoteLegali from './containers/NoteLegali/NoteLegali'
import DidatticaDigitale from './containers/DidatticaDigitale/DidatticaDigitale'
import DataTechnology from './containers/DataTechnology/DataTechnology'
import Post from './containers/Blog/Post/Post'
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/didattica-digitale" exact component={DidatticaDigitale} />
          <Route path="/data-technology" exact component={DataTechnology} />
          <Route path="/note-legali" exact component={NoteLegali} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route exact path="/blog/" component={Blog} />
          <Route exact path="/blog/post/:postSlug" component={Post} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    )
  }
}

export default withRouter(App)
