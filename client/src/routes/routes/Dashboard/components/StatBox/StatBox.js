import React from "react";

import { Box } from "UIComponents";
import classes from "./StatBox.module.scss";

const StatBox = props => {
  const { text, value, Icon, iconProps = {}, statBoxStyle } = props;
  return (
    <Box className={classes.statBox} containerStyle={statBoxStyle}>
      <Icon {...iconProps} />
      <div className={classes.info}>
        <span className={classes.title}>{text}</span>
        <span className={classes.value}>{value}</span>
      </div>
    </Box>
  );
};

export default StatBox;
