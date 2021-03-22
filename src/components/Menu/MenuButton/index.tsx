import "./style.css";
import * as React from "react";
import Icon from "../../Icon";

export default function MenuButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button {...props} className="e-menu-button ripple">
      <span className="e-menu-button__text mr-0">Menu</span>
      <Icon name="menu" size="3" />
    </button>
  );
}

MenuButton.displayName = "Menu.Button";
