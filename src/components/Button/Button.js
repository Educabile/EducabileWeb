import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "class-names";

class Button extends Component {
  render() {
    const {
      children,
      to,
      waves,
      submit,
      floating,
      flat,
      large,
      small,
      disabled,
      className,
      node,
      style
    } = this.props;

    const btnCSS = classNames(
      "btn",
      {
        "waves-effect": waves,
        [`waves-${waves}`]: typeof waves === "string",
        "btn-floating": floating,
        "btn-flat": flat,
        "btn-large": large,
        "btn-small": small,
        disabled: disabled
      },
      className
    );

    const C = node;

    let btn = (
      <C className={btnCSS} style={style} to={to}>
        {children}
      </C>
    );

    if (node !== "a") {
      if (node.name === "Link") {
        btn = (
          <C className={btnCSS} style={style} to={to}>
            {children}
          </C>
        );
      }
    } else {
      btn = (
        <C className={btnCSS} style={style}>
          {children}
        </C>
      );
    }
    if (submit) {
      btn = (
        <button className={btnCSS} type="submit" name="action">
          {children}
        </button>
      );
    }

    return btn;
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  to: PropTypes.string,
  href: PropTypes.string,
  waves: PropTypes.oneOf([
    true,
    "light",
    "red",
    "yellow",
    "orange",
    "purple",
    "green",
    "teal"
  ]),
  submit: PropTypes.bool,
  floating: PropTypes.bool,
  flat: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  node: "a"
};

export default Button;
