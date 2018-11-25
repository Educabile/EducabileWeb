import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js'

const CardImage = ({ children, className, image, fab, reveal, style }) => (
  <>
    <div
      className={cx(
        'card-image',
        {
          'waves-effect': reveal,
          'waves-block': reveal,
          'waves-light': reveal,
        },
        className
      )}
      image={image}
      style={style}>
      <img className={reveal && 'activator'} src={image} alt="" />
      {children}
    </div>
    {fab && (
      <div className="card-fab" style={{ position: 'relative', zIndex: '1' }}>
        <Link to={fab.to}>
          <Button
            className={cx('halfway-fab', fab.className)}
            waves={fab.waves}
            large={fab.large}
            floating
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
            }}>
            <Icon path={mdiChevronRight} size="1.5rem" color="white" />
          </Button>
        </Link>
      </div>
    )}
  </>
)

CardImage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  image: PropTypes.string,
  fab: PropTypes.object,
  reveal: PropTypes.bool,
}

export default CardImage
