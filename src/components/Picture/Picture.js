//TODO: Remove this component as soon as this PR is accepted: https://github.com/braposo/react-responsive-picture/pull/25
/* eslint-disable */
'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var React = _interopRequireWildcard(require('react'))

var _propTypes = _interopRequireDefault(require('prop-types'))

var _canUseDom = _interopRequireDefault(require('can-use-dom'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  } else {
    var newObj = {}
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {}
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }
    }
    newObj.default = obj
    return newObj
  }
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {}
  var target = {}
  var sourceKeys = Object.keys(source)
  var key, i
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i]
    if (excluded.indexOf(key) >= 0) continue
    target[key] = source[key]
  }
  return target
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype)
  subClass.prototype.constructor = subClass
  subClass.__proto__ = superClass
}

var Picture =
  /*#__PURE__*/
  (function(_React$PureComponent) {
    _inheritsLoose(Picture, _React$PureComponent)

    function Picture() {
      return _React$PureComponent.apply(this, arguments) || this
    }

    var _proto = Picture.prototype

    _proto.componentDidMount = function componentDidMount() {
      // c.f. https://github.com/scottjehl/picturefill/pull/556
      var picturefill

      try {
        picturefill = require('picturefill')
      } catch (x) {
        return
      }

      if (picturefill) {
        picturefill() // browser
      } // else node
    }

    _proto.renderSources = function renderSources() {
      var ieVersion = _canUseDom.default && document.documentMode ? document.documentMode : -1
      var sources = this.props.sources

      if (sources == null) {
        return null
      }

      var mappedSources = sources.map(function(source, index) {
        if (source.srcSet == null) {
          return null
        }

        return React.createElement('source', {
          key: 'sources-' + index,
          srcSet: source.srcSet,
          media: source.media,
          type: source.type,
        })
      }) // IE9 requires the sources to be wrapped around an <audio> tag.

      if (ieVersion === 9) {
        return React.createElement(
          'video',
          {
            style: {
              display: 'none',
            },
          },
          mappedSources
        )
      }

      return mappedSources
    }

    _proto.renderImage = function renderImage(props, skipSizes) {
      if (skipSizes === void 0) {
        skipSizes = false
      }

      var alt = props.alt,
        src = props.src,
        sizes = props.sizes,
        rest = _objectWithoutPropertiesLoose(props, ['alt', 'src', 'sizes']) // Adds sizes props if sources isn't defined

      var sizesProp = skipSizes
        ? null
        : {
            sizes: sizes,
          }
      return React.createElement(
        'img',
        _extends(
          {
            alt: alt,
            srcSet: src,
          },
          sizesProp,
          rest
        )
      )
    }

    _proto.render = function render() {
      var _this$props = this.props,
        sources = _this$props.sources,
        rest = _objectWithoutPropertiesLoose(_this$props, ['sources'])

      if (sources != null) {
        return React.createElement(
          'picture',
          null,
          this.renderSources(),
          this.renderImage(rest, true)
        )
      }

      return this.renderImage(rest)
    }

    return Picture
  })(React.PureComponent)

Picture.propTypes = {
  sources: _propTypes.default.arrayOf(
    _propTypes.default.shape({
      srcSet: _propTypes.default.string.isRequired,
      media: _propTypes.default.string,
      type: _propTypes.default.string.isRequired,
    })
  ),
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  sizes: _propTypes.default.string,
}
Picture.defaultProps = {
  src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
  alt: '',
}
var _default = Picture
exports.default = _default