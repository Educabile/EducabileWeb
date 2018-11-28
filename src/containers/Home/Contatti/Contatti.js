import React from 'react'
import PropTypes from 'prop-types'
import { Section, Container } from 'react-materialize'

const Contatti = ({ children, title, content, button }) => (
  <Section id="contatti" className="center scrollspy">
    <Container>
      {title ? <h2 className="hide-on-large-only blue-text text-darken-3">{title}</h2> : null}
      {content ? <p className="flow-text grey-text left-align dropcap">{content}</p> : null}
      {children}
      {button}
    </Container>
  </Section>
)

Contatti.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.node,
}

export default Contatti
