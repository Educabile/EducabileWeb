import React, { Component } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
// TODO: Find out why it is so slow! Eventually remove the library
import { AnimatedSwitch as Switch } from 'react-router-transition'
import Home from './containers/Home/Home'
import Blog from './containers/Blog/Blog'
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy'
import NoteLegali from './containers/NoteLegali/NoteLegali'
import Post from './containers/Blog/Post/Post'
import Layout from './hoc/Layout'
// import Servizi from './containers/Servizi/Servizi'
import DidatticaDigitale from './containers/Servizi/DidatticaDigitale/DidatticaDigitale'
import DataScience from './containers/Servizi/DataScience/DataScience'
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }}>
          <Route path="/" exact component={Home} />
          {/* <Route path="/servizi/" component={Servizi} /> */}
          <Route path="/didattica-digitale" component={DidatticaDigitale} />
          <Route path="/data-science" component={DataScience} />
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
