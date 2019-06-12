import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'
import { CardPanel } from 'react-materialize'
import Icon from '@mdi/react'
import Style from './FeatureCard.module.css'

const FeatureCard = ({ children, icon, title, content, hoverable, rounded, className, style }) => (
  <CardPanel className={cx(Style.FeatureCard, className, { hoverable, rounded })} style={style}>
    <div className={Style.FeatureIcon}>
      <Icon path={icon} size={3} />
    </div>
    <h5>{title}</h5>
    <div
      style={{
        height: '70%',
        overflowX: 'auto',
      }}>
      <p className="flow-text grey-text">{content}</p>
    </div>
    {children}
  </CardPanel>
)

FeatureCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  hoverable: PropTypes.bool,
  rounded: PropTypes.bool,
  style: PropTypes.object,
}

FeatureCard.defaultProps = {
  hoverable: true,
  rounded: true,
}

export default FeatureCard
