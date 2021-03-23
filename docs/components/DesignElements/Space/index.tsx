import "./style.css";
import * as React from "react";
import CodeSnippet from "../../Components/_CodeSnippet";

interface IProps {
  varName:
    | "--e-border-width-0"
    | "--e-border-width-1"
    | "--e-border-width-2"
    | "--e-space-0"
    | "--e-space-1"
    | "--e-space-2"
    | "--e-space-3"
    | "--e-space-4";
}

export default function Space({ varName }: IProps) {
  return (
    <>
      <div
        className="d-space__visual br-0"
        style={{ width: `var(${varName})` }}
      />
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}
