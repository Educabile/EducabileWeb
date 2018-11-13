import React, { Component } from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'
class Slider extends Component {
  componentDidMount() {
    this.instance = window.M.Slider.init(this._slider, {
      ...this.props.options,
    })
  }

  componentWillUnmount() {
    this.instance.destroy()
  }

  render() {
    const { children, className } = this.props

    return (
      <div
        className={cx('slider', className)}
        ref={div => {
          this._slider = div
        }}>
        <ul className="slides">
          {React.Children.map(children, (slide, index) => (
            <li key={index}>{slide}</li>
          ))}
        </ul>
      </div>
    )
  }
}

Slider.propTypes = {
  options: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Slider
