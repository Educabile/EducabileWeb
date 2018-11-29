import React from 'react'
import { Tab, Tabs } from 'react-materialize'
import cx from 'class-names'
import DidatticaDigitale from './DidatticaDigitale/DidatticaDigitale'
import DataScience from './DataScience/DataScience'
import Style from './Servizi.module.css'
import PropTypes from 'prop-types'
import { scrollTo } from 'libs/utils'
import { withNamespaces } from 'react-i18next'
import { Helmet } from 'react-helmet'

const Servizi = ({ t, location: { pathname } }) => (
  <>
    <Helmet>
      <title>Educabile - Servizi</title>
      <meta
        name="description"
        content="Educabile offre servizi mirati ad Aziende, Professionisti ed Istituzioni Scolastiche."
      />
      <meta
        name="keyword"
        content="educabile, educazione, servizi, azienda, professionisti, scuola, istituzioni"
      />
    </Helmet>
    {/* FIXME: This is just not going to work. We have problem with both i18n and Parallax. // We might
    want to drop this concept */}
    <Tabs
      className={cx('tabs-fixed-width tab-demo z-depth-1', Style.Tabs)}
      onChange={() => {
        scrollTo(null, 56)
      }}>
      <Tab title={t('didatticaDigitale')} active={pathname.includes('didattica-digitale')}>
        <DidatticaDigitale />
      </Tab>
      <Tab title={t('dataScience')} active={pathname.includes('data-science')}>
        <DataScience />
      </Tab>
    </Tabs>
  </>
)

Servizi.propTypes = {
  t: PropTypes.func.isRequired,
  location: PropTypes.object,
}

export default withNamespaces()(Servizi)
