import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Button } from 'react-materialize'
import Icon, { Stack } from '@mdi/react'
import {
  mdiEye,
  mdiClipboardText,
  mdiFacebook,
  mdiTwitter,
  mdiGooglePlus,
  mdiLinkedin,
  mdiYoutube,
  mdiCheckboxBlank,
} from '@mdi/js'
import { HashLink as Link } from 'react-router-hash-link'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'

const Layout = ({ children, t }) => {
  const offset = 60

  return (
    <>
      <header>
        <Navbar logo="Educabile" className="z-depth-3" fixed>
          <Link
            className="sidenav-close"
            to="/#"
            scroll={el => {
              window.scrollTo({
                top:
                  el.getBoundingClientRect().top -
                  document.body.getBoundingClientRect().top -
                  offset,
                behavior: 'smooth',
              })
            }}>
            {t('azienda')}
          </Link>
          <Link
            className="sidenav-close"
            to="/#destinatari"
            scroll={el => {
              window.scrollTo({
                top:
                  el.getBoundingClientRect().top -
                  document.body.getBoundingClientRect().top -
                  offset,
                behavior: 'smooth',
              })
            }}>
            {t('destinatari')}
          </Link>
          <Link
            className="sidenav-close"
            to="/#aree-di-intervento"
            scroll={el => {
              window.scrollTo({
                top:
                  el.getBoundingClientRect().top -
                  document.body.getBoundingClientRect().top -
                  offset,
                behavior: 'smooth',
              })
            }}>
            {t('areeDiIntervento')}
          </Link>
          <Link
            className="sidenav-close"
            to="/#in-evidenza"
            scroll={el => {
              window.scrollTo({
                top:
                  el.getBoundingClientRect().top -
                  document.body.getBoundingClientRect().top -
                  offset,
                behavior: 'smooth',
              })
            }}>
            {t('inEvidenza')}
          </Link>
          <Link
            className="sidenav-close"
            to="/#contatti"
            scroll={el => {
              window.scrollTo({
                top:
                  el.getBoundingClientRect().top -
                  document.body.getBoundingClientRect().top -
                  offset,
                behavior: 'smooth',
              })
            }}>
            {t('contatti')}
          </Link>
        </Navbar>
      </header>
      <main>{children}</main>
      <Link to="/#">
        <img
          id="footer-logo"
          className="hide-on-med-and-down"
          // FIXME: Add this image to the assets folder and reference it here
          src="http://143.225.48.253/other/_educabile.it/img/logo_225x225.png"
          alt="Logo Educabile"
          title="Educabile Srl"
        />
      </Link>

      <footer className="blue darken-3">
        <div className="row">
          <div className="col s12 xl4 center" style={{ paddingTop: 4 }}>
            <Button
              className="blue darken-3 white-text"
              waves="light"
              flat
              node={Link}
              to="/privacy-policy#"
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
            {'|'}
            <Button
              className="blue darken-3 white-text"
              waves="light"
              flat
              node={Link}
              to="/note-legali"
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
          </div>

          <div className="col s12 xl4 center light" style={{ paddingTop: 12 }}>
            {t('footer:copyright')}
          </div>

          <div className="col s12 xl4 center" style={{ paddingTop: 2 }}>
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
              href="https://plus.google.com/116358556609411124672"
              rel="external noopener noreferrer"
              target="_blank">
              <Stack size={1.8}>
                <Icon path={mdiCheckboxBlank} color="white" size={1.8} />
                <Icon path={mdiGooglePlus} color="#1565C0" size={1.2} />
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
}

Layout.propTypes = {
  children: PropTypes.node,
  t: PropTypes.func.isRequired,
}

export default withNamespaces(['navbar', 'footer'])(Layout)
