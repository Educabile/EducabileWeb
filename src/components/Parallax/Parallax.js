import React, { Component } from 'react';
import cx from 'class-names';
import PropTypes from 'prop-types';

class Parallax extends Component {
  componentDidMount() {
    this.setState({
      parallaxInstance: window.M.Parallax.init(this._parallax, {
        ...this.props.options
      })
    });
  }

  componentWillUnmount() {
    this.state.parallaxInstance.destroy();
  }

  render() {
    const { className, children, imageSrc, style } = this.props;
    return (
      <div className={cx('parallax-container', className)} style={style}>
        {children}
        <div className="parallax" ref={div => (this._parallax = div)}>
          <img alt="" src={imageSrc} />
        </div>
      </div>
    );
  }
}

Parallax.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  imageSrc: PropTypes.string.isRequired,
  options: PropTypes.object,
  style: PropTypes.object
};

export default Parallax;
