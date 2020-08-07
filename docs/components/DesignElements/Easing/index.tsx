import "./style.css";
import * as React from "react";
import CodeSnippet from "../../Components/_CodeSnippet";

interface IProps {
  varName:
    | "--e-easing-accelerate"
    | "--e-easing-decelerate"
    | "--e-easing-standard";
}

export default function Easing({ varName }: IProps) {
  return (
    <>
      <div
        className="d-easing__visual"
        style={{ animationTimingFunction: `var(${varName})` }}
      />
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}
