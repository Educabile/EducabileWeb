import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-materialize'
import Styles from './Servizi.module.css'
import cx from 'classnames'

import Base from 'components/Base/Base'

const Servizi = ({ id, children, className, button }) => (
  <Base
    id={id}
    className={cx('grey lighten-4', className)}
    button={cloneElement(button, { className: cx(button.props.className, Styles.Btn) })}>
    <Row>{children}</Row>
  </Base>
)

Servizi.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.node,
}

Servizi.defaultProps = {
  id: 'servizi',
}

export default Servizi
