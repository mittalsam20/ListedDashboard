import React from "react";

import classes from "./Header.module.scss";
import Avatar from "UIComponents/Avatar";
import BellIcon from "SvgComponents/BellIcon";
import SearchBar from "AppComponents/SearchBar";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.pageTitle}>{"Dashboard"}</div>
      <div className={classes.rightContainer}>
        <SearchBar />
        <BellIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
