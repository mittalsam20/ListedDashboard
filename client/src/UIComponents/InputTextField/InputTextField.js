import React from "react";

import classNames from "classnames";
import UILabel from "UIComponents/UILabel";
import classes from "./InputTextField.module.scss";

const getUpdatedInputStyle = ({ disabled, inputStyle, errorStyle }) => {
  let updatedInputStyle = inputStyle;
  if (disabled) {
    updatedInputStyle = {
      ...updatedInputStyle,
      cursor: "not-allowed",
      borderWidth: 0,
    };
  }
  return updatedInputStyle;
};

const InputTextField = React.memo(props => {
  const {
    type,
    name,
    value,
    label,
    disabled,
    autoFocus,
    className,
    errorStyle,
    inputStyle,
    placeholder,
    autoComplete,
    onChange,
  } = props;

  const showLabel = !!label;
  const updateValue = event => {
    const value = event.target.value;
    if (onChange) {
      if (name) {
        onChange({ [name]: value });
      } else {
        onChange(value);
      }
    }
  };

  const updatedInputStyle = getUpdatedInputStyle({
    disabled,
    inputStyle,
    errorStyle,
  });

  const inputText = classNames(
    { [className]: true },
    { [classes.inputText]: true }
  );

  return (
    <div className={classes.inputFieldContainer}>
      {showLabel && <UILabel label={label} />}
      <input
        min={0}
        type={type}
        name={name}
        disabled={disabled}
        autoFocus={autoFocus}
        className={inputText}
        onChange={updateValue}
        style={updatedInputStyle}
        placeholder={placeholder}
        value={value ? value : ""}
        autoComplete={autoComplete ? true : "off"}
      />
    </div>
  );
});

export default InputTextField;
