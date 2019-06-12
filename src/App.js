import React, { Component } from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import Home from 'containers/Home/Home'
import Blog from 'containers/Blog/Blog'
import Post from 'containers/Blog/Post/Post'
import Layout from 'hoc/Layout'
import Servizi from 'containers/Servizi/Servizi'
import Soluzioni from 'containers/Soluzioni/Soluzioni'
import Azienda from 'containers/Azienda/Azienda'
import RicercaSviluppo from 'containers/RicercaSviluppo'
import Contatti from 'containers/Contatti'
import BasePage from 'containers/BasePage/BasePage'
import PrivacyPolicy from 'containers/PrivacyPolicy/PrivacyPolicy'
import NoteLegali from 'containers/NoteLegali/NoteLegali'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/(home)?" component={Home} />
          <Route exact path="/azienda" component={Azienda} />
          <Route exact path="/servizi" component={Servizi} />
          <Route exact path="/soluzioni" component={Soluzioni} />
          <Route exact path="/ricerca-e-sviluppo" component={RicercaSviluppo} />
          <Route exact path="/blog/" component={Blog} />
          <Route exact path="/blog/post/:postSlug" component={Post} />
          <Route exact path="/contatti" component={Contatti} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/note-legali" component={NoteLegali} />
          <Route component={BasePage} />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    )
  }
}

export default withRouter(App)
