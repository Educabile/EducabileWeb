import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Section, Container } from 'react-materialize'
import Styles from './Azienda.module.css'

const Azienda = ({ children, title, content, button }) => (
  <Section id="azienda" className="white scrollspy">
    <Container className="center">
      {title ? <h2 className="hide-on-large-only">{title}</h2> : null}
      {content ? <p className="flow-text grey-text left-align dropcap">{content}</p> : null}
      {children}
      {cloneElement(button, { className: Styles.Btn })}
    </Container>
  </Section>
)

Azienda.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.node,
}

export default Azienda
