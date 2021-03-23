import "./style.css";
import * as React from "react";

export default function NavSubList(
  props: React.HTMLAttributes<HTMLUListElement>
) {
  return (
    <li className="e-nav-sub-list">
      <ul {...props} className="m-0 p-0" />
    </li>
  );
}

NavSubList.displayName = "Nav.SubList";
