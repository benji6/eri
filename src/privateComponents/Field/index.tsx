import * as React from "react";

export default function Field({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      className={`select-none my-3${className ? ` ${className}` : ""}`}
    />
  );
}
