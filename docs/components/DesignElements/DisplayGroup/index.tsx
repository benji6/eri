import "./style.css";
import * as React from "react";

export default function DisplayGroup({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="d-display-group grid">{children}</div>;
}
