import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Button, Parallax } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiArrowRight, mdiLibraryBooks } from '@mdi/js'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Base from 'components/Base'
import Contatti from 'components/Contatti'
import FeaturesSlider from 'components/FeatureSlider/FeaturesSlider'
import InEvidenza from './InEvidenza/InEvidenza'
import withWordpress from 'hoc/withWordpress'
import { Redirect } from 'react-router-dom'
import Spinner from 'components/Spinner/Spinner'
import Picture from '@cloudpower97/react-progressive-picture'

const Home = ({ t, page, loading }) => {
  const Content = () => {
    if (page) {
      const featuredImage = page._embedded['wp:featuredmedia']
      const __html = page.content.rendered

      return (
        <>
          {featuredImage && (
            <Parallax image={<Picture src={featuredImage[0].source_url} alt="" />} />
          )}

          {__html && (
            <Base
              title="Educabile una StartUp Innovativa"
              content={
                <div
                  dangerouslySetInnerHTML={{
                    __html,
                  }}
                />
              }
              button={
                <Link to="/azienda">
                  <Button className="hoverable move-icon-forward blueGradient" large>
                    {t('common:scopriDiPiu')}
                    <Icon path={mdiArrowRight} size="1.3rem" />
                  </Button>
                </Link>
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
        <meta
          name="description"
          content="Educabile Srl si propone referente affidabile nel gestire scenari complessi ad alto contenuto tecnologico ed offre servizi mirati ad Aziende, Professionisti ed Istituzioni Scolastiche."
        />
        <meta
          name="keyword"
          content="educazione, azienda, didattica, professionisti, digitale, innovazione, startup"
        />
      </Helmet>

      <FeaturesSlider />

      <Content />

      <InEvidenza
        title={t('inEvidenza.title')}
        button={
          <Link to="/blog?tags=3,4&order=desc">
            <Button large waves="light" className="blueGradient hoverable">
              {t('inEvidenza.blogBtn')}
              <Icon path={mdiLibraryBooks} size="1.3rem" color="white" />
            </Button>
          </Link>
        }
      />

      <Base>
        <Contatti />
      </Base>
    </>
  )
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withWordpress(withNamespaces('homepage')(Home), 'home')
