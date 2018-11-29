import React from 'react'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import { scrollTo } from 'libs/utils'

const NoteLegali = ({ t }) => {
  scrollTo(null)
  return (
    <div className="container">
      <h1 className="center">{t('title')}</h1>

      <h2 className="light">{t('modalitaCondizioni.title')}</h2>
      <p className="flow-text">{t('modalitaCondizioni.content')}</p>

      <h2 className="light">{t('normativaApplicabile.title')}</h2>

      <p className="flow-text">{t('normativaApplicabile.content')} </p>

      <h2 className="light">{t('titolaritaDiritti.title')}</h2>

      <p className="flow-text">{t('titolaritaDiritti.content')}</p>

      <h2 className="light">{t('regimeDiUtilizzazione.title')}</h2>

      <p className="flow-text">{t('regimeDiUtilizzazione.content')}</p>
    </div>
  )
}

NoteLegali.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('note-legali')(NoteLegali)
