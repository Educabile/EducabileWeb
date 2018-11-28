import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Styles from './Azienda.module.css'
import Base from 'components/Base/Base'

const Azienda = ({ children, title, content, button }) => (
  <Base
    id="azienda"
    title={title}
    content={content}
    className={Styles.Section}
    button={cloneElement(button, { className: cx(button.props.className, Styles.Btn) })}>
    {children}
  </Base>
)

Azienda.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.node,
}

export default Azienda
