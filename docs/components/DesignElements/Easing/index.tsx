import "./style.css";
import * as React from "react";
import CodeSnippet from "../../Components/_CodeSnippet";

interface IProps {
  varName: "--easing-accelerate" | "--easing-decelerate" | "--easing-standard";
}

export default function Easing({ varName }: IProps) {
  return (
    <>
      <div
        className="d-easing__visual br-1"
        style={{ animationTimingFunction: `var(${varName})` }}
      />
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}
