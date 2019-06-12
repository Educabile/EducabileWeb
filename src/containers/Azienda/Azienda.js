import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import FeatureCard from 'components/FeatureCard/FeatureCard'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiDomain, mdiAccountMultiple, mdiSchool, mdiForum } from '@mdi/js'
import Destinatari from '../RicercaSviluppo/Destinatari/Destinatari'
import PartnerSlider from '../../components/PartnerSlider/PartnerSlider'
import { Button, Section, Parallax } from 'react-materialize'
import { Helmet } from 'react-helmet'
import cx from 'class-names'
import Style from './Azienda.module.css'
import SlideAnim from 'react-reveal/Slide'
import ZoomAnim from 'react-reveal/Zoom'
import Picture from '@cloudpower97/react-progressive-picture'
import withWordpress from 'hoc/withWordpress'
import Base from 'components/Base'
import Spinner from 'components/Spinner/Spinner'
import { Redirect } from 'react-router-dom'

const Azienda = ({ t, page, loading }) => {
  const Content = () => {
    if (page) {
      const featuredImage = page._embedded['wp:featuredmedia']
      const __html = page.content.rendered

      return (
        <>
          {featuredImage && (
            <Parallax
              className={Style.Parallax}
              image={<Picture src={featuredImage[0].source_url} />}
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
              }}>
              <Section className={Style.Section}>
                <div className={cx(Style.Caption, 'rounded')}>
                  <h2>{t('mission.title')}</h2>
                  <p className="light grey-text text-lighten-3 flow-text">{t('mission.content')}</p>
                </div>

                <div className={cx(Style.Caption, 'right rounded')}>
                  <h2>{t('knowHow.title')}</h2>
                  <p className="light grey-text text-lighten-3 flow-text">{t('knowHow.content')}</p>
                </div>
              </Section>
            </Parallax>
          )}

          {__html && (
            <Base
              title={page.title.rendered}
              content={
                <div
                  dangerouslySetInnerHTML={{
                    __html,
                  }}
                />
              }
            />
          )}
        </>
      )
    } else {
      if (loading) {
        return <Spinner />
      } else {
        return <Redirect to="/" />
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Educabile - Azienda</title>
        <meta
          name="description"
          content="Educabile Srl si propone referente affidabile nel gestire scenari complessi ad alto contenuto tecnologico"
        />
        <meta name="keyword" content="educabile, referente, affidabile, tecnologico, tecnologia" />
      </Helmet>

      <Content />

      <Destinatari
        title="Destinatari"
        button={
          <Link to="/contatti">
            <Button className="amber grey-text hoverable text-darken-3" large waves="light">
              {t('homepage:destinatari.contattiBtn')}
              <Icon path={mdiForum} size="1.3rem" />
            </Button>
          </Link>
        }>
        <SlideAnim left>
          <FeatureCard
            icon={mdiDomain}
            title={t('homepage:destinatari.aziende.title')}
            content={t('homepage:destinatari.aziende.content')}
          />
        </SlideAnim>

        <ZoomAnim>
          <FeatureCard
            icon={mdiAccountMultiple}
            title={t('homepage:destinatari.professionisti.title')}
            content={t('homepage:destinatari.professionisti.content')}
          />
        </ZoomAnim>

        <SlideAnim right>
          <FeatureCard
            icon={mdiSchool}
            title={t('homepage:destinatari.istituzioniScolastiche.title')}
            content={t('homepage:destinatari.istituzioniScolastiche.content')}
          />
        </SlideAnim>
      </Destinatari>

      <PartnerSlider title={t('common:partner')} />
    </>
  )
}

Azienda.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withWordpress(withNamespaces(['azienda', 'homepage', 'common'])(Azienda), 'azienda')
