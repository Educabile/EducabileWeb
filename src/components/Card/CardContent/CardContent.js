import React from "react";
import classNames from "class-names";
import PropTypes from "prop-types";

const CardContent = props => {
  const { children, className, style } = props;

  const contentCSS = classNames("card-content", className);

  return (
    <div className={contentCSS} style={style}>
      {children}
    </div>
  );
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

CardContent.defaultProps = {};

export default CardContent;
