import TagIcon from "SvgComponents/TagIcon";
import GearIcon from "SvgComponents/GearIcon";
import AvatarIcon from "SvgComponents/AvatarIcon";
import CalendarIcon from "SvgComponents/CalendarIcon";
import PieChartIcon from "SvgComponents/PieChartIcon";

export const navLinks = [
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
    Icon: AvatarIcon,
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

export const footerLinks = [
  {
    id: "HELP",
    text: "Help",
    link: "#",
  },
  {
    id: "CONTACT_US",
    text: "Contact Us",
    link: "#",
  },
];
