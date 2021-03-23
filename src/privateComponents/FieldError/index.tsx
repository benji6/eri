import "./style.css";
import * as React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  indent?: boolean; // used by Checkbox and Toggle
}

export default function FieldError({
  children,
  indent = false,
  ...rest
}: IProps) {
  return children ? (
    <div
      {...rest}
      aria-live="polite"
      className={`fs-0 negative${indent ? " e-field-error--indent" : " pt-1"}`}
    >
      {children}
    </div>
  ) : null;
}
