import React from 'react'
import { Row } from 'react-materialize'
import Icon from '@mdi/react'
import { mdiSchool, mdiLifebuoy, mdiServerNetwork, mdiBank } from '@mdi/js'
import Col from '../../components/Col/Col'
import Container from '../../components/Container/Container'
import Parallax from '../../components/Parallax/Parallax'
import {
  supportoAiProgettiJpg as SupportoAiProgetti,
  piattaformeAmbientiJpg as PiattaformeAmbienti,
  infrastruttureDiReteJpg as InfrastruttureDiRete,
  ctaJpg as CTA,
} from '../../assets/img'
import { withNamespaces } from 'react-i18next'

const DidatticaDigitale = ({ t }) => {
  return (
    <>
      <Row>
        <Col s={12} xl={6}>
          <Container>
            <h2 className="center blue-text text-darken-3">{t('formazione.title')}</h2>
            <p className="flow-text grey-text">{t('formazione.content')}</p>
          </Container>
        </Col>

        <Col s={12} xl={6}>
          <Parallax imageSrc={CTA}>
            <Icon path={mdiSchool} size={5} color="white" />
          </Parallax>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <Parallax imageSrc={SupportoAiProgetti}>
            <Icon path={mdiLifebuoy} size={5} color="white" />
          </Parallax>
        </Col>

        <Col s={12} xl={6}>
          <h2 className="center">{t('progetti.title')}</h2>

          <p className="grey-text flow-text">{t('progetti.content')}</p>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <h2 className="center">{t('piattaformeAmbientiDidattica.title')}</h2>

          <p className="flow-text grey-text">{t('piattaformeAmbientiDidattica.content')}</p>
        </Col>

        <Col s={12} xl={6}>
          <Parallax imageSrc={PiattaformeAmbienti}>
            <Icon path={mdiBank} size={5} color="white" />
          </Parallax>
        </Col>
      </Row>

      <Row>
        <Col s={12} xl={6}>
          <Parallax imageSrc={InfrastruttureDiRete}>
            <Icon path={mdiServerNetwork} size={5} color="white" />
            test
          </Parallax>
        </Col>

        <Col s={12} xl={6}>
          <h2 className="center">{t('infrastrutturaDiRete.title')}</h2>

          <p className="flow-text grey-text">{t('infrastrutturaDiRete.content')}</p>
        </Col>
      </Row>
    </>
  )
}

export default withNamespaces('didattica-digitale')(DidatticaDigitale)
