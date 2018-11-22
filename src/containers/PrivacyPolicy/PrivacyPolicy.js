import React from 'react'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'

const PrivacyPolicy = ({ t }) => (
  <div className="container">
    <h1 className="center">{t('title')}</h1>
    <p className="flow-text">{t('content')}</p>

    <h2 className="light">{t('titolareTrattamento.title')}</h2>

    <p className="flow-text">{t('titolareTrattamento.content')}</p>

    <h2 className="light">{t('luogoDiTrattamentoDeiDati.title')}</h2>

    <p className="flow-text">{t('luogoDiTrattamentoDeiDati.content')}</p>

    <h2 className="light">{t('tipiDiDatiTrattati.title')}</h2>

    <p className="flow-text">{t('tipiDiDatiTrattati.content')}</p>

    <h2 className="light">{t('cookies.title')}</h2>

    <p className="flow-text">{t('cookies.content')}</p>

    <h2 className="light">{t('facoltativitaDelTrattamentoDeiDati.title')}</h2>

    <p className="flow-text">{t('facoltativitaDelTrattamentoDeiDati.content')}</p>

    <h2 className="light">{t('modalitaDelTrattamento.title')}</h2>

    <p className="flow-text">{t('modalitaDelTrattamento.content')}</p>

    <h2 className="light">{t('dirittiDegliInteressati.title')}</h2>

    <p className="flow-text">{t('dirittiDegliInteressati.content')}</p>

    <h2 className="light">{t('richieste.title')}</h2>

    <p className="flow-text">{t('richieste.content')}</p>
  </div>
)

PrivacyPolicy.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('privacy-policy')(PrivacyPolicy)
