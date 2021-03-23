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
    <span {...rest} className="block fs-0 fw-b mb-1">
      {children}
      {optional && " (optional)"}
    </span>
  );
}
