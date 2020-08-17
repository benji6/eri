import "./style.css";
import * as React from "react";

export default function ButtonGroup(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  return <div {...props} className="e-button-group" />;
}

ButtonGroup.displayName = "Button.Group";