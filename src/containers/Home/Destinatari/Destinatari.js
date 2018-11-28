import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-materialize'
import Styles from './Destinatari.module.css'
import Base from 'components/Base/Base'
import cx from 'classnames'

const Destinatari = ({ id, children, title, button, className }) => (
  <Base
    id={id}
    className={cx('grey lighten-4', className)}
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
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.node,
}

Destinatari.defaultProps = {
  id: 'destinatari',
}

export default Destinatari
