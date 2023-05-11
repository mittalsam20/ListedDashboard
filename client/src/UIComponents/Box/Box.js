import React from "react";

import classNames from "classnames";
import classes from "./Box.module.scss";

const Box = React.memo(props => {
  const { children, className, containerStyle } = props;

  const containerClass = classNames({
    [className]: !!className,
    [classes.container]: true,
  });

  return (
    <div className={containerClass} style={containerStyle}>
      {children}
    </div>
  );
});

export default Box;
