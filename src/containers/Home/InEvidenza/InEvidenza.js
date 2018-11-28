import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazy-load'
import Posts from './Posts/Posts'
import Styles from './InEvidenza.module.css'
import Fade from 'react-reveal/Fade'

import Base from 'components/Base/Base'

const InEvidenza = ({ children, title, button }) => (
  <Base
    id="in-evidenza"
    className={Styles.Section}
    title={title}
    button={<Fade bottom>{cloneElement(button, { className: Styles.Btn })}</Fade>}>
    <LazyLoad offset={1000}>
      <Posts />
    </LazyLoad>
    {children}
  </Base>
)

InEvidenza.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  button: PropTypes.node,
}

export default InEvidenza
