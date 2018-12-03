import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import Parallax from 'components/Parallax/Parallax'
import Base from 'components/Base/Base'
import Icon from '@mdi/react'
import { mdiBullseyeArrow, mdiBookOpenPageVariant } from '@mdi/js'
import { Helmet } from 'react-helmet'

const Azienda = ({ t }) => {
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
      <Parallax
        style={{
          height: 440,
          backgroundColor: 'rgba(0,0,0, .125)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          clipPath: 'polygon(0px 0px, 100% 0px, 100% 330px, 0px 400px)',
        }}
        imageSrc="https://images.pexels.com/photos/136419/pexels-photo-136419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
        <h1 className="white-text" style={{ textShadow: 'rgba(0, 0, 0, 0.72) 0px 2px 4px' }}>
          {t('title')}
        </h1>
      </Parallax>
      <Base
        title={t('mission.title')}
        icon={<Icon path={mdiBullseyeArrow} size={2.5} color="var(--blue)" />}
        showTitleOnLarge
        content={t('mission.content')}
      />
      <Parallax
        style={{
          height: 120,
          backgroundColor: 'rgba(0,0,0, .125)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        imageSrc="https://images.pexels.com/photos/136419/pexels-photo-136419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
        <q
          className="white-text"
          style={{ textShadow: 'rgba(0, 0, 0, 0.72) 0px 2px 4px', fontSize: 'xx-large' }}>
          Educabile si propone di affrontare le nuove ed affascinanti sfide di Industria 4.0 e della
          Didattica Digitale
        </q>
      </Parallax>

      <Base
        icon={<Icon path={mdiBookOpenPageVariant} size={2.5} color="var(--blue)" />}
        title={t('know-how.title')}
        className="left-align"
        showTitleOnLarge
        content={t('know-how.content')}
      />
    </>
  )
}

Azienda.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('azienda')(Azienda)
