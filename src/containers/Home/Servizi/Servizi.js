import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-materialize'
import Styles from './Servizi.module.css'
import cx from 'classnames'

import Base from 'components/Base/Base'

const Servizi = ({ children, button }) => (
  <Base
    id="servizi"
    className="grey lighten-4"
    button={cloneElement(button, { className: cx(button.props.className, Styles.Btn) })}>
    <Row>{children}</Row>
  </Base>
)

Servizi.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  button: PropTypes.node,
}

export default Servizi
