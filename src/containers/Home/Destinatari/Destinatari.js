import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-materialize'
import Styles from './Destinatari.module.css'
import Base from 'components/Base/Base'
import cx from 'classnames'

const Destinatari = ({ children, title, button }) => (
  <Base
    id="destinatari"
    className="grey lighten-4"
    title={title}
    button={cloneElement(button, { className: cx(button.props.className, Styles.ContactBtn) })}>
    {Children.map(children, (child, index) => (
      <Col s={12} m={index === 0 ? 12 : 6} xl={4} className={Styles.Col}>
        {child}
      </Col>
    ))}
  </Base>
)

Destinatari.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.node,
}

export default Destinatari
