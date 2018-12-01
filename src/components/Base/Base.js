import React from 'react'
import PropTypes from 'prop-types'
import { Section, Row } from 'react-materialize'
import Container from '../Container/Container'

const Base = ({ id, children, title, showTitleOnLarge, content, icon, button, className }) => (
  <Section id={id} className={className}>
    <Container className="center">
      {icon}
      {title ? <h2 className={showTitleOnLarge ? null : 'hide-on-large-only'}>{title}</h2> : null}
      {content ? <p className="flow-text grey-text text-darken-1 left-align">{content}</p> : null}
      {children ? <Row>{children}</Row> : null}
      {button}
    </Container>
  </Section>
)

Base.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.node,
  button: PropTypes.node,
  className: PropTypes.string,
  /** Boolean indicating whether the title should render on large screens */
  showTitleOnLarge: PropTypes.bool,
}

Base.defaultProps = {
  showTitleOnLarge: false,
}

export default Base
