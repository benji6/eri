import * as React from "react";
import CodeSnippet from "../Components/_CodeSnippet";

interface IProps {
  varName:
    | "--e-font-size-0"
    | "--e-font-size-1"
    | "--e-font-size-2"
    | "--e-font-size-3"
    | "--e-font-size-4";
}

export default function FontSize({ varName }: IProps) {
  return (
    <>
      <span style={{ fontSize: `var(${varName})` }}>Lorem ipsum</span>
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}