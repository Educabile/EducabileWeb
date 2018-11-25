import React from 'react'
import { Row, Section, Col } from 'react-materialize'
import Parallax from '../../components/Parallax/Parallax'
import Icon from '@mdi/react'
import {
  mdiAccount,
  mdiHeartPulse,
  mdiBriefcase,
  mdiAccountGroup,
  mdiChartLineStacked,
} from '@mdi/js'
import {
  supportoAiProgettiJpg as SupportoAiProgetti,
  piattaformeAmbientiJpg as PiattaformeAmbienti,
  infrastruttureDiReteJpg as InfrastruttureDiRete,
} from '../../assets/img'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'

const DataTechnology = ({ t }) => (
  <>
    <Row>
      <Col s={12} xl={3}>
        <Icon path={mdiAccount} />
      </Col>

      <Col s={12} xl={3}>
        <Section>w</Section>
      </Col>

      <Col s={12} xl={3}>
        <Section>w</Section>
      </Col>
      <Col s={12} xl={3}>
        <Section>w</Section>
      </Col>
    </Row>

    <Row>
      <Col s={12} xl={6}>
        <Parallax
          imageSrc={SupportoAiProgetti}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon path={mdiChartLineStacked} size={5} color="white" />
        </Parallax>
      </Col>

      <Col s={12} xl={6}>
        <h2 className="center">{t('piattaformeInnovative.title')}</h2>

        <p className="grey-text flow-text">{t('piattaformeInnovative.content')}</p>
      </Col>
    </Row>

    <Row>
      <Col s={12} xl={6}>
        <h2 className="center">{t('healthcareManagementSystem.title')}</h2>

        <p className="flow-text grey-text">{t('healthcareManagementSystem.content')}</p>
      </Col>

      <Col s={12} xl={6}>
        <Parallax imageSrc={PiattaformeAmbienti}>
          <Icon path={mdiHeartPulse} size={5} color="white" />
        </Parallax>
      </Col>
    </Row>

    <Row>
      <Col s={12} xl={6}>
        <Parallax imageSrc={InfrastruttureDiRete}>
          <Icon path={mdiBriefcase} size={5} color="white" />
        </Parallax>
      </Col>

      <Col s={12} xl={6}>
        <h2 className="center">{t('digitalCulturalHeritageFramework.title')}</h2>

        <p className="flow-text grey-text">{t('digitalCulturalHeritageFramework.content')}</p>
      </Col>
    </Row>

    <Row>
      <Col s={12} xl={6}>
        <h2 className="center">{t('serviziDiConsulenzaStrategica.title')}</h2>

        <p className="flow-text grey-text">{t('serviziDiConsulenzaStrategica.content')}</p>
      </Col>

      <Col s={12} xl={6}>
        <Parallax imageSrc={PiattaformeAmbienti}>
          <Icon path={mdiAccountGroup} size={5} color="white" />
        </Parallax>
      </Col>
    </Row>
  </>
)

DataTechnology.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('data-science')(DataTechnology)
