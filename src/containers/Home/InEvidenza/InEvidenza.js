import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Section, Container } from 'react-materialize'
import LazyLoad from 'react-lazy-load'
import Posts from './Posts/Posts'
import cx from 'classnames'
import Styles from './InEvidenza.module.css'
import Fade from 'react-reveal/Fade'

const InEvidenza = ({ children, title, button }) => (
  <Section id="in-evidenza" className={cx('center scrollspy', Styles.Section)}>
    <Container>
      {title ? <h2 className="hide-on-large-only">{title}</h2> : null}{' '}
      <LazyLoad offset={1000}>
        <Posts />
      </LazyLoad>
      {children}
      <Fade bottom>{cloneElement(button, { className: Styles.Btn })}</Fade>
    </Container>
  </Section>
)

InEvidenza.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  button: PropTypes.node,
}

export default InEvidenza
