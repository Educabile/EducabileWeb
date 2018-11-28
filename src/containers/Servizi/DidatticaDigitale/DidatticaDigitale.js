import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Icon, { Stack } from '@mdi/react'
import { mdiSchool, mdiLifebuoy, mdiServerNetwork, mdiBank, mdiCircle } from '@mdi/js'
import Container from '../../../components/Container/Container'
import Parallax from '../../../components/Parallax/Parallax'
import {
  supportoAiProgettiJpg as SupportoAiProgetti,
  piattaformeAmbientiJpg as PiattaformeAmbienti,
  infrastruttureDiReteJpg as InfrastruttureDiRete,
  ctaJpg as CTA,
} from '../../../assets/img'
import { withNamespaces } from 'react-i18next'
import PropTypes from 'prop-types'
import Zoom from 'react-reveal/Zoom'
import { scrollTo } from '../../../libs/utils'

class DidatticaDigitale extends Component {
  componentDidMount() {
    scrollTo(null, 56)
  }

  render() {
    return (
      <div
        style={{
          padding: '47px 0px 0px 0px',
        }}>
        <Row>
          <Col s={12} xl={6}>
            <Container>
              <h2 className="center blue-text text-darken-3">{this.props.t('formazione.title')}</h2>
              <p className="flow-text grey-text">{this.props.t('formazione.content')}</p>
            </Container>
          </Col>

          <Col s={12} xl={6}>
            <Parallax
              imageSrc={CTA}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Zoom>
                <Icon path={mdiSchool} size={5} color="white" />
              </Zoom>
            </Parallax>
          </Col>
        </Row>

        <Row>
          <Col s={12} xl={6}>
            <Parallax
              imageSrc={SupportoAiProgetti}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(173, 20, 87, .225)',
              }}>
              <Zoom cascade>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Stack size={5}>
                    <Icon path={mdiCircle} color="#ad1457" />
                    <Icon path={mdiLifebuoy} size={2} color="white" />
                  </Stack>
                  <span
                    className="white-text flow-text"
                    style={{ textShadow: 'rgba(0, 0, 0, 0.72) 0px 2px 4px' }}>
                    supporto specialistico per la promozione e divulgazione dei risultati
                  </span>
                </div>
              </Zoom>
            </Parallax>
          </Col>

          <Col s={12} xl={6}>
            <h2 className="center">{this.props.t('progetti.title')}</h2>

            <p className="grey-text flow-text">{this.props.t('progetti.content')}</p>
          </Col>
        </Row>

        <Row>
          <Col s={12} xl={6}>
            <h2 className="center">{this.props.t('piattaformeAmbientiDidattica.title')}</h2>

            <p className="flow-text grey-text">
              {this.props.t('piattaformeAmbientiDidattica.content')}
            </p>
          </Col>

          <Col s={12} xl={6}>
            <Parallax
              imageSrc={PiattaformeAmbienti}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(57,92,163,.3)',
              }}>
              <Zoom>
                <Icon path={mdiBank} size={5} color="white" />
              </Zoom>
            </Parallax>
          </Col>
        </Row>

        <Row>
          <Col s={12} xl={6}>
            <Parallax
              imageSrc={InfrastruttureDiRete}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Zoom>
                <Icon path={mdiServerNetwork} size={5} color="white" />
              </Zoom>
            </Parallax>
          </Col>

          <Col s={12} xl={6}>
            <h2 className="center">{this.props.t('infrastrutturaDiRete.title')}</h2>

            <p className="flow-text grey-text">{this.props.t('infrastrutturaDiRete.content')}</p>
          </Col>
        </Row>
      </div>
    )
  }
}

DidatticaDigitale.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('didattica-digitale')(DidatticaDigitale)
