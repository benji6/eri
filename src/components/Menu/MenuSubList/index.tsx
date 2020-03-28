import "./style.css";
import * as React from "react";

export default function MenuSubList(
  props: React.HTMLAttributes<HTMLUListElement>
) {
  return (
    <li className="e-menu-sub-list">
      <ul {...props} />
    </li>
  );
}

MenuSubList.displayName = "Menu.SubList";
