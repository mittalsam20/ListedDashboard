import React from "react";

import classes from "./SearchBar.module.scss";
import SearchIcon from "SvgComponents/SearchIcon";
import { backgroundColors, fontColors } from "Constants";
import InputTextField from "UIComponents/InputTextField";

const searchBarInputStyle = {
  height: "32px",
  color: fontColors.placeholder,
  backgroundColor: backgroundColors.bgWhite,
};

const getCustomStyles = ({ inputStyle }) => {
  return { ...searchBarInputStyle, ...inputStyle };
};

const SearchBar = props => {
  const {
    value,
    onChange,
    disabled = false,
    autoFocus = false,
    className,
    inputStyle = {},
    placeholder = "Search...",
    isAutoCompleteRequired = false,
  } = props;

  const customStyles = getCustomStyles({ inputStyle });

  return (
    <div className={classes.searchBarContainer}>
      <InputTextField
        type={"text"}
        name={""}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoFocus={autoFocus}
        className={className}
        inputStyle={customStyles}
        placeholder={placeholder}
        autoComplete={isAutoCompleteRequired}
      />
      <SearchIcon className={classes.searchIconContainer} />
    </div>
  );
};

export default SearchBar;
