import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazy-load'
import cx from 'class-names'
import { Section } from 'react-materialize'

import Posts from './Posts/Posts'
import Styles from './InEvidenza.module.css'
import Fade from 'react-reveal/Fade'
import Base from 'components/Base/Base'

const InEvidenza = ({ id, children, className, title, button }) => (
  <Base
    id={id}
    className={cx(className, Styles.Section)}
    title={title}
    button={<Fade bottom>{cloneElement(button, { className: Styles.Btn })}</Fade>}>
    <Section>
      <LazyLoad offset={1000}>
        <Posts />
      </LazyLoad>
      {children}
    </Section>
  </Base>
)

InEvidenza.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  button: PropTypes.node,
}

InEvidenza.defaultProps = {
  id: 'in-evidenza',
}

export default InEvidenza
