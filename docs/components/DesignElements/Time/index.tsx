import "./style.css";
import * as React from "react";
import CodeSnippet from "../../Components/_CodeSnippet";

interface IProps {
  varName: "--time-0" | "--time-1" | "--time-2" | "--time-3";
}

export default function Time({ varName }: IProps) {
  return (
    <>
      <div
        className="d-time__visual br-1"
        style={{ animationDuration: `var(${varName})` }}
      />
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}
