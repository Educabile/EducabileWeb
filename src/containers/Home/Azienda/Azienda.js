import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import cx from 'class-names'
import Styles from './Azienda.module.css'
import Base from 'components/Base/Base'

const Azienda = ({ id, children, title, content, className, button }) => (
  <Base
    id={id}
    title={title}
    content={content}
    className={cx(className, Styles.Section)}
    button={cloneElement(button, { className: cx(button.props.className, Styles.Btn) })}>
    {children}
  </Base>
)

Azienda.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.node,
}

Azienda.defaultProps = {
  id: 'azienda',
}

export default Azienda
