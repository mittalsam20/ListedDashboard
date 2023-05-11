import React from "react";

import _ from "lodash";
import classNames from "classnames";

import classes from "./Avatar.module.scss";
import { backgroundColors } from "Constants";
import AvatarIcon from "SvgComponents/AvatarIcon";

const Avatar = React.memo(props => {
  const {
    size,
    className,
    fullName = null,
    imageUrl = null,
    isAvatarClickable,
  } = props;

  const avatarContainerStyles = { width: size };
  const nameInitials =
    fullName && _.map(fullName.split(" "), name => _.first(name)).join("");

  const avatarContainerClass = classNames(
    { [className]: !!className },
    { [classes.avatarContainer]: true },
    { [classes.clickable]: isAvatarClickable }
  );

  return (
    <div className={avatarContainerClass} style={avatarContainerStyles}>
      {!!fullName ? (
        nameInitials
      ) : !!imageUrl ? (
        <img src={imageUrl} alt="USER_PROFILE_IMAGE" />
      ) : (
        <AvatarIcon fill={backgroundColors.bgBlack} width={20} height={20} />
      )}
    </div>
  );
});

export default Avatar;
