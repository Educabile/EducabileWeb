import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazy-load'
import cx from 'class-names'

import Posts from './Posts/Posts'
import Styles from './InEvidenza.module.css'
import Fade from 'react-reveal/Fade'
import Base from 'components/Base/Base'
import { BackgroundPicture } from '@cloudpower97/react-progressive-picture'

import { blogJpg, blogWebP, blogSvg } from 'assets/img'

import style from '@cloudpower97/react-advanced-style-proptypes'

const InEvidenza = ({ id, children, className, title, button }) => (
  <BackgroundPicture
    id={id}
    blur={0}
    src={blogJpg}
    sources={[
      {
        srcSet: blogWebP,
        type: 'image/webp',
      },
      {
        srcSet: blogJpg,
        type: 'image/jpg',
      },
    ]}
    placeholder={blogSvg}
    attachment="initial"
    size="cover"
    style={{ backgroundColor: 'rgba(0,0,0, .5)', backgroundBlendMode: 'overlay' }}>
    <Base
      className={cx(className, Styles.Section)}
      title={title}
      button={<Fade bottom>{cloneElement(button, { className: Styles.Btn })}</Fade>}>
      <LazyLoad offset={1000}>
        <Posts />
      </LazyLoad>
      {children}
    </Base>
  </BackgroundPicture>
)

InEvidenza.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  button: PropTypes.node,
  style: style,
}

InEvidenza.defaultProps = {
  id: 'in-evidenza',
}

export default InEvidenza
