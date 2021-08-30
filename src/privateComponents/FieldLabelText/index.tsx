import "./style.css";
import * as React from "react";

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  optional: boolean;
}

export default function FieldLabelText({
  children,
  optional,
  ...rest
}: IProps) {
  return (
    <span {...rest} className="field-label-text fs-0 fw-b">
      {children}
      {optional && " (optional)"}
    </span>
  );
}
