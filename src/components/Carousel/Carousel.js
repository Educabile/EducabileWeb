import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.renderFixedItem = this.renderFixedItem.bind(this)
    this.renderImages = this.renderImages.bind(this)
    this.renderItems = this.renderItems.bind(this)
    this.startAutoplay = this.startAutoplay.bind(this)
    this.stopAutoplay = this.stopAutoplay.bind(this)
  }

  componentDidMount() {
    const { options = {} } = this.props

    if (typeof window.M !== 'undefined') {
      this.instance = window.M.Carousel.init(this._carousel, options)
    }

    this.startAutoplay()
    this._carousel.addEventListener('mouseenter', this.stopAutoplay)
    this._carousel.addEventListener('mouseleave', this.startAutoplay)
  }

  componentWillUnmount() {
    if (typeof window.M !== 'undefined') {
      this.instance.destroy()
    }

    this._carousel.removeEventListener('mouseenter', this.stopAutoplay)
    this._carousel.removeEventListener('mouseleave', this.startAutoplay)
  }

  startAutoplay() {
    this.intervalId = setInterval(() => {
      this.instance.next()
    }, 2250)
  }

  stopAutoplay() {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  renderImages(child, centerImages) {
    if (typeof child === 'string') {
      return (
        <a
          className={cx('carousel-item', {
            'valign-wrapper': centerImages,
          })}>
          <img src={child} alt="" />
        </a>
      )
    }
    return React.cloneElement(child, {
      className: cx(child.props.className, 'carousel-item'),
    })
  }

  renderItems(child) {
    return <div className="carousel-item">{child}</div>
  }

  renderFixedItem() {
    const { fixedItem } = this.props
    return fixedItem && <div className="carousel-fixed-item center">{fixedItem}</div>
  }

  render() {
    const { children, className, carouselId, images, centerImages, options = {} } = this.props

    if (children) {
      return (
        <div
          id={carouselId}
          ref={el => {
            this._carousel = el
          }}
          className={cx('carousel', { 'carousel-slider': options.fullWidth }, className)}>
          {this.renderFixedItem()}
          {React.Children.map(children, child => this.renderItems(child))}
        </div>
      )
    } else if (images) {
      return (
        <div
          id={carouselId}
          ref={el => {
            this._carousel = el
          }}
          className={cx('carousel', { 'carousel-slider': options.fullWidth }, className)}>
          {this.renderFixedItem()}
          {React.Children.map(images, child => this.renderImages(child, centerImages))}
        </div>
      )
    } else {
      return null
    }
  }
}

Carousel.propTypes = {
  /*
   * Children to render as slider elements
   */
  children: PropTypes.any,
  /*
   * Array of image url's
   */
  images: PropTypes.arrayOf(PropTypes.string),
  /*
   * Makes the images centered inside the carousel using '.valign-wrapper' CSS helper
   */
  centerImages: PropTypes.bool,
  /*
   * Fixed element on slider
   */
  fixedItem: PropTypes.node,
  /*
   * Additional classNames for carousel wrapper
   */
  className: PropTypes.string,
  /*
   * Carousel ID for jQuery manipulating
   */
  carouselId: PropTypes.string,
  /*
   * Carousel initialization options
   * <a href="http://materializecss.com/carousel.html">http://materializecss.com/carousel.html</a>
   */
  options: PropTypes.shape({
    /*
     * Transition duration in milliseconds. (Default: 200)
     */
    duration: PropTypes.number,
    /*
     * Perspective zoom. If 0, all items are the same size. (Default: -100)
     */
    dist: PropTypes.number,
    /*
     * Set the spacing of the center item. (Default: 0)
     */
    shift: PropTypes.number,
    /*
     * Set the padding between non center items. (Default: 0)
     */
    padding: PropTypes.number,
    /*
     * Set the number of visible items. (Default: 5)
     */
    numVisible: PropTypes.number,
    /*
     * Make the carousel a full width slider. (Default: false)
     */
    fullWidth: PropTypes.bool,
    /*
     * Set to true to show indicators. (Default: false)
     */
    indicators: PropTypes.bool,
    /*
     * Don't wrap around and cycle through items. (Default: false)
     */
    noWrap: PropTypes.bool,
    /*
     * Callback for when a new slide is cycled to. (Default: null)
     */
    onCycleTo: PropTypes.func,
  }),
}

export default Carousel
