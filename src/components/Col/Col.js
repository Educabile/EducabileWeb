import React from "react";
import classNames from "class-names";
import PropTypes from "prop-types";

const Col = props => {
  const {
    children,
    className,
    id,
    s,
    m,
    l,
    xl,
    offset,
    push,
    pull,
    style
  } = props;

  let colCSS = {
    col: true,
    [`s${s}`]: s,
    [`m${m}`]: m,
    [`l${l}`]: l,
    [`xl${xl}`]: xl
  };

  offset &&
    offset.split(" ").forEach(offset => (colCSS[`offset-${offset}`] = true));

  push && push.split(" ").forEach(push => (colCSS[`push-${push}`] = true));

  pull && pull.split(" ").forEach(pull => (colCSS[`pull-${pull}`] = true));

  return (
    <div id={id} className={classNames(colCSS, className)} style={style}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
  xl: PropTypes.number,
  offset: PropTypes.string,
  push: PropTypes.string,
  pull: PropTypes.string
};

export default Col;
