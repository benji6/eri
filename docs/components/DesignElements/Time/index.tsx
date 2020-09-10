import "./style.css";
import * as React from "react";
import CodeSnippet from "../../Components/_CodeSnippet";

interface IProps {
  varName: "--e-time-0" | "--e-time-1" | "--e-time-2" | "--e-time-3";
}

export default function Time({ varName }: IProps) {
  return (
    <>
      <div
        className="d-time__visual"
        style={{ animationDuration: `var(${varName})` }}
      />
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}
