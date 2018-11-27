import React from 'react'
import { Tab, Tabs } from 'react-materialize'
import cx from 'classnames'
import DidatticaDigitale from '../DidatticaDigitale/DidatticaDigitale'
import DataScience from '../DataScience/DataScience'
import Style from './Servizi.module.css'

const Servizi = () => (
  <Tabs
    className={cx('tabs-fixed-width tab-demo z-depth-1', Style.Tabs)}
    onChange={() => {
      window.scrollTo({
        top: document.body.getBoundingClientRect().top,
        behavior: 'smooth',
      })
    }}>
    <Tab title="Didattica Digitale" active={window.location.href.includes('didattica-digitale')}>
      <DidatticaDigitale />
    </Tab>
    <Tab title="Data Science" active={window.location.href.includes('data-science')}>
      <DataScience />
    </Tab>
  </Tabs>
)

export default Servizi
