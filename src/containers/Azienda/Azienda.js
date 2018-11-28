import React from 'react'
import PropTypes from 'prop-types'
import { withNamespaces } from 'react-i18next'
import Parallax from 'components/Parallax/Parallax'
import Base from 'components/Base/Base'

const Azienda = ({ t }) => {
  return (
    <>
      <Parallax
        style={{
          height: 380,
          backgroundColor: 'rgba(0,0,0, .125)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        imageSrc="https://images.pexels.com/photos/136419/pexels-photo-136419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
        <h1 className="white-text" style={{ textShadow: 'rgba(0, 0, 0, 0.72) 0px 2px 4px' }}>
          {t('title')}
        </h1>
      </Parallax>
      <Base title={t('mission.title')} showTitleOnLarge content={t('mission.content')} />
      <Base title={t('know-how.title')} showTitleOnLarge content={t('know-how.content')} />
    </>
  )
}

Azienda.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('azienda')(Azienda)
