import * as React from "react";

interface IProps {
  varName: "--e-font-weight-normal" | "--e-font-weight-bold";
}

export default function FontWeight({ varName }: IProps) {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <span style={{ fontWeight: `var(${varName})` as any }}>Lorem ipsum</span>
      <pre>
        <code>{varName}</code>
      </pre>
    </>
  );
}
