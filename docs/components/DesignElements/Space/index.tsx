import "./style.css";
import * as React from "react";

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
      <div className="d-space__visual" style={{ width: `var(${varName})` }} />
      <pre>
        <code>{varName}</code>
      </pre>
    </>
  );
}
