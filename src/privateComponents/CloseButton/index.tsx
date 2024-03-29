import "./style.css";
import * as React from "react";
import { Icon } from "../..";

export default function CloseButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      aria-label="close"
      className="close-button br-1 ripple"
      type="button"
    >
      <Icon name="cross" size="2" />
    </button>
  );
}
