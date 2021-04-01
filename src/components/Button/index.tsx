import "./style.css";
import * as React from "react";
import ButtonGroup from "./ButtonGroup";

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  danger?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
}

export default function Button({
  danger = false,
  variant = "primary",
  type = "submit", // Formik gets grumpy if you don't specify this
  ...rest
}: IProps) {
  const className = `button fw-b select-none button--${variant}${
    variant === "secondary" ? " bw-2" : ""
  }${variant === "tertiary" ? "" : " br-1 bs-0"}${
    danger ? " button--danger" : ""
  }${rest.disabled ? "" : " ripple"}`;

  return <button {...rest} className={className} type={type} />;
}

Button.Group = ButtonGroup;
