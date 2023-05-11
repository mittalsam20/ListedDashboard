import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";

import classes from "./UILabel.module.scss";

const UILabel = React.memo(props => {
  const { label, labelStyle, labelClass, labelComponent, labelContainerStyle } =
    props;

  const labelClasses = classNames(
    { [classes.inputLabel]: true },
    { [classes[labelClass]]: !!labelClass }
  );

  return (
    <div className={classes.container} style={labelContainerStyle}>
      {!!labelComponent && labelComponent}
      {!!label && (
        <div className={labelClasses} style={labelStyle}>
          {label}
        </div>
      )}
    </div>
  );
});

UILabel.defaultProps = {
  label: "",
  labelStyle: {},
  labelClass: "",
};

UILabel.propTypes = {
  labelComponent: PropTypes.element,
  labelStyle: PropTypes.object,
  labelClass: PropTypes.string,
};

export default UILabel;
