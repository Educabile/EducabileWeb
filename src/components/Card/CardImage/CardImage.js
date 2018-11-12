import React from 'react'
import classNames from 'class-names'
import PropTypes from 'prop-types'
import Button from '../../Button/Button'
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js'

const CardImage = props => {
  const { children, className, image, fab, reveal, style } = props

  const imageCSS = classNames(
    'card-image',
    {
      ' waves-effect': reveal,
      'waves-block': reveal,
      'waves-light': reveal,
    },
    className
  )
  const fabCSS = classNames('halfway-fab', fab.className)

  return (
    <React.Fragment>
      <div className={imageCSS} image={image} style={style}>
        <img className={reveal && 'activator'} src={image} alt="" />
        {children}
      </div>
      {fab && (
        <div className="card-fab" style={{ position: 'relative', zIndex: '1' }}>
          <Button
            className={fabCSS}
            waves={fab.waves}
            large={fab.large}
            floating
            node={fab.node}
            to={fab.to}
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
            }}>
            <Icon path={mdiChevronRight} size="1.5rem" color="white" />
          </Button>
        </div>
      )}
    </React.Fragment>
  )
}

CardImage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default CardImage
