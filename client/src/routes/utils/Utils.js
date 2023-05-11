import { fontColors } from "Constants";
import AppleLogoIcon from "SvgComponents/AppleLogoIcon";
import GoogleLogoIcon from "SvgComponents/GoogleLogoIcon";

export const getButtonProps = ({ onClickGoogleSignIn }) => {
  return [
    {
      key: "GOOGLE_LOGIN",
      text: "Sign in with Google",
      Icon: <GoogleLogoIcon />,
      variant: "subtle",
      onClick: onClickGoogleSignIn,
    },
    {
      key: "APPLE_LOGIN",
      text: "Sign in with Apple",
      Icon: <AppleLogoIcon />,
      variant: "subtle",
      onClick: () => {},
    },
  ];
};

export const getFormInputProps = ({
  formData,
  handleChange,
  onClickSignIn,
  onClickForgotPassword,
}) => {
  const { emailAddress, password } = formData;
  return [
    {
      id: "EMAIL_ADDRESS",
      formType: "textField",
      type: "text",
      label: "Email address",
      name: "emailAddress",
      value: emailAddress,
      autoFocus: true,
      placeholder: "Email address",
      onChange: handleChange,
    },
    {
      id: "PASSWORD",
      formType: "textField",
      type: "password",
      label: "Password",
      name: "password",
      value: password,
      placeholder: "Password",
      onChange: handleChange,
    },
    {
      id: "FORGOT_PASSWORD",
      formType: "link",
      style: { color: fontColors.link, cursor: "pointer" },
      value: "Forgot password?",
      onClick: onClickForgotPassword,
    },
    {
      id: "SIGN_IN_BUTTON",
      formType: "button",
      value: "Sign In",
      fullWidth: true,
      variant: "dark",
      size: "lg",
      containerStyle: { fontWeight: "700", fontSize: "1rem" },
      onClick: onClickSignIn,
    },
  ];
};
