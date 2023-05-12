import React, { useState } from "react";

import _ from "lodash";
import { useNavigate } from "react-router-dom";

import classes from "./Login.module.scss";
import FormContainer from "./FormContainer";

import { UIButton } from "UIComponents";
import { getButtonProps, getFormInputProps } from "routes/modules/LoginUtils";

const onClickForgotPassword = () => {
  console.log("You just clicked ForgotPassword");
};

const ButtonsComponent = () => {
  const onClickGoogleSignIn = () => {};
  const buttonProps = getButtonProps({ onClickGoogleSignIn });
  return (
    <div className={classes.buttonsContainer}>
      {_.map(buttonProps, ({ text, ...restProps }) => (
        <UIButton {...restProps}>{text}</UIButton>
      ))}
    </div>
  );
};

const getInitialFormData = () => {
  return { emailAddress: "", password: "" };
};

const Login = () => {
  const [formData, setFormData] = useState(getInitialFormData());
  const navigate = useNavigate();
  const handleChange = value => {
    setFormData(prevState => ({ ...prevState, ...value }));
  };
  const onClickSignIn = () => {
    navigate("dashboard");
  };

  const formInputProps = getFormInputProps({
    formData,
    handleChange,
    onClickSignIn,
    onClickForgotPassword,
  });

  return (
    <div className={classes.loginPageContainer}>
      <div className={classes.boardContainer}>{"Board."}</div>

      <div className={classes.rightOuterContainer}>
        <div className={classes.rightContainer}>
          <div className={classes.titleContainer}>
            <span className={classes.title}>{"Sign In"}</span>
            <span className={classes.subtitle}>
              {"Sign in to your account"}
            </span>
          </div>
          <ButtonsComponent />
          <FormContainer formInputProps={formInputProps} />
          <div className={classes.registerText}>
            {"Don’t have an account?"}
            <span className={classes.linkText}>{"Register here"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
