import React from "react";
import classNames from "class-names";
import PropTypes from "prop-types";
import Button from "../../Button/Button";

const CardImage = props => {
  const { children, className, image, fab, reveal, style } = props;

  const imageCSS = classNames(
    "card-image",
    {
      " waves-effect": reveal,
      "waves-block": reveal,
      "waves-light": reveal
    },
    className
  );
  const fabCSS = classNames("halfway-fab", fab.className);

  return (
    <React.Fragment>
      <div className={imageCSS} image={image} style={style}>
        <img className={reveal && "activator"} src={image} alt="" />
        {children}
      </div>
      {fab && (
        <div className="card-fab" style={{ position: "relative", zIndex: "1" }}>
          <Button
            className={fabCSS}
            waves={fab.waves}
            large={fab.large}
            floating
            node={fab.node}
            to={fab.to}
          >
            <i className="material-icons">{fab.icon}</i>
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

CardImage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

export default CardImage;
