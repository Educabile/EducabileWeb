import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Button, Section, Row, Col, Input } from 'react-materialize'
import Icon from '@mdi/react'
import {
  mdiArrowRight,
  mdiDomain,
  mdiAccountMultiple,
  mdiSchool,
  mdiForum,
  mdiPencil,
  mdiPollBox,
  mdiLibraryBooks,
  mdiSend,
} from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import FeaturesSlider from './FeaturesSlider'
import Container from '../../components/Container/Container'
import Posts from './Posts/Posts'

import PropTypes from 'prop-types'
import LazyLoad from 'react-lazy-load'
import FeatureCard from './FeatureCard'
import Destinatari from './Destinatari/Destinatari'
import PartnerSlider from './PartnerSlider/PartnerSlider'
import Spinner from '../../components/Spinner/Spinner'
import ServiceCard from './ServiceCard'
import Servizi from './Servizi'

class Home extends Component {
  componentDidMount() {
    window.M.ScrollSpy.init(document.querySelectorAll('.scrollspy'), {
      scrollOffset: 0,
    })
  }

  render() {
    if (!this.props.tReady) {
      return <Spinner />
    }

    return (
      <>
        <FeaturesSlider />

        <Section id="azienda" className="white scrollspy">
          <Container className="center">
            <h2 className="hide-on-large-only">
              <span className="blue-text text-darken-3">Educabile</span> una StartUp Innovativa
            </h2>

            <p className="flow-text grey-text left-align dropcap">
              {this.props.t('azienda.content')}
            </p>

            <HashLink
              to="/#destinatari"
              scroll={el => {
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 64,
                  behavior: 'smooth',
                })
              }}>
              <Button className="hoverable move-icon-forward blueGradient" large>
                {this.props.t('common:scopriDiPiu')}
                <Icon path={mdiArrowRight} size="1.3rem" />
              </Button>
            </HashLink>
          </Container>
        </Section>

        <Destinatari
          title="I Destinatari"
          button={
            <HashLink
              to="/#contatti"
              scroll={el => {
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 64,
                  behavior: 'smooth',
                })
              }}>
              <Button className="amber grey-text hoverable text-darken-3" large waves="light">
                {this.props.t('destinatari.contattiBtn')}
                <Icon path={mdiForum} size="1.3rem" />
              </Button>
            </HashLink>
          }>
          <FeatureCard
            icon={mdiDomain}
            title={this.props.t('destinatari.aziende.title')}
            content={this.props.t('destinatari.aziende.content')}
          />
          <FeatureCard
            icon={mdiAccountMultiple}
            title={this.props.t('destinatari.professionisti.title')}
            content={this.props.t('destinatari.professionisti.content')}
          />
          <FeatureCard
            icon={mdiSchool}
            title={this.props.t('destinatari.istituzioniScolastiche.title')}
            content={this.props.t('destinatari.istituzioniScolastiche.content')}
          />
        </Destinatari>

        <PartnerSlider title={this.props.t('partner.title')} />

        <Servizi
          title={this.props.t('areeDiIntevento.title')}
          content={this.props.t('areeDiIntervento.content')}
          button={
            <Link to="/servizi">
              <Button large waves="light" className="move-icon-forward hoverable blueGradient">
                {this.props.t('servizi.serviziBtn')}
                <Icon path={mdiArrowRight} size="1.3rem" />
              </Button>
            </Link>
          }>
          <Link to="servizi/didattica-digitale">
            <ServiceCard
              icon={mdiPencil}
              title={this.props.t('common:didatticaDigitale')}
              content={this.props.t('servizi.didatticaDigitale.content')}
              service="DidatticaDigitale"
            />
          </Link>

          <Link to="servizi/data-science">
            <ServiceCard
              icon={mdiPollBox}
              title={this.props.t('common:dataScience')} // FIXME: Update dataTechnology to dataScience in i18n
              content={this.props.t('servizi.dataTechnology.content')}
              service="DataScience"
            />
          </Link>
        </Servizi>

        <Section id="in-evidenza" className="grey lighten-2 center scrollspy">
          <Container>
            <h2 className="hide-on-large-only">{this.props.t('inEvidenza.title')}</h2>
            <LazyLoad offset={1000}>
              <Posts />
            </LazyLoad>
            <Link to="/blog?tags=3,4&order=desc">
              <Button id="blog-btn" large waves="light" className="blueGradient">
                {this.props.t('inEvidenza.blogBtn')}
                <Icon path={mdiLibraryBooks} size="1.3rem" color="white" />
              </Button>
            </Link>
          </Container>
        </Section>

        <Section id="contatti" className="center scrollspy">
          <Container>
            <h2 className="hide-on-large-only blue-text text-darken-3">
              {this.props.t('contatti.title')}
            </h2>

            <Row
              className="z-depth-1-half"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                borderRadius: 30,
              }}>
              <Col id="sedi" s={12} l={5} className="white">
                <h4 className="blue-text text-darken-3">{this.props.t('contatti.sedeLegale')}</h4>
                <p
                  className="left-align"
                  style={{
                    fontSize: 'smaller',
                    fontWeight: 'bold',
                  }}>
                  Via E. Nicolardi, 109 - 80131 - Napoli (NA)
                  <br />
                  P. IVA 08485831211 | educabile@pec.it
                  <br />
                  Cap. Soc. € 10.000,00 | N° REA NA 962304
                  <br />
                  Iscritta nella sezione Startup Innovative
                </p>

                <br />
                <h4 className="blue-text text-darken-3">
                  {this.props.t('contatti.sedeOperativa')}
                </h4>
                <p
                  className="left-align"
                  style={{
                    fontSize: 'smaller',
                    fontWeight: 'bold',
                  }}>
                  Via Coroglio, 57/d - Città della Scienza 80124 - Napoli (NA)
                  <br />
                  Incubatore Campania Newsteel Srl
                  <br />
                  Tel. +39 081 735 25 16 | +39 081 197 20380
                  <br />
                  Fax +39 081 197 22126
                </p>

                <br />

                <h4 className="blue-text text-darken-3">
                  {this.props.t('contatti.ufficioEstero')}
                </h4>
                <p
                  className="left-align"
                  style={{
                    fontSize: 'smaller',
                    fontWeight: 'bold',
                  }}>
                  300645 Timisoara (RO) - 119 Aradului Street
                  <br />
                  Banat’s University of Agricultural Sciences and Veterinary Medicine “King Michael
                  I of Romania”
                </p>
              </Col>

              <Col id="form" s={12} l={7} className="grey lighten-4 valign-wrapper">
                <Section>
                  <Input s={6} label={this.props.t('contatti.form.nomeCognome')} />
                  <Input s={6} type="email" label={this.props.t('contatti.form.email')} />
                  <Input
                    s={12}
                    type="text"
                    label={this.props.t('contatti.form.oggettoDelMessaggio')}
                  />
                  <Input
                    s={12}
                    type="textarea"
                    label={this.props.t('contatti.form.corpoDelMessaggio')}
                  />
                  <div>
                    <Button waves="light" large className="right blueGradient">
                      <Icon path={mdiSend} size="1.3rem" color="white" />
                      {this.props.t('contatti.form.inviaBtn')}
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

Home.propTypes = {
  t: PropTypes.func.isRequired,
  tReady: PropTypes.bool.isRequired,
}

export default withNamespaces('homepage')(Home)
