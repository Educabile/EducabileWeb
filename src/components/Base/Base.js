import React from 'react'
import PropTypes from 'prop-types'
import { Section, Row, Container } from 'react-materialize'
import cx from 'class-names'

const Base = ({
  id,
  children,
  title,
  showTitleOnLarge,
  content,
  icon,
  button,
  className,
  style,
}) => (
  <Section id={id} className={className} style={style}>
    <Container className="center">
      {title && (
        <h2
          className={cx('left-align', {
            'hide-on-large-only': !showTitleOnLarge,
          })}
          style={{ color: 'var(--blue)' }}>
          {icon}
          {title}
        </h2>
      )}
      {content}
      {children && <Row>{children}</Row>}
      {button}
    </Container>
  </Section>
)

Base.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  button: PropTypes.node,
  className: PropTypes.string,
  /** Boolean indicating whether the title should render on large screens */
  showTitleOnLarge: PropTypes.bool,
  style: PropTypes.object,
}

Base.defaultProps = {
  showTitleOnLarge: false,
}

export default Base
