import "./style.css";
import * as React from "react";

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
      <pre>
        <code>{varName}</code>
      </pre>
    </>
  );
}
