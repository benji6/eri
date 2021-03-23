import "./style.css";
import * as React from "react";

export default function NavSubList(
  props: React.HTMLAttributes<HTMLUListElement>
) {
  return (
    <li className="e-nav-sub-list">
      <ul {...props} className="e-nav-sub-list__list" />
    </li>
  );
}

NavSubList.displayName = "Nav.SubList";
