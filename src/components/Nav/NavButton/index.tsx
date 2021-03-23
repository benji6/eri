import "./style.css";
import * as React from "react";
import Icon from "../../Icon";

export default function NavButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button {...props} className="e-nav-button flex fs-0 fw-b ripple">
      <span className="e-nav-button__text mr-1">Menu</span>
      <Icon name="menu" size="3" />
    </button>
  );
}

NavButton.displayName = "Nav.Button";
