import React, { Component } from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'

class Carousel extends Component {
  componentDidMount() {
    const { options, autoPlay } = this.props

    if (typeof M !== 'undefined') {
      this.instance = window.M.Carousel.init(this._carousel, options)

      if (autoPlay) {
        this.startAutoplay()
        this._carousel.addEventListener('mouseenter', this.stopAutoplay)
        this._carousel.addEventListener('mouseleave', this.startAutoplay)
      }
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy()
      this._carousel.removeEventListener('mouseenter', this.stopAutoplay)
      this._carousel.removeEventListener('mouseleave', this.startAutoplay)
    }
  }

  startAutoplay = () => {
    this.intervalId = setInterval(() => {
      this.instance.next()
    }, 3500)
  }

  stopAutoplay = () => {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  renderImages(child, centerImages) {
    if (typeof child === 'string') {
      return (
        <a
          className={cx('carousel-item', {
            'valign-wrapper': centerImages,
          })}
          href="#!">
          <img src={child} alt="" />
        </a>
      )
    }

    return React.cloneElement(child, {
      className: cx('carousel-item', child.props.className, {
        'valign-wrapper': centerImages,
      }),
    })
  }

  renderFixedItem = fixedItem => <div className="carousel-fixed-item center">{fixedItem}</div>

  render() {
    const {
      children,
      className,
      carouselId,
      fixedItem,
      images,
      centerImages,
      options: { fullWidth },
      ...other
    } = this.props

    const elemsToRender = children || images || []

    return (
      elemsToRender && (
        <div
          id={carouselId}
          ref={el => {
            this._carousel = el
          }}
          className={cx('carousel', { 'carousel-slider': fullWidth }, className)}
          {...other}>
          {fixedItem && this.renderFixedItem(fixedItem)}
          {React.Children.map(elemsToRender, images => this.renderImages(images, centerImages))}
        </div>
      )
    )
  }
}

Carousel.propTypes = {
  autoPlay: PropTypes.bool.isRequired,
  /*
   * Children to render as carousel elements
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
   * Additional cx for carousel wrapper
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

Carousel.defaultProps = {
  options: {
    duration: 200,
    dist: -100,
    shift: 0,
    padding: 0,
    numVisible: 5,
    fullWidth: false,
    indicators: false,
    noWrap: false,
    onCycleTo: null,
  },
  autoPlay: false,
}

export default Carousel
