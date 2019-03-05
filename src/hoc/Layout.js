import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import { Button } from 'react-materialize'
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
import { NavHashLink as Link } from 'react-router-hash-link'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import { logoEducabilePng, logoEducabileWebP } from 'assets/img'
import Picture from '@cloudpower97/react-progressive-picture'
import { scrollTo } from 'libs/utils'

const offset = 56

const Layout = ({ children, t }) => (
  <>
    <header>
      <Navbar
        brand={
          <Link
            to="/#root"
            className="show-on-medium-and-down hide-on-med-and-up"
            scroll={scrollTo}>
            Educabile
          </Link>
        }
        className="z-depth-3"
        fixed
        alignLinks="right"
        centerLogo>
        <Link className="sidenav-close" to="/#azienda" scroll={el => scrollTo(el, offset)}>
          {t('azienda')}
        </Link>
        <Link
          className="sidenav-close"
          to="/#destinatari"
          scroll={el => {
            scrollTo(el, 56)
          }}>
          {t('destinatari')}
        </Link>
        <Link
          className="sidenav-close"
          to="/#aree-di-intervento"
          scroll={el => {
            scrollTo(el, offset)
          }}>
          {t('areeDiIntervento')}
        </Link>
        <Link
          className="sidenav-close"
          to="/#in-evidenza"
          scroll={el => {
            scrollTo(el, offset)
          }}>
          {t('inEvidenza')}
        </Link>
        <Link
          className="sidenav-close"
          to="/#contatti"
          scroll={el => {
            scrollTo(el, offset)
          }}>
          {t('contatti')}
        </Link>
      </Navbar>
    </header>
    <main>{children}</main>
    <Link to="/#root">
      <Picture
        sources={[
          {
            srcSet: logoEducabileWebP,
            type: 'image/webp',
          },
          {
            srcSet: logoEducabilePng,
            type: 'image/png',
          },
        ]}
        id="footer-logo"
        alt="Logo Educabile Srl"
        blur={0}
        width={225}
        height={141}
      />
    </Link>
    <ScrollToTop showUnder={800} style={{ zIndex: '2' }}>
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
        <div className="col s12 xl4" style={{ paddingTop: 4 }}>
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
              {t('footer:privacyPolicy')}
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
              {t('footer:noteLegali')}
            </Button>
          </Link>
        </div>

        <div className="col s12 xl4 light" style={{ paddingTop: 12, whiteSpace: 'nowrap' }}>
          {t('footer:copyright')}
        </div>

        <div id="social" className="col s12 xl4" style={{ paddingTop: 2 }}>
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
  </>
)

Layout.propTypes = {
  children: PropTypes.node,
  t: PropTypes.func.isRequired,
}

export default withNamespaces(['navbar', 'footer'])(Layout)
