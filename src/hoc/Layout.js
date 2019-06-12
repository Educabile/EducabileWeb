import React, { Component } from 'react'
import Navbar from 'components/Navbar/Navbar'
import { Button, Modal } from 'react-materialize'
import Icon, { Stack } from '@mdi/react'
import {
  mdiEye,
  mdiClipboardText,
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiYoutube,
  mdiCheckboxBlank,
  mdiArrowUp,
} from '@mdi/js'
import ScrollToTop from 'react-scroll-up'
import { NavLink, Link } from 'react-router-dom'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import { logoEducabileBorderPng, logoEducabileBorderWebP } from 'assets/img'
import Picture from '@cloudpower97/react-progressive-picture'
import { scrollTo, setCookie, getCookie } from 'libs/utils'
import wp from 'src/wordpress'

class Layout extends Component {
  state = { menuItems: [] }

  componentDidMount() {
    wp.menus()
      .id('header')
      .then(res => {
        this.setState({
          menuItems: res.items,
        })
      })
      .catch(err => console.log(err))

    if (!getCookie('cookie-banner')) {
      window.M.Modal.getInstance(document.getElementById('cookie-modal')).open()
    }
  }

  render() {
    return (
      <>
        <header>
          <Navbar
            brand={
              <NavLink
                to="/#root"
                className="show-on-medium-and-down hide-on-med-and-up"
                scroll={scrollTo}>
                Educabile
              </NavLink>
            }
            className="z-depth-3"
            fixed
            alignLinks="right"
            centerLogo>
            {this.state.menuItems.map(m => (
              <NavLink
                key={m.id}
                className="sidenav-close"
                to={`/${m.url.split('/').slice(-2)[0]}`}>
                {m.title}
              </NavLink>
            ))}
          </Navbar>
        </header>
        <main>{this.props.children}</main>
        <NavLink to="/#root" scroll={scrollTo}>
          <Picture
            sources={[
              {
                srcSet: logoEducabileBorderWebP,
                type: 'image/webp',
              },
              {
                srcSet: logoEducabileBorderPng,
                type: 'image/png',
              },
            ]}
            id="footer-logo"
            alt="Logo Educabile Srl"
            blur={0}
            width={225}
            height={141}
          />
        </NavLink>
        <ScrollToTop
          showUnder={800}
          style={{
            zIndex: '2',
          }}>
          <Button
            floating
            large
            className="blueGradient hoverable"
            waves="light"
            style={{
              bottom: 64,
              right: 20,
              position: 'fixed',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon path={mdiArrowUp} size={1.125} color="white" />
          </Button>
        </ScrollToTop>
        <footer className="blue darken-3">
          <div className="row center-on-small-only">
            <div
              className="col s12 xl4"
              style={{
                paddingTop: 4,
              }}>
              <Link to="/privacy-policy">
                <Button
                  className="blue darken-3 white-text"
                  waves="light"
                  flat
                  style={{
                    display: 'inline-flex',
                    fontSize: 'small',
                    textTransform: 'capitalize',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 145,
                  }}>
                  <Icon path={mdiEye} size={0.7} color="white" />
                  {this.props.t('footer:privacyPolicy')}
                </Button>
              </Link>
              {'|'}
              <Link to="/note-legali">
                <Button
                  className="blue darken-3 white-text"
                  waves="light"
                  flat
                  style={{
                    display: 'inline-flex',
                    fontSize: 'small',
                    textTransform: 'capitalize',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 145,
                  }}>
                  <Icon path={mdiClipboardText} size={0.7} color="white" />
                  {this.props.t('footer:noteLegali')}
                </Button>
              </Link>
            </div>

            <div
              className="col s12 xl4 light center"
              style={{
                paddingTop: 12,
                whiteSpace: 'nowrap',
              }}>
              Copyright &copy; {new Date().getFullYear()} Educabile Srl - an Innovative Startup
              Company
            </div>

            <div
              id="social"
              className="col s12 xl4"
              style={{
                paddingTop: 2,
              }}>
              <a
                href="https://www.facebook.com/educabile/"
                rel="external noopener noreferrer"
                target="_blank">
                <Stack size={1.8}>
                  <Icon path={mdiCheckboxBlank} color="white" size={1.8} />
                  <Icon path={mdiFacebook} color="#1565C0" size={1.2} />
                </Stack>
              </a>
              <a
                href="https://twitter.com/Educabile_Srl"
                rel="external noopener noreferrer"
                target="_blank">
                <Stack size={1.8}>
                  <Icon path={mdiCheckboxBlank} color="white" size={1.8} />
                  <Icon path={mdiTwitter} color="#1565C0" size={1.2} />
                </Stack>
              </a>
              <a
                href="https://it.linkedin.com/company/educabile"
                rel="external noopener noreferrer"
                target="_blank">
                <Stack size={1.8}>
                  <Icon path={mdiCheckboxBlank} color="white" size={1.8} />
                  <Icon path={mdiLinkedin} color="#1565C0" size={1.2} />
                </Stack>
              </a>
              <a
                href="https://www.youtube.com/channel/UCi7MiFTtF2fsIz7Yc-XL3fg"
                rel="external noopener noreferrer"
                target="_blank">
                <Stack size={1.8}>
                  <Icon path={mdiCheckboxBlank} color="white" size={1.8} />
                  <Icon path={mdiYoutube} color="#1565C0" size={1.2} />
                </Stack>
              </a>
            </div>
          </div>
        </footer>
        <Modal
          id="cookie-modal"
          className="rounded"
          header="Questo sito web utilizza cookie"
          bottomSheet
          actions={[
            <NavLink to="/privacy-policy" key="cookie-banner-more">
              <Button waves="light" modal="close" flat>
                Leggi di piu&apos;
              </Button>
            </NavLink>,
            <Button
              key="cookie-banner-close"
              waves="light"
              modal="close"
              flat
              onClick={() => {
                setCookie('cookie-banner', 'accept', 365)
              }}>
              Continua la navigazione
            </Button>,
          ]}>
          <p className="flow-text" style={{ margin: 0 }}>
            Questo sito utilizza cookie, anche di terze parti, necessari al funzionamento ed utili
            alle finalità illustrate nella cookie policy. Chiudendo questo banner, cliccando su un
            link o proseguendo la navigazione in altra maniera, acconsenti all’uso dei cookie.
          </p>
        </Modal>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node,
  t: PropTypes.func.isRequired,
}

export default withNamespaces(['navbar', 'footer'])(Layout)
