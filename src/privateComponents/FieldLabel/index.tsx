import "./style.css";
import * as React from "react";

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  optional: boolean;
}

export default function FieldLabel({ children, optional, ...rest }: IProps) {
  return (
    <span {...rest} className="e-field-label">
      {children}
      {optional && " (optional)"}
    </span>
  );
}
