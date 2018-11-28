import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Col } from 'react-materialize'
import Icon from '@mdi/react'
import Style from './ServiceCard.module.css'

const ServiceCard = ({ children, icon, title, content, service }) => (
  <Col s={12} m={6} className={cx(Style.ServiceCard, 'center')}>
    <div className={cx(Style.ServiceIcon, Style[service])}>
      <Icon path={icon} size={3} />
    </div>

    <h5>{title}</h5>
    <p className="flow-text grey-text left-align">{content}</p>
    {children}
  </Col>
)

ServiceCard.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  service: PropTypes.oneOf(['DidatticaDigitale', 'DataScience']),
}

export default ServiceCard
