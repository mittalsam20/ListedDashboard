import React from "react";

import _ from "lodash";

import Box from "UIComponents/Box";
import UIButton from "UIComponents/UIButton";
import classes from "./FormContainer.module.scss";
import InputTextField from "UIComponents/InputTextField";

const FormContainer = props => {
  const { formInputProps } = props;

  return (
    <Box className={classes.formContainer}>
      {_.map(formInputProps, ({ id, formType, value, ...restProps }) => {
        return formType === "button" ? (
          <UIButton key={id} {...restProps}>
            {value}
          </UIButton>
        ) : formType === "link" ? (
          <div key={id} {...restProps}>
            {value}
          </div>
        ) : (
          <InputTextField key={id} value={value} {...restProps} />
        );
      })}
    </Box>
  );
};

export default FormContainer;
