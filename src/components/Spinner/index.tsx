import "./style.css";
import * as React from "react";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
}

export default function Spinner({ inline, ...rest }: IProps) {
  const className = `e-spinner${inline ? " e-spinner--inline" : ""}`;
  return <span {...rest} className={className} />;
}
