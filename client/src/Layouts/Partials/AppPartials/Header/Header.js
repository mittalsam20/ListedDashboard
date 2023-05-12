import React, { useState } from "react";

import classes from "./Header.module.scss";
import BellIcon from "SvgComponents/BellIcon";

import { Avatar } from "UIComponents";
import { SearchBar } from "AppComponents";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = value => {
    setSearchText(value);
  };

  return (
    <div className={classes.headerContainer}>
      <div className={classes.pageTitle}>{"Dashboard"}</div>
      <div className={classes.rightContainer}>
        <SearchBar value={searchText} onChange={handleChange} />
        <BellIcon />
        <Avatar isAvatarClickable={true} />
      </div>
    </div>
  );
};

export default Header;
