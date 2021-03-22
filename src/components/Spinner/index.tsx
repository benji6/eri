import "./style.css";
import * as React from "react";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  margin?: "left" | "right";
}

export default function Spinner({ inline, margin, ...rest }: IProps) {
  const className = `e-spinner${inline ? " e-spinner--inline" : ""}${
    margin ? ` m${margin[0]}-0` : ""
  }`;
  return <span {...rest} className={className} />;
}
