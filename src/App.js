import React, { Component } from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import Home from 'containers/Home/Home'
import Blog from 'containers/Blog/Blog'
import PrivacyPolicy from 'containers/PrivacyPolicy/PrivacyPolicy'
import NoteLegali from 'containers/NoteLegali/NoteLegali'
import Post from 'containers/Blog/Post/Post'
import Layout from 'hoc/Layout'
// import Servizi from 'containers/Servizi/Servizi'
import DidatticaDigitale from 'containers/Servizi/DidatticaDigitale/DidatticaDigitale'
import DataScience from 'containers/Servizi/DataScience/DataScience'
import Azienda from 'containers/Azienda/Azienda'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }}>
          <Route path="/" exact component={Home} />
          <Route path="/azienda" exact component={Azienda} />
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
