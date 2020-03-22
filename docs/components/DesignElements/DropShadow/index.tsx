import "./style.css";
import * as React from "react";

interface IProps {
  varName: "--e-drop-shadow-0" | "--e-drop-shadow-1" | "--e-drop-shadow-2";
}

export default function DropShadow({ varName }: IProps) {
  return (
    <>
      <div
        className="d-drop-shadow__visual"
        style={{ filter: `var(${varName})` }}
      />
      <pre>
        <code>{varName}</code>
      </pre>
    </>
  );
}
