import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
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
import PropTypes from 'prop-types'
import { scrollTo } from '../../libs/utils'

import FeaturesSlider from './FeaturesSlider'
import FeatureCard from './FeatureCard'
import Destinatari from './Destinatari/Destinatari'
import PartnerSlider from './PartnerSlider/PartnerSlider'
import ServiceCard from './ServiceCard'
import Servizi from './Servizi/Servizi'
import Azienda from './Azienda/Azienda'
import InEvidenza from './InEvidenza/InEvidenza'
import Contatti from './Contatti/Contatti'
const Home = ({ t }) => {
  return (
    <>
      <FeaturesSlider />

      <Azienda
        title="Educabile una StartUp Innovativa"
        content={t('azienda.content')}
        button={
          <Link
            to="/#destinatari"
            scroll={el => {
              scrollTo(el, 60)
            }}>
            <Button className="hoverable move-icon-forward blueGradient" large>
              {t('common:scopriDiPiu')}
              <Icon path={mdiArrowRight} size="1.3rem" />
            </Button>
          </Link>
        }
      />

      <Destinatari
        title="I Destinatari"
        button={
          <Link
            to="/#contatti"
            scroll={el => {
              scrollTo(el, 60)
            }}>
            <Button className="amber grey-text hoverable text-darken-3" large waves="light">
              {t('destinatari.contattiBtn')}
              <Icon path={mdiForum} size="1.3rem" />
            </Button>
          </Link>
        }>
        <FeatureCard
          icon={mdiDomain}
          title={t('destinatari.aziende.title')}
          content={t('destinatari.aziende.content')}
        />
        <FeatureCard
          icon={mdiAccountMultiple}
          title={t('destinatari.professionisti.title')}
          content={t('destinatari.professionisti.content')}
        />
        <FeatureCard
          icon={mdiSchool}
          title={t('destinatari.istituzioniScolastiche.title')}
          content={t('destinatari.istituzioniScolastiche.content')}
        />
      </Destinatari>

      <PartnerSlider title={t('partner.title')} />

      <Servizi
        title={t('areeDiIntervento.title')}
        content={t('areeDiIntervento.content')}
        button={
          <Link to="/didattica-digitale">
            <Button large waves="light" className="move-icon-forward hoverable blueGradient">
              {t('servizi.serviziBtn')}
              <Icon path={mdiArrowRight} size="1.3rem" />
            </Button>
          </Link>
        }>
        <Link to="/didattica-digitale">
          <ServiceCard
            icon={mdiPencil}
            title={t('common:didatticaDigitale')}
            content={t('servizi.didatticaDigitale.content')}
            service="DidatticaDigitale"
          />
        </Link>

        <Link to="/data-science">
          <ServiceCard
            icon={mdiPollBox}
            title={t('common:dataScience')}
            content={t('servizi.dataTechnology.content')}
            service="DataScience"
          />
        </Link>
      </Servizi>

      <InEvidenza
        title={t('inEvidenza.title')}
        button={
          <Link to="/blog?tags=3,4&order=desc">
            <Button large waves="light" className="blueGradient">
              {t('inEvidenza.blogBtn')}
              <Icon path={mdiLibraryBooks} size="1.3rem" color="white" />
            </Button>
          </Link>
        }
      />

      <Contatti title={t('contatti.title')}>
        <Row
          className="z-depth-1-half"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            borderRadius: 30,
          }}>
          <Col id="sedi" s={12} l={5} className="white">
            <h4 className="blue-text text-darken-3">{t('contatti.sedeLegale')}</h4>
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
            <h4 className="blue-text text-darken-3">{t('contatti.sedeOperativa')}</h4>
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

            <h4 className="blue-text text-darken-3">{t('contatti.ufficioEstero')}</h4>
            <p
              className="left-align"
              style={{
                fontSize: 'smaller',
                fontWeight: 'bold',
              }}>
              300645 Timisoara (RO) - 119 Aradului Street
              <br />
              Banat’s University of Agricultural Sciences and Veterinary Medicine “King Michael I of
              Romania”
            </p>
          </Col>

          <Col
            s={12}
            l={7}
            className="grey lighten-4 valign-wrapper"
            style={{ borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
            <Section>
              <Input s={6} label={t('contatti.form.nomeCognome')} />
              <Input s={6} type="email" label={t('contatti.form.email')} />
              <Input s={12} type="text" label={t('contatti.form.oggettoDelMessaggio')} />
              <Input s={12} type="textarea" label={t('contatti.form.corpoDelMessaggio')} />
              <div>
                <Button
                  waves="light"
                  large
                  className="right blueGradient"
                  style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    path={mdiSend}
                    size="1.3rem"
                    color="white"
                    style={{ transform: 'translateX(-35%)' }}
                  />
                  {t('contatti.form.inviaBtn')}
                </Button>
              </div>
            </Section>
          </Col>
        </Row>
      </Contatti>
    </>
  )
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('homepage')(Home)
