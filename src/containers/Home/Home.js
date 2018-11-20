import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Button, Section, Row, Divider, CardPanel, Input, Preloader } from 'react-materialize'
import Icon from '@mdi/react'
import {
  mdiArrowRight,
  mdiDomain,
  mdiAccountMultiple,
  mdiSchool,
  mdiForum,
  mdiPencil,
  mdiPollBox,
  mdiGooglePhysicalWeb,
  mdiLibraryBooks,
  mdiSend,
} from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import FeaturesSlider from './FeaturesSlider'
import Container from '../../components/Container/Container'
import Carousel from '../../components/Carousel/Carousel'
import Col from '../../components/Col/Col'
import Posts from './Posts/Posts'
import {
  banatUniversityPng as LogoBanatUniversity,
  geofotogrammetricaPng as LogoGeofotogrammetrica,
  qequipePng as LogoQequipe,
  ictConsultingPng as LogoIctConsulting,
} from '../../assets/img/partners-logos'
import PropTypes from 'prop-types'
class Home extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    tReady: PropTypes.bool.isRequired,
  }

  render() {
    const { t, tReady } = this.props

    if (!tReady) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100vh - 104px)',
          }}>
          <Preloader />
        </div>
      )
    }

    return (
      <>
        <FeaturesSlider />

        <Section id="azienda" className="white">
          <Container className="center">
            <h2 className="hide-on-large-only">
              <span className="blue-text text-darken-3">Educabile</span> una StartUp Innovativa
            </h2>

            <p className="flow-text grey-text left-align dropcap">{t('azienda.content')}</p>

            <HashLink
              to="/#destinatari"
              scroll={el => {
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 64,
                  behavior: 'smooth',
                })
              }}>
              <Button className="hoverable move-icon-forward" large>
                {t('common:scopriDiPiu')}
                <Icon path={mdiArrowRight} size="1.3rem" />
              </Button>
            </HashLink>
          </Container>
        </Section>

        <Section id="destinatari" className="grey lighten-4">
          <Container className="center ">
            <h2 className="hide-on-large-only">
              I <span className="blue-text text-darken-3">Destinatari</span>
            </h2>

            <Row
              style={{
                display: 'flex',
                alignItems: 'stretch',
                flexWrap: 'wrap',
              }}>
              <Col s={12} m={6} xl={4} style={{ display: 'flex' }}>
                <CardPanel className="feature hoverable rounded">
                  <div className="feature-icon">
                    <Icon path={mdiDomain} size={3} />
                  </div>
                  <h5>{t('destinatari.aziende.title')}</h5>

                  <p className="flow-text grey-text">{t('destinatari.aziende.content')}</p>
                </CardPanel>
              </Col>

              <Col s={12} m={6} xl={4} style={{ display: 'flex' }}>
                <CardPanel className="feature hoverable rounded">
                  <div className="feature-icon">
                    <Icon path={mdiAccountMultiple} className="blue-text text-darken-3" size={3} />
                  </div>
                  <h5>{t('destinatari.professionisti.title')}</h5>

                  <p className="flow-text grey-text">{t('destinatari.professionisti.content')}</p>
                </CardPanel>
              </Col>

              <Col s={12} m={12} xl={4} style={{ display: 'flex' }}>
                <CardPanel className="feature hoverable rounded">
                  <div className="feature-icon">
                    <Icon path={mdiSchool} className="blue-text text-darken-3" size={3} />
                  </div>

                  <h5> {t('destinatari.istituzioniScolastiche.title')}</h5>

                  <p className="flow-text grey-text">
                    {t('destinatari.istituzioniScolastiche.content')}
                  </p>
                </CardPanel>
              </Col>
            </Row>

            {/* <h3>Vuoi saperne di piu'?</h3> */}

            <HashLink
              to="/#contatti"
              scroll={el => {
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 64,
                  behavior: 'smooth',
                })
              }}>
              <Button
                className="amber grey-text hoverable text-darken-3"
                large
                waves="light"
                id="go-to-contact">
                {t('destinatari.contattiBtn')}
                <Icon path={mdiForum} size="1.3rem" />
              </Button>
            </HashLink>
          </Container>
        </Section>

        <Section className="white">
          <h2 className="center">{t('partner.title')} </h2>

          <Container>
            <Divider />

            <Carousel
              options={{
                fullWidth: false,
                noWrap: false,
                padding: 200,
                indicators: true,
              }}
              images={[LogoGeofotogrammetrica, LogoQequipe, LogoBanatUniversity, LogoIctConsulting]}
              centerImages
            />

            <Divider />
          </Container>
        </Section>

        <Section id="aree-di-intervento" className="white">
          <Container className="center">
            <h2 className="hide-on-large-only blue-text text-darken-3">
              {t('areeDiIntervento.title')}
            </h2>
            <p className="flow-text grey-text left-align">{t('areeDiIntervento.content')}</p>
          </Container>
        </Section>

        <Section id="servizi" className="grey lighten-4">
          <Container className="center">
            <Row>
              <Link to="/didattica-digitale">
                <Col s={12} m={4} className="didattica-digitale center">
                  <div className="icon">
                    <Icon path={mdiPencil} size={3} color="#ff9800" />
                  </div>

                  <h5> {t('common:didatticaDigitale')}</h5>
                  <p className="flow-text grey-text left-align">
                    {t('servizi.didatticaDigitale.content')}
                  </p>
                </Col>
              </Link>

              <Link to="/data-technology">
                <Col s={12} m={4} className="data-science center">
                  <div className="icon">
                    <Icon path={mdiPollBox} size={3} color="#4CAF50" />
                  </div>
                  <h5> {t('common:dataScience')}</h5>
                  <p className="flow-text grey-text left-align">
                    {t('servizi.dataTechnology.content')}
                  </p>
                </Col>
              </Link>

              {/* TODO: Remove this section and add it into Data Technology page */}
              <Link to="/internet-of-things">
                <Col s={12} m={4} className="internet-of-things center">
                  <div className="icon">
                    <Icon path={mdiGooglePhysicalWeb} size={3} color="#9c27b0" />
                  </div>
                  <h5>Internet Of Things</h5>
                  <p className="flow-text grey-text left-align">
                    Sviluppo di piattaforme e infrastrutture in ambienti di Data Science attraverso
                    l’integrazione di strumenti di intelligenza artificiale pervasiva mediante
                    tecnologie avanzate di Machine Learning e Data Mining.
                  </p>
                </Col>
              </Link>
            </Row>

            <Link to="/servizi">
              <Button large waves="light" className="move-icon-forward hoverable">
                {t('servizi.serviziBtn')}
                <Icon path={mdiArrowRight} size="1.3rem" />
              </Button>
            </Link>
          </Container>
        </Section>

        <Section id="in-evidenza" className="grey lighten-2 center">
          <Container>
            <h2 className="hide-on-large-only">{t('inEvidenza.title')}</h2>

            <Posts />

            <Button id="blog-btn" large waves="light" node={Link} to="/blog">
              {t('inEvidenza.blogBtn')}
              <Icon path={mdiLibraryBooks} size="1.3rem" color="white" />
            </Button>
          </Container>
        </Section>

        <Section id="contatti" className="center" style={{ backgroundColor: '#e9eaee' }}>
          <Container>
            <h2 className="hide-on-large-only blue-text text-darken-3">{t('contatti.title')}</h2>

            <Row
              className="z-depth-1-half"
              style={{ display: 'flex', flexWrap: 'wrap', borderRadius: 30 }}>
              <Col id="sedi" s={12} l={5} className="white">
                <h4 className="blue-text text-darken-3">{t('contatti.sedeLegale')}</h4>
                <p className="left-align" style={{ fontSize: 'smaller', fontWeight: 'bold' }}>
                  Via E. Nicolardi, 109 - 80131 - Napoli (NA)
                  <br />
                  P. IVA 08485831211 | educabile@pec.it
                  <br />
                  Cap. Soc. € 10.000,00 | N° REA NA 962304
                  <br />
                  Iscritta nella sezione Startup Innovative
                </p>

                <br />
                <h4 className="blue-text text-darken-3">{t('contatti.sedeOperativa')}</h4>
                <p className="left-align" style={{ fontSize: 'smaller', fontWeight: 'bold' }}>
                  Via Coroglio, 57/d - Città della Scienza 80124 - Napoli (NA)
                  <br />
                  Incubatore Campania Newsteel Srl
                  <br />
                  Tel. +39 081 735 25 16 | +39 081 197 20380
                  <br />
                  Fax +39 081 197 22126
                </p>

                <br />

                <h4 className="blue-text text-darken-3">{t('contatti.ufficioEstero')}</h4>
                <p className="left-align" style={{ fontSize: 'smaller', fontWeight: 'bold' }}>
                  300645 Timisoara (RO) - 119 Aradului Street
                  <br />
                  Banat’s University of Agricultural Sciences and Veterinary Medicine “King Michael
                  I of Romania”
                </p>
              </Col>

              <Col id="form" s={12} l={7} className="grey lighten-4 valign-wrapper">
                <Section>
                  <Input s={6} label={t('contatti.form.nomeCognome')} />
                  <Input s={6} type="email" label={t('contatti.form.email')} />
                  <Input s={12} type="text" label={t('contatti.form.oggettoDelMessaggio')} />
                  <Input s={12} type="textarea" label={t('contatti.form.corpoDelMessaggio')} />
                  <div>
                    <Button waves="light" large className="right">
                      <Icon path={mdiSend} size="1.3rem" color="white" />
                      {t('contatti.form.inviaBtn')}
                    </Button>
                  </div>
                </Section>
              </Col>
            </Row>
          </Container>
        </Section>
      </>
    )
  }
}

export default withNamespaces('homepage')(Home)
