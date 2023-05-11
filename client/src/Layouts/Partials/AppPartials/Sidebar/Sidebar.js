import React from "react";

import _ from "lodash";

import classes from "./Sidebar.module.scss";

import TagIcon from "SvgComponents/TagIcon";
import GearIcon from "SvgComponents/GearIcon";
import CalendarIcon from "SvgComponents/CalendarIcon";
import PieChartIcon from "SvgComponents/PieChartIcon";
import UserAvatarIcon from "SvgComponents/UserAvatarIcon";
import { useLocation } from "react-router-dom";

const navLinks = [
  {
    id: "DASHBOARD",
    Icon: PieChartIcon,
    linkText: "Dashboard",
    route: "dashboard",
  },
  {
    id: "TRANSACTIONS",
    Icon: TagIcon,
    linkText: "Transactions",
    route: "transactions",
  },
  {
    id: "SCHEDULES",
    Icon: CalendarIcon,
    linkText: "Schedules",
    route: "schedules",
  },
  {
    id: "USERS",
    Icon: UserAvatarIcon,
    linkText: "Users",
    route: "users",
  },
  {
    id: "SETTINGS",
    Icon: GearIcon,
    linkText: "Settings",
    route: "settings",
  },
];

const footerLinks = [
  {
    id: "HELP",
    text: "Help",
    link: "",
  },
  {
    id: "CONTACT_US",
    text: "Contact Us",
    link: "",
  },
];

const getNavLinkStyle = ({ route, currentRoute }) => {
  const isRouteActive = route === currentRoute;
  return isRouteActive ? { fontWeight: "700" } : {};
};

const Sidebar = () => {
  const location = useLocation();
  const currentRoute = _.last(location.pathname.split("/"));

  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.title}>{"Board."}</div>
      <div className={classes.navListContainer}>
        {_.map(navLinks, ({ id, Icon, linkText, route }) => {
          const navLinkStyle = getNavLinkStyle({ route, currentRoute });
          return (
            <div key={id} className={classes.navLink} style={navLinkStyle}>
              <Icon />
              <span>{linkText}</span>
            </div>
          );
        })}
      </div>
      <div className={classes.footerLinksContainer}>
        {_.map(footerLinks, ({ id, text, link }) => {
          return <span id={id}>{text}</span>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
