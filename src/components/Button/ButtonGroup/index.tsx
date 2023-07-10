import "./style.css";
import * as React from "react";

export default function ButtonGroup(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  return <div {...props} className="button-group center" />;
}

ButtonGroup.displayName = "Button.Group";
