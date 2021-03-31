import "./style.css";
import * as React from "react";

export default function NavList(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul {...props} className="nav-list m-0" />;
}

NavList.displayName = "Nav.List";
