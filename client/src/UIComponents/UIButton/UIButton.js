import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";
import { fontColors, backgroundColors } from "Constants";

import classes from "./UIButton.module.scss";

const { bgLightTeal, bgDefault, bgLightRed, bgBlack, bgWhite } =
  backgroundColors;

const variantToStylesMapping = {
  success: { backgroundColor: bgLightTeal },
  primary: { backgroundColor: bgDefault },
  danger: { backgroundColor: bgLightRed },
  plain: { backgroundColor: bgWhite },
  dark: { backgroundColor: bgBlack, color: fontColors.textWhite },
};

const sizeToHeightMapping = {
  xs: "24px",
  sm: "28px",
  md: "32px",
  lg: "40px",
  xl: "48px",
};

const getButtonContainerStyle = ({
  size,
  variant,
  isDisabled,
  containerStyle,
}) => {
  let buttonContainerStyle = {
    height: sizeToHeightMapping[size] || sizeToHeightMapping.md,
    ...(variantToStylesMapping[variant] || variantToStylesMapping.plain),
  };

  if (isDisabled)
    buttonContainerStyle = {
      ...buttonContainerStyle,
      backgroundColor: backgroundColors.bgSubtle,
      cursor: "not-allowed",
    };
  return { ...buttonContainerStyle, ...containerStyle };
};

const getChildComponent = ({ Icon, iconPosition, children }) => {
  // Since the two screens are only using FrontIconPosition so I am not writing a switch statement for rest all cases
  return (
    <>
      {Icon}
      {children}
    </>
  );
};

const UIButton = React.memo(props => {
  const {
    size,
    variant,
    children,
    onClick,
    Icon = null,
    iconPosition,
    className,
    isDisabled,
    isIconButton,
    containerStyle,
  } = props;

  const buttonContainerClass = classNames(
    { [className]: !!className },
    { [classes.buttonContainer]: true },
    { [classes.iconButtonContainer]: isIconButton }
  );

  const childComponent = Icon
    ? getChildComponent({ Icon, iconPosition, children })
    : children;

  const buttonContainerStyle = getButtonContainerStyle({
    size,
    variant,
    isDisabled,
    containerStyle,
  });

  const handleOnClick = event => {
    if (isDisabled) {
      event.stopPropagation();
      return;
    }
    onClick(event);
  };

  return (
    <div
      onClick={handleOnClick}
      style={buttonContainerStyle}
      className={buttonContainerClass}
    >
      {childComponent}
    </div>
  );
});

const buttonSizes = ["xl", "lg", "md", "sm", "xs"];
const iconPositions = ["left", "right", "top", "bottom"];
const buttonVariants = ["success", "primary", "warning", "danger", "plain"];

UIButton.propTypes = {
  size: PropTypes.oneOf(buttonSizes),
  variant: PropTypes.oneOf(buttonVariants),
  onClick: PropTypes.func,
  iconPosition: PropTypes.oneOf(iconPositions),
  isDisabled: PropTypes.bool,
  containerStyle: PropTypes.object,
  isIconButton: PropTypes.bool,
};

UIButton.defaultProps = {
  size: "md",
  variant: "primary",
  onClick: () => {},
  iconPosition: "left",
  isDisabled: false,
  containerStyle: {},
  isIconButton: false,
};

export default UIButton;
