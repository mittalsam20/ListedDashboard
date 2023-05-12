import TagIcon from "SvgComponents/TagIcon";
import LikeIcon from "SvgComponents/LikeIcon";
import UsersIcon from "SvgComponents/UsersIcon";
import CameraIcon from "SvgComponents/CameraIcon";
import { backgroundColors, fontColors, indicatorColors } from "Constants";

const { textDefault } = fontColors;
const { teal, violet } = indicatorColors;
const { bgLightTeal, bgLightYellow, bgLightRed, bgLightViolet } =
  backgroundColors;

export const statBoxes = [
  {
    key: "REVENUE",
    text: "Total Revenues",
    value: "$2,129,430",
    Icon: CameraIcon,
    statBoxStyle: { backgroundColor: bgLightTeal },
  },
  {
    key: "TRANSACTIONS",
    text: "Total Revenues",
    value: "1,520",
    Icon: TagIcon,
    iconProps: { fill: textDefault },
    statBoxStyle: { backgroundColor: bgLightYellow },
  },
  {
    key: "LIKES",
    text: "Total Revenues",
    value: "9,721",
    Icon: LikeIcon,
    statBoxStyle: { backgroundColor: bgLightRed },
  },
  {
    key: "USERS",
    text: "Total Revenues",
    value: "892",
    Icon: UsersIcon,
    statBoxStyle: { backgroundColor: bgLightViolet },
  },
];

export const schedules = [
  {
    key: "1",
    color: teal,
    time: "14.00-15.00",
    venue: "at Sunset Road, Kuta, Bali ",
    title: "Meeting with suppliers from Kuta Bali",
  },
  {
    key: "2",
    color: violet,
    time: "18.00-20.00",
    venue: "at Central Jakarta ",
    title: "Check operation at Giga Factory 1",
  },
];
