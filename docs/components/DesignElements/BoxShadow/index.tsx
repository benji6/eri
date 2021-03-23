import "./style.css";
import * as React from "react";
import CodeSnippet from "../../Components/_CodeSnippet";

interface IProps {
  varName: "--e-box-shadow-0" | "--e-box-shadow-1" | "--e-box-shadow-2";
}

export default function BoxShadow({ varName }: IProps) {
  return (
    <>
      <div
        className="d-box-shadow__visual br-1"
        style={{ boxShadow: `var(${varName})` }}
      />
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}
