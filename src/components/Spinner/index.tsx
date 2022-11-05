import "./style.css";
import * as React from "react";

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  inline?: boolean;
  margin?: false | "start" | "end";
}

export default function Spinner({ inline, margin, ...rest }: IProps) {
  const className = `spinner br-max${inline ? " spinner--inline" : ""}${
    margin === undefined ? "" : ` spinner--margin-${margin}`
  }`;
  return <span {...rest} className={className} />;
}
