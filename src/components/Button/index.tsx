import "./style.css";
import * as React from "react";
import ButtonGroup from "./ButtonGroup";

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  danger?: boolean;
  variant?: "primary" | "secondary";
}

export default function Button({
  danger = false,
  variant = "primary",
  type = "submit", // Formik gets grumpy if you don't specify this
  ...rest
}: IProps) {
  const className = `e-button e-button--${variant}${
    danger ? " e-button--danger" : ""
  }${rest.disabled ? "" : " ripple"}`;

  return <button {...rest} className={className} type={type} />;
}

Button.Group = ButtonGroup;
