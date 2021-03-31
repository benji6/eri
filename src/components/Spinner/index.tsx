import "./style.css";
import * as React from "react";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  margin?: "left" | "right";
}

export default function Spinner({ inline, margin, ...rest }: IProps) {
  const className = `spinner br-max${inline ? " spinner--inline" : ""}${
    margin ? ` m${margin[0]}-1` : ""
  }`;
  return <span {...rest} className={className} />;
}
