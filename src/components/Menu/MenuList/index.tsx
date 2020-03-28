import "./style.css";
import * as React from "react";

export default function MenuList(
  props: React.HTMLAttributes<HTMLUListElement>
) {
  return <ul {...props} className="e-menu-list" />;
}

MenuList.displayName = "Menu.List";
