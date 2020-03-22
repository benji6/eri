import "./style.css";
import * as React from "react";

interface IProps {
  varName:
    | "--e-color-balance-less"
    | "--e-color-balance-more"
    | "--e-color-balance"
    | "--e-color-figure-less"
    | "--e-color-figure-more"
    | "--e-color-figure"
    | "--e-color-ground-less"
    | "--e-color-ground-more"
    | "--e-color-ground"
    | "--e-color-highlight-0"
    | "--e-color-highlight-1"
    | "--e-color-highlight-2"
    | "--e-color-highlight-3"
    | "--e-color-highlight-4"
    | "--e-color-highlight-5"
    | "--e-color-mask"
    | "--e-color-negative-less"
    | "--e-color-negative-more"
    | "--e-color-negative"
    | "--e-color-positive-less"
    | "--e-color-positive"
    | "--e-color-theme-app"
    | "--e-color-theme-less"
    | "--e-color-theme-more"
    | "--e-color-theme";
}

export default function Color({ varName }: IProps) {
  return (
    <>
      <div
        className="d-color__visual"
        style={{ background: `var(${varName})` }}
      />
      <pre>
        <code>{varName}</code>
      </pre>
    </>
  );
}
