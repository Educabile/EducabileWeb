// TODO: Remove this component if this PR is accepted: https://github.com/react-materialize/react-materialize/pull/697
import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'

const Container = ({ className, children, ...props }) => (
  <div className={cx('container', className)} {...props}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Container
