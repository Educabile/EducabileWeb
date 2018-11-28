import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Section, Row, Col } from 'react-materialize'
import Container from '../../../components/Container/Container'
import Styles from './Destinatari.module.css'

const Destinatari = ({ children, title, button }) => (
  <Section id="destinatari" className="grey lighten-4">
    <Container className="center ">
      {title ? <h2 className="hide-on-large-only">{title}</h2> : null}{' '}
      <Row className={Styles.Row}>
        {Children.map(children, (child, index) => (
          <Col s={12} m={index === 0 ? 12 : 6} xl={4} className={Styles.Col}>
            {child}
          </Col>
        ))}
      </Row>
      {cloneElement(button, { className: Styles.ContactBtn })}
    </Container>
  </Section>
)

Destinatari.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.node,
}

export default Destinatari
