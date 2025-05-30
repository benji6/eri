import "./style.css";
import { NavLinkProps, NavLink as ReactRouterNavLink } from "react-router";

export default function NavLink({ to, ...rest }: NavLinkProps) {
  return (
    <li className="nav-link m-0">
      <ReactRouterNavLink
        {...rest}
        className={({ isActive }) =>
          `nav-link__link fw-b ${
            isActive ? " nav-link__link--active" : ""
          } ripple`
        }
        end
        to={to}
      />
    </li>
  );
}

NavLink.displayName = "Nav.Link";
