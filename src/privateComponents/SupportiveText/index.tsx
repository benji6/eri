import "./style.css";
import * as React from "react";

export default function SupportiveText(
  props: React.HTMLAttributes<HTMLSpanElement>,
) {
  return props.children ? (
    <span {...props} className="supportive-text fs-0" />
  ) : null;
}
