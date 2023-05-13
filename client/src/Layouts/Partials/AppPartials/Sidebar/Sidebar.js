import React from "react";

import _ from "lodash";
import { useLocation, useNavigate } from "react-router-dom";

import classes from "./Sidebar.module.scss";
import { footerLinks, navLinks } from "./SideBarUtils";
import { getCurrentRoute } from "utils/helperFunctions";

const getNavLinkStyle = ({ route, currentRoute }) => {
  const isRouteActive = route === currentRoute;
  return isRouteActive ? { fontWeight: "700" } : {};
};

const onClickSidebarLinks = ({ route, navigate, currentRoute }) => {
  if (
    (route === "dashboard" || route === "transactions") &&
    route !== currentRoute
  )
    navigate(route);
};

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = getCurrentRoute({ location });

  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.title}>{"Board."}</div>
      <div className={classes.navListContainer}>
        {_.map(navLinks, ({ id, Icon, linkText, route }) => {
          const navLinkStyle = getNavLinkStyle({ route, currentRoute });
          return (
            <div
              key={id}
              className={classes.navLink}
              style={navLinkStyle}
              onClick={() =>
                onClickSidebarLinks({ route, navigate, currentRoute })
              }
            >
              <Icon />
              <span>{linkText}</span>
            </div>
          );
        })}
      </div>
      <div className={classes.footerLinksContainer}>
        {_.map(footerLinks, ({ id, text, link }) => {
          return <span key={id}>{text}</span>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
