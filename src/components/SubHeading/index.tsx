import "./style.css";
import * as React from "react";

export default function SubHeading(
  props: React.HTMLAttributes<HTMLSpanElement>,
) {
  return <span {...props} className="sub-heading fs-0 fw-n italic" />;
}
