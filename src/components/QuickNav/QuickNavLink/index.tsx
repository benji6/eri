import "./style.css";
import { NavLink, NavLinkProps } from "react-router-dom";

export default function QuickNavLink(props: NavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `quick-nav-link${isActive ? " quick-nav-link--active" : ""}`
      }
      end
    />
  );
}

QuickNavLink.displayName = "QuickNav.Link";
