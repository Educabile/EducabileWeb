import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'
import CardContent from './CardContent/CardContent'
import CardTitle from './CardTitle/CardTitle'
import CardAction from './CardAction/CardAction'
import CardImage from './CardImage/CardImage'

const Card = ({
  children,
  className,
  title,
  image,
  fab,
  horizontal,
  actions,
  reveal,
  stickyActions,
  small,
  medium,
  large,
  style,
}) => {
  const cardCSS = cx(
    'card',
    {
      horizontal,
      'sticky-action': stickyActions,
      small,
      medium,
      large,
    },
    className
  )

  let card = (
    <>
      <CardContent>
        <CardTitle className={title.className}>
          {typeof title === 'object' ? title.title : title}
        </CardTitle>
        {children}
      </CardContent>
      <CardAction>{actions}</CardAction>
    </>
  )

  if (image) {
    card = (
      <>
        <CardImage image={image} fab={fab}>
          {fab && !fab.large && (
            <CardTitle className={title.className}>
              {typeof title === 'object' ? title.title : title}
            </CardTitle>
          )}
        </CardImage>
        <CardContent>
          {fab && fab.large && (
            <CardTitle className={title.className}>
              {typeof title === 'object' ? title.title : title}
            </CardTitle>
          )}
          {children}
        </CardContent>
        <CardAction>{actions}</CardAction>
      </>
    )
  }

  if (horizontal) {
    card = (
      <>
        <CardImage image={image} fab={fab} />
        <div className="card-stacked">
          <CardContent>{children}</CardContent>
          <CardAction>{actions}</CardAction>
        </div>
      </>
    )
  }

  if (reveal) {
    card = (
      <>
        <CardImage image={image} reveal />
        <CardContent>
          <CardTitle reveal>{title}</CardTitle>
        </CardContent>
        <CardAction>{actions}</CardAction>
        <div className="card-reveal">
          <CardTitle className={title.className} closeReveal>
            {typeof title === 'object' ? title.title : title}
          </CardTitle>
          {children}
        </div>
      </>
    )
  }

  return (
    <div className={cardCSS} style={style}>
      {card}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      className: PropTypes.string,
    }),
  ]),
  image: PropTypes.string,
  horizontal: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.object,
  stickyActions: PropTypes.bool,
  fab: PropTypes.object,
  reveal: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
}

export default Card
