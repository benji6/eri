import "./style.css";
import * as React from "react";
import CodeSnippet from "../../Components/_CodeSnippet";

interface IProps {
  varName:
    | "--color-balance-less"
    | "--color-balance-more"
    | "--color-balance"
    | "--color-figure-less"
    | "--color-figure-more"
    | "--color-figure"
    | "--color-ground-highlight"
    | "--color-ground-less"
    | "--color-ground-more"
    | "--color-ground"
    | "--color-highlight-0"
    | "--color-highlight-1"
    | "--color-highlight-2"
    | "--color-highlight-3"
    | "--color-highlight-4"
    | "--color-highlight-5"
    | "--color-mask"
    | "--color-negative-less"
    | "--color-negative-more"
    | "--color-negative"
    | "--color-positive-less"
    | "--color-positive"
    | "--color-theme-app"
    | "--color-theme-less"
    | "--color-theme-more"
    | "--color-theme";
}

export default function Color({ varName }: IProps) {
  return (
    <>
      <div
        className="d-color__visual br-1 bw-2"
        style={{ background: `var(${varName})` }}
      />
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}
