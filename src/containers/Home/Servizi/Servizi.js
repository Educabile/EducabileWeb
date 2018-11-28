import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Section, Row } from 'react-materialize'
import Container from '../../../components/Container/Container'
import Styles from './Servizi.module.css'

const Servizi = ({ children, title, content, button }) => (
  <div id="aree-di-intervento">
    <Container className="center">
      {title ? <h2 className="hide-on-large-only blue-text text-darken-3">{title}</h2> : null}{' '}
      {content ? <p className="flow-text grey-text left-align">{content}</p> : null}{' '}
    </Container>
    <Section id="servizi" className="grey lighten-4">
      <Container className="center">
        <Row>{children}</Row>
        {cloneElement(button, { className: Styles.Btn })}
      </Container>
    </Section>
  </div>
)

Servizi.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.node,
}

export default Servizi
