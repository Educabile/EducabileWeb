import React from 'react'
import PropTypes from 'prop-types'
import { Section, Row, Col } from 'react-materialize'
import Container from '../../../components/Container/Container'
import Styles from './Destinatari.module.css'

const Destinatari = ({ children, button }) => (
  <Section id="destinatari" className="grey lighten-4">
    <Container className="center ">
      <h2 className="hide-on-large-only">
        I <span className="blue-text text-darken-3">Destinatari</span>
      </h2>

      <Row className={Styles.Row}>
        {React.Children.map(children, child => (
          <Col s={12} m={6} xl={4} className={Styles.Col}>
            {child}
          </Col>
        ))}
      </Row>

      {button}
    </Container>
  </Section>
)

Destinatari.propTypes = {
  children: PropTypes.node.isRequired,
  button: PropTypes.node,
}

export default Destinatari
