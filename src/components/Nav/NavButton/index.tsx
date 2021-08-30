import "./style.css";
import * as React from "react";
import Icon from "../../Icon";

export default function NavButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button {...props} className="nav-button fs-0 fw-b ripple">
      <span className="nav-button__text">Menu</span>
      <Icon name="menu" size="3" />
    </button>
  );
}

NavButton.displayName = "Nav.Button";
