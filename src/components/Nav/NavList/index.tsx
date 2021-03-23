import "./style.css";
import * as React from "react";

export default function NavList(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul {...props} className="e-nav-list" />;
}

NavList.displayName = "Nav.List";
