import * as React from "react";
import CodeSnippet from "../Components/_CodeSnippet";

interface IProps {
  varName: "--font-weight-normal" | "--font-weight-bold";
}

export default function FontWeight({ varName }: IProps) {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <span style={{ fontWeight: `var(${varName})` as any }}>Lorem ipsum</span>
      <CodeSnippet language="css">{varName}</CodeSnippet>
    </>
  );
}
