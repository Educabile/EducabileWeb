import React, { Component } from 'react'
import classNames from 'class-names'
import PropTypes from 'prop-types'
import CardContent from './CardContent/CardContent'
import CardTitle from './CardTitle/CardTitle'
import CardAction from './CardAction/CardAction'
import CardImage from './CardImage/CardImage'

class Card extends Component {
  render() {
    const {
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
    } = this.props

    const cardCSS = classNames(
      'card',
      { horizontal, 'sticky-action': stickyActions, small, medium, large },
      className
    )

    let boh = (
      <React.Fragment>
        <CardContent>
          <CardTitle className={title.className}>
            {typeof title === 'object' ? title.title : title}
          </CardTitle>
          {children}
        </CardContent>
        <CardAction>{actions}</CardAction>
      </React.Fragment>
    )

    if (image) {
      boh = (
        <React.Fragment>
          <CardImage image={image} fab={fab}>
            {fab &&
              !fab.large && (
                <CardTitle className={title.className}>
                  {typeof title === 'object' ? title.title : title}
                </CardTitle>
              )}
          </CardImage>
          <CardContent>
            {fab &&
              fab.large && (
                <CardTitle className={title.className}>
                  {typeof title === 'object' ? title.title : title}
                </CardTitle>
              )}
            {children}
          </CardContent>
          <CardAction>{actions}</CardAction>
        </React.Fragment>
      )
    }

    if (horizontal) {
      boh = (
        <React.Fragment>
          <CardImage image={image} fab={fab} />
          <div className="card-stacked">
            <CardContent>{children}</CardContent>
            <CardAction>{actions}</CardAction>
          </div>
        </React.Fragment>
      )
    }

    if (reveal) {
      boh = (
        <React.Fragment>
          <CardImage image={image} reveal />
          <CardContent>
            <CardTitle reveal>{title}</CardTitle>
          </CardContent>
          <CardAction>{actions}</CardAction>
          <div class="card-reveal">
            <CardTitle className={title.className} closeReveal>
              {typeof title === 'object' ? title.title : title}
            </CardTitle>
            {children}
          </div>
        </React.Fragment>
      )
    }

    return (
      <div className={cardCSS} style={style}>
        {boh}
      </div>
    )
  }
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
}

Card.defaultProps = {}

export default Card
